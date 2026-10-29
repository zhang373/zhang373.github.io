/* Interactions for the "Research & Publications" section.
 *  - click a hotspot on the overview figure  -> scroll to its paper card and flash it
 *  - filter chips                            -> show only the cards (and highlight the hotspots) of one thread
 *  - ?rmap-debug in the URL                  -> draw every hotspot box to calibrate coordinates
 * Plain ES5, no dependencies.
 */
(function () {
  'use strict';

  var map = document.getElementById('research-map');
  if (!map) { return; }

  var spots = [].slice.call(map.querySelectorAll('.rmap-spot'));
  var chips = [].slice.call(map.querySelectorAll('.pub-filter button'));

  function cards() {
    return [].slice.call(document.querySelectorAll('.pub-item[data-thread]'));
  }

  function setFilter(filter) {
    chips.forEach(function (c) {
      c.classList.toggle('is-active', c.getAttribute('data-filter') === filter);
    });
    map.classList.toggle('is-filtered', filter !== 'all');

    // light up the boxes of the selected thread on the overview figure ("All" = no highlight)
    spots.forEach(function (s) {
      var lit = filter !== 'all' && s.getAttribute('data-thread') === filter;
      s.classList.toggle('is-lit', lit);
    });

    cards().forEach(function (card) {
      var hide = filter !== 'all' && card.getAttribute('data-thread') !== filter;
      var wasHidden = card.classList.contains('is-hidden');
      card.classList.toggle('is-hidden', hide);
      if (!hide && wasHidden) {
        card.classList.add('is-entering');
        setTimeout(function () { card.classList.remove('is-entering'); }, 300);
      }
    });

    // hide a group heading when none of its cards is visible
    [].slice.call(document.querySelectorAll('.pub-group-title')).forEach(function (h) {
      var g = h.getAttribute('data-group');
      var any = document.querySelector('.pub-item[data-group="' + g + '"]:not(.is-hidden)');
      h.classList.toggle('is-hidden', !any);
    });
  }

  function flash(card) {
    card.classList.remove('pub-flash');
    void card.offsetWidth; // restart the animation
    card.classList.add('pub-flash');
    setTimeout(function () { card.classList.remove('pub-flash'); }, 1500);
  }

  function goTo(id) {
    var card = document.getElementById('pub-' + id);
    if (!card) { return; }
    if (card.classList.contains('is-hidden')) { setFilter('all'); }
    var smooth = 'scrollBehavior' in document.documentElement.style;
    if (smooth) {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      card.scrollIntoView();
    }
    flash(card);
  }

  map.addEventListener('click', function (e) {
    var chip = e.target.closest ? e.target.closest('.pub-filter button') : null;
    if (chip) {
      setFilter(chip.getAttribute('data-filter'));
      return;
    }
    var spot = e.target.closest ? e.target.closest('.rmap-spot') : null;
    if (spot && !spot.classList.contains('rmap-nolink')) {
      e.preventDefault();
      goTo(spot.getAttribute('data-pub'));
    }
  });

  if (/[?&]rmap-debug/.test(window.location.search)) {
    map.classList.add('is-debug');
  }

  // direct links such as /#pub-RITE
  if (/^#pub-/.test(window.location.hash)) {
    setTimeout(function () { goTo(window.location.hash.slice(5)); }, 300);
  }
})();
