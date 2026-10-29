---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Nice to meet you! I am Wenshuo ZHANG (张文硕), currently a Ph.D. candidate in HKUST <a class="inline-logo" href="https://hkust.edu.hk/" title="The Hong Kong University of Science and Technology"><img src="/images/logos/inline/hkust.png" alt="HKUST"></a> [VisLab](http://vis.cse.ust.hk/), supervised by [Prof. Huamin Qu](http://www.huamin.org/)<!-- and working with [Dr.Linping Yuan](https://yuanlinping.top/) -->.       

My research asks how to **align agentic systems with the people who use them**, and I work on both sides of that alignment:

- **Human-centered (HCI).** Designing interactions that let people see and steer what an AI system understands. Examples are [NeuroSync](https://arxiv.org/abs/2508.02823) (**UIST'25 Best Paper Honorable Mention**) and agentic media for sensemaking (BirdRead, under review at CHI'27 with Microsoft Research Asia); I also co-authored a **UIST'26 Best Paper**.
- **Model-side (AI).** Turning interaction signals into training and evaluation for agentic systems: cross-session personalization, resilience to silent tool errors, retrieval, and latent multi-agent communication (under review at ICLR, ACL, and AAAI; preprints on arXiv).
- **In production.** Bringing this work into real systems. At **Tencent WeChat** <a class="inline-logo" href="https://www.tencent.com/" title="Tencent"><img src="/images/logos/inline/tencent.png" alt="Tencent"></a>, I built an efficient agentic dialogue system that raised per-GPU serving capacity by **21×** with task completion within 30 seconds, enabling deployment for up to 2,000 concurrent users; at **NVIDIA** <a class="inline-logo" href="https://www.nvidia.com/" title="NVIDIA"><img src="/images/logos/inline/nvidia.png" alt="NVIDIA"></a>, I built GPU training and inference infrastructure (ISC'26).

Before HKUST, I received a B.S. in Automation, with an additional Dual B.S. in Accounting, from Xi'an Jiaotong University <a class="inline-logo" href="http://en.xjtu.edu.cn/" title="Xi'an Jiaotong University"><img src="/images/logos/inline/xjtu.png" alt="XJTU"></a> in 2024. Along the way, I was a visiting student at HKUST (Guangzhou) <a class="inline-logo" href="https://www.hkust-gz.edu.cn/" title="HKUST (Guangzhou)"><img src="/images/logos/inline/hkust-gz.png" alt="HKUST-GZ"></a> and a government-sponsored exchange student at the University of Hong Kong <a class="inline-logo" href="https://www.hku.hk/" title="The University of Hong Kong"><img src="/images/logos/inline/hku.png" alt="HKU"></a>.

**I am seeking research internships (flexible start, including Summer 2027) on human-centered AI and agentic systems, bridging HCI and model training.** Let's go together to **Make the Impossible Possible and the Possible Easy**.

<!-- ===== Previous About Me text (kept for reference) =====

Before joining HKUST, I obtained my B.S. degree in Automation, the Department of Electronic and Information Engineering, [Xi'an Jiaotong University](http://en.xjtu.edu.cn/), FYP supervised by [Prof. Lei CHEN](https://seng.hkust.edu.hk/about/people/faculty/lei-chen) and [Dr. Zhao CHEN](https://scholar.google.com/citations?user=hx6qq5QAAAAJ&hl=en) at [HKUST Guangzhou](https://www.hkust-gz.edu.cn/) in 2024. I also obtained a dual Bachelor's degree in Accounting (ACCA Track), the Management School, [Xi'an Jiaotong University](http://en.xjtu.edu.cn/), FYP supervised by [Prof. Hong ZHAO](https://som.xjtu.edu.cn/en/info/1112/1146.htm) in 2024. During my UG study, I went to the Department of Electrical and Electronic Engineering at [the University of Hong Kong](https://www.hku.hk/) as a government-sponsored exchange student and worked with [Prof. Xiaojuan QI](https://xjqi.github.io/) there.    

My research interest lies in **Human LLM Alignment in Multi-round Dialog / Agentic System**, including (1) accessing LLM's internal pattern to regularize users' behaviours to meet LLM input needs, (2) learning and modeling users' behaviours to do post-training on LLM to overcome users' shortages, and (3) data augmentation and evaluation to support the bidirectional alignment. 

I am actively looking for Research Intern Positions in the United States, Mainland China, and Hong Kong. I am also looking for Academic Cooperation! Let's go together to **Make the Impossible Possible and the Possible Easy**. 

===== end of previous About Me text ===== -->


<span class='anchor' id='news'></span>

# 🔥 News

<div class="news-scroll" markdown="1">

- *2026.10*: &nbsp;🎉🎉 Four papers are now on arXiv: RITE (ICLR'27 submission, with WeChat Group, Tencent), LatBridge and InsightRAG (ACL'27 submissions), and QuAD (NAACL submission). BirdRead, with Microsoft Research Asia, is submitted to CHI 2027. Thanks to my coauthors!
- *2026.07*: &nbsp;🎉🎉 Sonic Stage gets the UIST 2026 `🎖️Best Paper Award` (top 1%)! I am a co-author. Congratulations to Shuchang and all the coauthors!
- *2026.07*: &nbsp;🎉🎉 Fewer Clarifications, Better Code (PACA) is submitted to AAAI and available on arXiv.
- *2026.06*: &nbsp;🎉🎉 CUDA-Q ML, done at NVIDIA, is presented as a poster at ISC High Performance 2026.
- *2026.05*: &nbsp;🎉🎉 I joined the WeChat Group at Tencent (Project-Up Talented Program) as a research intern on agentic post-training, and gave a talk at NVIDIA Beijing.
- *2026.04*: &nbsp;🎉🎉 Talk on Human-Agentic System Alignment at SCU and UESTC, Chengdu.
- *2025.12*: &nbsp;🎉🎉 I passed my Ph.D. Qualifying Exam, now I am a Ph.D. candidate!
- *2025.10*: &nbsp;🎉🎉 I started my research internship at NVIDIA, Hong Kong (Solutions Architect Team).
- *2025.09*: &nbsp;🎉🎉 Two cooperation papers and one first-author paper submitted to ICLR 2026 (2) and CHI 2026 (1), Thanks to my coauthors!
- *2025.09*: &nbsp;🎉🎉 NeuroSync gets UIST 2025 Best Paper `🎖️Honorable Mention Award`!<!-- It is the first in Hong Kong and the third in China. -->
- *2025.04*: &nbsp;🎉🎉 One cooperation paper and one first-author paper submitted to UIST 2025, Thanks to my coauthors! **They are both accepted!**
- *2024.10*: &nbsp;🎉🎉 One cooperation paper submitted to CSCW 2025, Thanks to my coauthors! Resubmitted to CSCW 2026 as short paper.
- *2024.09*: &nbsp;🎉🎉 We get Prof. Gan’s follwing up $1m Grant! Congratulations wenshuo(yeah this is me), teammates(jindu, haobo) and PI(Dr.Linping YUAN and Dr.Jun HAN)!
- *2024.08*: &nbsp;🎉🎉 I went to HKUST as a year one Ph.D. student. Hope to see you guys!
- *2024.07*: &nbsp;🎉🎉 I got my B.S. degree in Automation, the Department of Electronic and Information Engineering, XJTU!
- *2024.07*: &nbsp;🎉🎉 I got my Dual B.S. degree in Accounting (ACCA Track), the Management School, XJTU!
- *2023.09*: &nbsp;🎉🎉 I start my journey in HKUST(GZ) as a research intern!
- *2023.02*: &nbsp;🎉🎉 I start my journey in HKU as an exchange student!

</div>


<span class='anchor' id='explore'></span>

# 🧭 Explore

<p class="explore-intro">Want to know more? Click a card below, or use the links in the <strong>top navigation bar</strong>, to open the other pages.</p>

<div class="explore-grid">
<a class="explore-card" href="{{ '/research/' | relative_url }}" target="_self">
<span class="explore-icon">📝</span>
<span class="explore-title">Research &amp; Publications</span>
<span class="explore-desc">Research threads, an interactive overview figure, and papers.</span>
</a>
<a class="explore-card" href="{{ '/experience/' | relative_url }}" target="_self">
<span class="explore-icon">💼</span>
<span class="explore-title">Experience &amp; Projects</span>
<span class="explore-desc">Research roles at Tencent, NVIDIA and HKUST (GZ), and funded projects.</span>
</a>
<a class="explore-card" href="{{ '/honors/' | relative_url }}" target="_self">
<span class="explore-icon">🎖</span>
<span class="explore-title">Honors, Talks &amp; Service</span>
<span class="explore-desc">Awards, invited talks, and academic and teaching service.</span>
</a>
</div>

<p class="explore-fun">Let's go grab some fries at the dock, and have fun! 🍟</p>

<div class="travel-row">
<a class="travel-entry" href="{{ '/travel/' | relative_url }}" target="_self">
<img src="{{ '/images/matou.jpg' | relative_url }}" alt="Travel: a photo from the dock" loading="lazy">
<span class="travel-entry-label">Travel</span>
</a>
<p class="travel-entry-hint">You can click the image to jump to the Travel page.</p>
</div>

<!-- Old single-page links such as /#research or /#pub-RITE keep working: forward them to the new pages. -->
<script>
(function () {
  var map = {
    '#research': '/research/', '#experience': '/experience/', '#projects': '/experience/#projects',
    '#awards': '/honors/#awards', '#talks': '/honors/#talks', '#service': '/honors/#service'
  };
  var h = window.location.hash;
  var base = '{{ "" | relative_url }}';
  if (map[h]) { window.location.replace(base + map[h]); }
  else if (/^#pub-/.test(h)) { window.location.replace(base + '/research/' + h); }
})();
</script>


<!-- ===== Education (commented out: already covered in About Me) =====
<span class='anchor' id='education'></span>

# 📖 Educations
- *2024.09 - Exp. 2028*, Ph.D. Student in Computer Science and Engineering with Full Scholarship, the Hong Kong University of Science and Technology. 
- *2020.09 - 2024.07*, B.S. in Automation (like ECE), Faculty of Electronic and Information Engineering, Xi'an Jiaotong University. GPA 3.92, top 2%.
- *2020.09 - 2024.07*, Dual B.S. in Accounting (ACCA Track), School of Management, Xi'an Jiaotong University. GPA 3.83.
- *2023.09 - 2024.02*, Visiting Student in Data Science and Analysis, Information Hub, the Hong Kong University of Science and Technology (Guangzhou).
- *2023.01 - 2023.05*, Funded Exchange Student, Department of Electrical and Electronic Engineering, the University of Hong Kong.
===== end Education ===== -->

<!-- ===== Academic and Teaching Services (commented out) =====
<span class='anchor' id='service'></span>

# 💬 Academic and Teaching Services
- **Conference Reviewer:** CHI 2025/2026 (**Special Recognitions for Outstanding Reviews**)/2027, ChinaVis 2026, CoLM 2026, UIST 2026, ACL ARR 2026/2027, AAAI 2027, ICLR 2027.
- **Journal Reviewer:** Journal of Visualization.
- **Teaching Assistant:** Learning, Reasoning, and Decision Making in AI for UG; C Programming Bridging Course for UG and Data Visualization for Research PG, HKUST.
===== end Services ===== -->

<!-- CV link hidden on purpose (do not make the CV available on the website):
You can find my CV [here](https://github.com/zhang373/zhang373.github.io/blob/main/docs/CV_WenshuoZhang_HKUST_CSE_PhD_Intern.pdf), website updated in 2026.10
-->
