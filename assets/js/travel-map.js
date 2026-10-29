/* Travel page: zoomable / draggable world map with photo pins.
 *  - mouse wheel (or pinch) zooms around the cursor, drag pans, +/-/reset buttons
 *  - pins keep their on-screen size while the map is scaled, so zooming in separates close pins
 *  - hover/focus shows the photo card (CSS); tap toggles it on touch screens
 * Plain ES5, no dependencies.
 */
(function () {
  'use strict';

  var map = document.getElementById('travel-map');
  if (!map) { return; }

  var stage = map.querySelector('.tmap-stage');
  var pins = [].slice.call(map.querySelectorAll('.tmap-pin'));
  var MIN = 1, MAX = 12;
  var view = { k: 1, x: 0, y: 0 };

  function size() { return { w: map.clientWidth, h: map.clientHeight }; }

  function clamp() {
    var s = size();
    view.k = Math.min(MAX, Math.max(MIN, view.k));
    // keep the map covering the viewport
    view.x = Math.min(0, Math.max(s.w - s.w * view.k, view.x));
    view.y = Math.min(0, Math.max(s.h - s.h * view.k, view.y));
  }

  function apply() {
    clamp();
    stage.style.transform = 'translate(' + view.x + 'px,' + view.y + 'px) scale(' + view.k + ')';
    map.style.setProperty('--inv', String(1 / view.k));
    map.classList.toggle('is-zoomed', view.k > 1.001);
  }

  function zoomAt(cx, cy, factor) {
    var k0 = view.k;
    var k1 = Math.min(MAX, Math.max(MIN, k0 * factor));
    if (k1 === k0) { return; }
    // keep the point under the cursor fixed
    view.x = cx - (cx - view.x) * (k1 / k0);
    view.y = cy - (cy - view.y) * (k1 / k0);
    view.k = k1;
    apply();
  }

  function local(e) {
    var r = map.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  /* wheel zoom (only while the cursor is over the map, so the page still scrolls elsewhere) */
  map.addEventListener('wheel', function (e) {
    e.preventDefault();
    var p = local(e);
    zoomAt(p.x, p.y, Math.exp(-e.deltaY * (e.deltaMode === 1 ? 0.05 : 0.0015)));
  }, { passive: false });

  /* drag to pan; pinch to zoom (pointer events) */
  var pointers = {};
  var drag = null, pinch = null, moved = 0;

  function count() { return Object.keys(pointers).length; }

  map.addEventListener('pointerdown', function (e) {
    if (e.target.closest && e.target.closest('.tmap-ctrl')) { return; }
    pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    moved = 0;
    if (count() === 1) {
      drag = { x: e.clientX, y: e.clientY, vx: view.x, vy: view.y };
    } else if (count() === 2) {
      var ids = Object.keys(pointers), a = pointers[ids[0]], b = pointers[ids[1]];
      pinch = { d: Math.hypot(a.x - b.x, a.y - b.y), k: view.k };
      drag = null;
    }
  });

  map.addEventListener('pointermove', function (e) {
    if (!pointers[e.pointerId]) { return; }
    pointers[e.pointerId] = { x: e.clientX, y: e.clientY };
    if (pinch && count() === 2) {
      var ids = Object.keys(pointers), a = pointers[ids[0]], b = pointers[ids[1]];
      var d = Math.hypot(a.x - b.x, a.y - b.y);
      var r = map.getBoundingClientRect();
      var mx = (a.x + b.x) / 2 - r.left, my = (a.y + b.y) / 2 - r.top;
      zoomAt(mx, my, (pinch.k * d / pinch.d) / view.k);
      moved = 99;
    } else if (drag) {
      var dx = e.clientX - drag.x, dy = e.clientY - drag.y;
      moved = Math.max(moved, Math.abs(dx) + Math.abs(dy));
      if (moved > 4 && !map.classList.contains('is-dragging')) {
        map.classList.add('is-dragging');
        try { map.setPointerCapture(e.pointerId); } catch (err) { /* ignore */ }
      }
      view.x = drag.vx + dx;
      view.y = drag.vy + dy;
      apply();
    }
  });

  function endPointer(e) {
    delete pointers[e.pointerId];
    if (count() < 2) { pinch = null; }
    if (count() === 0) {
      drag = null;
      map.classList.remove('is-dragging');
    } else if (count() === 1) {
      var id = Object.keys(pointers)[0];
      drag = { x: pointers[id].x, y: pointers[id].y, vx: view.x, vy: view.y };
    }
  }
  map.addEventListener('pointerup', endPointer);
  map.addEventListener('pointercancel', endPointer);

  /* buttons */
  map.addEventListener('click', function (e) {
    var b = e.target.closest ? e.target.closest('[data-zoom]') : null;
    if (!b) { return; }
    var s = size(), a = b.getAttribute('data-zoom');
    if (a === 'reset') { view.k = 1; view.x = 0; view.y = 0; apply(); }
    else { zoomAt(s.w / 2, s.h / 2, a === 'in' ? 1.6 : 1 / 1.6); }
  });

  /* keep the photo card inside the map: choose its side from the pin's on-screen position */
  function placePop(pin) {
    var r = map.getBoundingClientRect(), p = pin.getBoundingClientRect();
    var x = (p.left + p.width / 2 - r.left) / r.width * 100;
    var y = (p.top + p.height / 2 - r.top) / r.height * 100;
    pin.classList.toggle('pop-below', y < 45);
    pin.classList.toggle('pop-right', x < 22);
    pin.classList.toggle('pop-left', x > 78);
  }
  pins.forEach(function (pin) {
    pin.addEventListener('mouseenter', function () { placePop(pin); });
    pin.addEventListener('focus', function () { placePop(pin); });
  });

  function closeAll(except) {
    pins.forEach(function (p) { if (p !== except) { p.classList.remove('is-open'); } });
  }
  map.addEventListener('click', function (e) {
    if (moved > 4) { return; }   // it was a drag, not a tap
    var pin = e.target.closest ? e.target.closest('.tmap-pin') : null;
    closeAll(pin);
    if (pin) { placePop(pin); pin.classList.toggle('is-open'); }
  });
  document.addEventListener('click', function (e) {
    if (!(e.target.closest && e.target.closest('#travel-map'))) { closeAll(null); }
  });

  window.addEventListener('resize', apply);
  apply();
})();
