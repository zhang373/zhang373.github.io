---
permalink: /experience/
title: "Experience & Projects"
excerpt: ""
author_profile: true
redirect_from:
  - /projects/
---

<span class='anchor' id='experience'></span>

# 💼 Experience

<div class="exp-list">

<div class="exp-item">
<a class="exp-logo" href="https://www.tencent.com/"><img src="/images/logos/tencent.png" alt="Tencent" onerror="this.style.visibility='hidden'"></a>
<div class="exp-body">
<div class="exp-org"><a href="https://www.tencent.com/">Tencent</a> &middot; WeChat Group (Project-Up, Talented Program)</div>
<div class="exp-role">Research Intern &middot; LLM agentic post-training</div>
<ul class="exp-desc">
<li><strong>Agentic dialogue system (in production):</strong> a conversational product-selection agent for creators on a large-scale in-house short-video commerce platform, evolved from a fixed LLM workflow to a ReAct agent with failure recovery, then to a skill-based architecture.</li>
<li><strong>Agentic post-training &amp; compression (in production):</strong> sketch-of-thought SFT distilling Hunyuan3 into Qwen3.5-9B; per-GPU capacity rose from 3 to 64 concurrent users (21&times;), enabling deployment at up to 2,000 users.</li>
<li><strong>Silent tool-error benchmark:</strong> RITE, evaluating how agents identify, re-fetch and recover from plausible but wrong tool outputs.</li>
</ul>
</div>
</div>

<div class="exp-item">
<a class="exp-logo" href="https://www.nvidia.com/"><img src="/images/logos/nvidia.png" alt="NVIDIA" onerror="this.style.visibility='hidden'"></a>
<div class="exp-body">
<div class="exp-org"><a href="https://www.nvidia.com/">NVIDIA</a> &middot; Solution Architecture, Hong Kong</div>
<div class="exp-role">Solutions Architect Intern (Research, Part-time) &middot; Machine learning infrastructure</div>
<ul class="exp-desc">
<li><strong>CUDA-Q ML (ISC'26 poster):</strong> makes quantum circuits differentiable nodes in PyTorch autograd, with automatic gradient selection and distributed data-parallel training.</li>
<li><strong>Tile-granularity fast inference engine:</strong> suspendable decoder tiles scheduled from one queue cut urgent QEC decoding turnaround by 3.6&ndash;16.6&times; at only 0.2&ndash;1.1% throughput cost.</li>
<li><strong>LLM training &amp; inference parallelism:</strong> Megatron-LM and vLLM, plus technical Q&amp;A for NVIDIA's partner universities working on AI4Science.</li>
</ul>
</div>
</div>

<div class="exp-item">
<a class="exp-logo" href="https://www.hkust-gz.edu.cn/"><img src="/images/logos/hkust-gz.png" alt="HKUST (Guangzhou)" onerror="this.style.visibility='hidden'"></a>
<div class="exp-body">
<div class="exp-org"><a href="https://www.hkust-gz.edu.cn/">HKUST (Guangzhou)</a> &middot; Information Hub</div>
<div class="exp-role">Funded Research Intern &middot; Data science and analysis</div>
<ul class="exp-desc">
<li>ParaGAN, a parameter-controlled adversarial generative model for cervical cell image augmentation (Med Data Lab).</li>
</ul>
</div>
</div>

</div>


<span class='anchor' id='projects'></span>

# 👨‍🏭 Projects

<div class='paper-box proj-item'><div class='paper-box-image'><div><div class="badge">VR English Program</div><img class='pub-img' src='/images/pub/VREnglish.png' alt="sym" loading='lazy' onerror="this.style.visibility='hidden'"></div></div>
<div class='paper-box-text' markdown="1">

**Audio Module Enhancement with Audio Language Model Adaptation for Secondary Students English Education in VR and Physical World**

Center for Language Education @ HKUST & VisLab @ HKUST. Part of the "AI-assisted Virtual Reality English Speaking Program for Secondary Students".

- 30 million HKD from the Quality Education Fund (HK), 9 million for us and 1.4 million HKD for this part
- Down-stream task adaptation and service deployment: built a small SFT dataset from speech scores and distilled it into Qwen2-Audio, Qwen2.5-Omni and traditional models (e.g., Wav2Vec), reaching Spearman and Pearson correlations above 0.8 on secondary-student data. Developed a stream-based service system to organize distributed requests, supporting up to 300 simultaneous users on a single 80G A800.

</div>
</div>

<div class='paper-box proj-item'><div class='paper-box-image'><div><div class="badge">AoE Digital Twin</div><img class='pub-img' src='/images/pub/AoE.png' alt="sym" loading='lazy' onerror="this.style.visibility='hidden'"></div></div>
<div class='paper-box-text' markdown="1">

**Guangdong-Hong Kong-Macao Great Bay Area Regional Earth System Digital Twin Project**

<!-- link removed on request: [Guangdong-Hong Kong-Macao Great Bay Area Regional Earth System Digital Twin Project](https://earthhk.hkust.edu.hk/home) -->

- 60 million HKD from RGC@HK, 1.4 million for us and 0.4 million HKD for this part
- Responsible for "Neural Network and Distillation Based Ocean Data Compression for Visualization Acceleration". Developed a machine learning-based compression framework for real-time, interactive visualization of large-scale scientific data, compressing daily data files from over 6 GB to a 6.75 MB model and cutting processing and rendering time to 0.75 seconds on an Nvidia 3070.
- The pipeline is inspired by Neural Radiance Fields (NeRF): tiny neural networks compress each time step spatially, and knowledge distillation then aggregates the temporal models into a single compact model for edge deployment.

</div>
</div>
