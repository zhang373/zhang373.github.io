---
permalink: /research/
title: "Research & Publications"
excerpt: ""
author_profile: true
---

<span class='anchor' id='research'></span>

# 📝 Research & Publications

My research aligns users and agentic systems along three threads, with the infrastructure that runs them underneath:

<ul class="rm-threads">
<li><strong>User&ndash;agent alignment.</strong> I externalize the LLM's latent understanding as an editable graph so users fix misunderstandings before code is generated (<a target="_self" href="#pub-NeuroSync">NeuroSync</a>), and benchmark whether assistants learn users' cross-session ambiguity patterns to clarify less and code better (<a target="_self" href="#pub-PACA">PACA</a>). Ongoing work uses interaction history as verifiable rewards for RL.</li>
<li><strong>Augmenting users in data mining and sensemaking.</strong> A multi-agent system that quantifies the quality of qualitative data (<a target="_self" href="#pub-QuAD">QuAD</a>), insight-guided retrieval for scientific surveys (<a target="_self" href="#pub-InsightRAG">InsightRAG</a>), and conversational agentic media for deeper sensemaking than text-only chat (<a target="_self" href="#pub-BirdRead">BirdRead</a>).</li>
<li><strong>Augmenting agents.</strong> In a deployed WeChat agent, I moved from fixed workflows to skill-based agents and distilled them with sketch-of-thought SFT; I benchmark resilience to silent tool errors (<a target="_self" href="#pub-RITE">RITE</a>) and enable stable model replacement in latent-communication multi-agent systems (<a target="_self" href="#pub-LatBridge">LatBridge</a>).</li>
<li><strong>Infrastructure.</strong> Training and inference systems for running models on next-generation hardware (<a target="_self" href="#pub-CUDAQML">CUDA-Q ML</a>, NVIDIA).</li>
</ul>

{% include research-map.html %}

<div class="pub-list">
{%- for p in site.data.publications -%}{%- include pub-card.html pub=p -%}{%- endfor -%}
</div>

<p class="pub-note">* Equal contribution, or corresponding author where marked. For the full list of publications and collaborations, please see my <a href="https://scholar.google.com/citations?user=_a7LNhMAAAAJ&hl=zh-CN">Google Scholar</a>.</p>
