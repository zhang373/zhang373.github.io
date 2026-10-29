---
permalink: /travel/
title: "Travel"
excerpt: ""
author_profile: true
---

<span class='anchor' id='travel'></span>

# 🌍 Places I Have Been

I have been to over 20 different provinces in China, and 10 different countries around the world. Here are some fine images.

Scroll to zoom, drag to move the map, and hover over (or tap) a pin to see a photo from that place.

{%- if site.data.travel and site.data.travel.size > 0 %}
<div class="tmap" id="travel-map">
<div class="tmap-stage">
<img class="tmap-img" src="{{ '/images/world-map.svg' | relative_url }}" alt="World map" draggable="false">
{%- for t in site.data.travel %}
{%- assign l = t.lon | plus: 180 | divided_by: 360.0 | times: 100 | round: 3 -%}
{%- assign tp = 84 | minus: t.lat | divided_by: 142.0 | times: 100 | round: 3 -%}
{%- include travel-pin.html t=t left=l top=tp -%}
{%- endfor %}
</div>
<div class="tmap-ctrl" aria-label="Map zoom controls">
<button type="button" data-zoom="in" aria-label="Zoom in">+</button>
<button type="button" data-zoom="out" aria-label="Zoom out">&minus;</button>
<button type="button" data-zoom="reset" aria-label="Reset view">&#8634;</button>
</div>
</div>

<p class="tmap-count"><span class="tmap-legend">&#127968; home &nbsp;&nbsp; &#127891; where I do my PhD</span><span>{{ site.data.travel.size }} place{% if site.data.travel.size > 1 %}s{% endif %} and counting.</span></p>
{%- else %}
<p class="pub-note">Photos coming soon.</p>
{%- endif %}
