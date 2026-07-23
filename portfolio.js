/* ============================================================
 * Content + rendering for Marwa Abdulhai's site (multi-page)
 * ============================================================ */

/* ---------- SIDEBAR: social links + page nav ---------- */
const SOCIAL = [
  { label: "Google Scholar", url: "https://scholar.google.com/citations?user=zFNvU34AAAAJ&hl=en" },
  { label: "GitHub", url: "https://github.com/abdulhaim" },
  { label: "Twitter / X", url: "https://x.com/marwaabdulhai" },
  { label: "Email", url: "mailto:marwa_abdulhai@berkeley.edu" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/marwaabdulhai/" },
];
const NAV = [
  { page: "home", label: "Home" },
  { page: "teaching", label: "Teaching" },
  { page: "talks", label: "Talks" },
  { page: "awards", label: "Awards & Grants" },
  { page: "advice", label: "Advice to Students" },
];

/* ---------- AUTHOR HOMEPAGES ---------- */
const AUTHOR_URLS = {
  "Isadora White": "https://icwhite.github.io/website/",
  "Yanming Wan": "https://simon-wan.github.io/",
  "Joel Z. Leibo": "https://www.jzleibo.com/",
  "Max Kleiman-Weiner": "https://www.maxkw.com/",
  "Natasha Jaques": "https://natashajaques.ai/",
  "Ryan Cheng": "https://www.linkedin.com/in/ryanyicheng",
  "Donovan Clay": "https://www.linkedin.com/in/donovanclay",
  "Tim Althoff": "https://homes.cs.washington.edu/~althoff/",
  "Sergey Levine": "https://people.eecs.berkeley.edu/~svlevine/",
  "Aryansh Shrivastava": "https://www.linkedin.com/in/aryansh-s",
  "Yarin Gal": "https://www.cs.ox.ac.uk/people/yarin.gal/website/",
  "Charlie Snell": "https://sea-snell.github.io/",
  "Charles Sun": "https://www.linkedin.com/in/charlesjsun/",
  "Joey Hong": "https://jxihong.github.io/joeyhong/",
  "Yuexiang Zhai": "https://yx-s-z.github.io/",
  "Kelvin Xu": "https://kelvinxu.github.io/",
  "Micah Carroll": "https://micahcarroll.github.io/",
  "Justin Svegliato": "https://justinsvegliato.com/",
  "Anca Dragan": "https://people.eecs.berkeley.edu/~anca/",
  "Gregory Serapio-García": "https://scholar.google.com/citations?user=fa4EXucAAAAJ",
  "Clement Crepy": "https://scholar.google.com/citations?user=UrmqI6IAAAAJ",
  "Daria Valter": "https://www.linkedin.com/in/ddwalter/",
  "John Canny": "https://www2.eecs.berkeley.edu/Faculty/Homepages/canny.html",
  "Suhong Moon": "https://suhongmoon.github.io/",
  "Minwoo Kang": "https://joshuaminwookang.github.io/",
  "Joseph Suh": "https://josephsuh.org/",
  "Chandler Smith": "https://chandlersmith.me/",
  "Manfred Diaz": "https://manfreddiaz.github.io/",
  "Dylan Hadfield-Menell": "https://people.csail.mit.edu/dhm/",
  "Jose Hernandez-Orallo": "https://scholar.google.com/citations?user=n9AWbcAAAAAJ",
  "Jiaxing Wu": "https://www.linkedin.com/in/jiaxing-wu-187624143",
  "Lior Shani": "https://scholar.google.co.il/citations?user=TrQLB1gAAAAJ",
  "Sabriya Alam": "https://sites.google.com/view/sabriyaalam",
  "Niloufar Salehi": "https://niloufar.org/",
  "Dongki Kim": "https://dkkim93.github.io/",
  "Matthew Riemer": "https://scholar.google.com/citations?user=PK7UzAwAAAAJ",
  "Miao Liu": "http://www.mit.edu/~miaoliu/",
  "Gerald Tesauro": "https://researcher.watson.ibm.com/researcher/view.php?person=us-gtesauro",
  "Jonathan P. How": "https://www.mit.edu/~jhow/",
  "Chuangchuang Sun": "https://scholar.google.com/citations?user=BCbAD0UAAAAJ",
  "Golnaz Habibi": "https://scholar.google.com/citations?user=hU-LeNEAAAAJ",
  "Sebastian Lopez-Cot": "http://acl.mit.edu/people/slcot",
  "Aviral Kumar": "https://aviralkumar2907.github.io/",
  "Christopher Summerfield": "https://www.psy.ox.ac.uk/people/christopher-summerfield",
  "Lennart Luettgau": "https://scholar.google.com/citations?user=mQLH67MAAAAJ&hl=en",
  "Tarek Naous": "https://tareknaous.github.io/",
  "Shuhaib Mehri": "https://shuhaibm.github.io/",
  "Philippe Laban": "https://tingofurro.github.io/",
  "Michel Galley": "https://www.microsoft.com/en-us/research/people/mgalley/",
  "Dilek Hakkani-Tür": "https://siebelschool.illinois.edu/about/people/faculty/dilek",
  "Aleksandra Faust": "https://www.afaust.info/",
  "Maja Mataric": "https://robotics.usc.edu/~maja/",
};

/* ---------- BIO ---------- */
const SUMMARY = `
<div class="summary-par sm-txt">
I'm a Ph.D. candidate at University of California, Berkeley in the
<a href="https://bair.berkeley.edu/" target="_blank">Berkeley Artificial Intelligence Research (BAIR)</a> lab,
advised by <a href="https://people.eecs.berkeley.edu/~svlevine/" target="_blank">Sergey Levine</a>, with
<a href="https://natashajaques.ai/" target="_blank">Natasha Jaques</a> as a close research advisor.
Previously, I did my masters and undergraduate studies at MIT, where I worked with
<a href="https://www.mit.edu/~jhow/" target="_blank">Jonathan P. How</a>.
</div>

<div class="summary-par sm-txt">
My research aims to build AI systems that are not only capable and intelligent, but also <b>safe,
cooperative, and aligned with human values</b>. I am currently a
<a href="https://www.cooperativeai.com/post/announcing-the-2025-cooperative-ai-phd-scholars" target="_blank">Cooperative AI PhD Fellow</a>,
and I'm thankful to be supported by
<a href="https://openai.smapply.org/prog/agentic-ai-research-grants/" target="_blank">OpenAI Research</a>,
the <a href="https://www.quadfellowship.org/2023-quad-fellows" target="_blank">Quad Fellowship</a>, and the
<a href="https://cltc.berkeley.edu/program/ai-policy-hub/" target="_blank">UC Berkeley AI Policy Hub</a>.
Specifically, I am interested in:
</div>

<ul class="sm-txt interests">
  <li><b>AI Safety &amp; Ethics</b>: Designing algorithms to evaluate and mitigate deceptive behavior and align AI behavior with human values.</li>
  <li><b>Reinforcement Learning (RL)</b>: Developing multi-turn RL methods for dialogue, specifically focusing on negotiation and cooperative settings.</li>
  <li><b>Language Models &amp; Interaction</b>: Investigating how LLMs can better model humans to build better simulators for RL algorithms and social science studies.</li>
</ul>
`;

/* ---------- NEWS / UPDATES ---------- */
const UPDATES = [
  { date: "July 2026", text: "I'll be a speaker at the <a href='https://sites.google.com/view/social-sims-with-llms' target='_blank'>CoLM 2026 Workshop on Social Simulations with LLMs</a>." },
  { date: "July 2026", text: "Excited to serve as a teaching assistant for the <a href='https://www.cooperativeai.com/curriculum' target='_blank'>Cooperative AI Foundation's Intro to Cooperative AI</a> course." },
  { date: "July 2026", text: "Started as a Summer Lecturer for <a href='https://inst.eecs.berkeley.edu/~cs188/su26/staff/' target='_blank'>CS188: Introduction to AI</a> at UC Berkeley, lecturing 232 students." },
  { date: "July 2026", text: "Co-organizing the <a href='https://openreview.net/forum?id=5aCINIWn51' target='_blank'>NeurIPS 2026 Workshop on Evaluation of Interactive Agents</a>." },
  { date: "June 2026", text: "Co-organizing the <a href='https://wimlworkshop.org/' target='_blank'>Women in Machine Learning (WiML) workshop at CoLM 2026</a>." },
  { date: "March 2026", text: "Three papers accepted to ICLR 2026 workshops: <a href='https://openreview.net/forum?id=91bXwfHP0Y' target='_blank'>Hierarchical Agenda Reasoning</a> (Scaling Post-training for LLMs), <a href='https://arxiv.org/abs/2510.14318' target='_blank'>Deception in Dialogue</a> (Trustworthy AI), and <a href='https://arxiv.org/abs/2603.18161' target='_blank'>How LLMs Distort Our Written Language</a> (Agents in the Wild)." },
  { date: "March 2026", text: "Our paper <a href='https://sites.google.com/view/llmwritingdistortion/home' target='_blank'>\"How LLMs Distort Our Written Language\"</a> was covered by <a href='https://www.nbcnews.com/tech/tech-news/ai-changing-style-substance-human-writing-study-finds-rcna263789' target='_blank'>NBC News</a> and Psychology Today." },
  { date: "December 2025", text: "Heading to San Diego for NeurIPS 2025 to present three papers: <a href='https://arxiv.org/abs/2511.00222' target='_blank'>Consistently Simulating Human Personas</a>, <a href='https://arxiv.org/abs/2504.03206' target='_blank'>Personalized Dialogue with Curiosity Reward</a>, and <a href='https://arxiv.org/abs/2512.03318' target='_blank'>Evaluating LLM Agents with Concordia</a>." },
  { date: "November 2025", text: "Started as a Student Researcher at Google Paradigms of Intelligence, developing dynamic evaluations for LLM dialogue agents." },
  { date: "September 2025", text: "Selected as a <a href='https://www.cooperativeai.com/post/announcing-the-2025-cooperative-ai-phd-scholars' target='_blank'>Cooperative AI PhD Fellow</a>." },
  { date: "July 2025", text: "Heading to Vancouver for ICML 2025 to present <a href='https://arxiv.org/abs/2311.18232' target='_blank'>LMRL Gym</a>, our benchmark for multi-turn RL with language models." },
  { date: "May 2025", text: "Our psychometric framework for evaluating personality traits in LLMs was published in <a href='https://www.nature.com/articles/s42256-025-01115-6' target='_blank'>Nature Machine Intelligence</a>." },
  { date: "2024", text: "Awarded an <a href='https://openai.smapply.org/prog/agentic-ai-research-grants/' target='_blank'>OpenAI research grant</a> on agentic AI systems." },
  { date: "September 2023", text: "Named a <a href='https://www.quadfellowship.org/2023-quad-fellows' target='_blank'>Quad Fellow</a>." },
  { date: "February 2023", text: "Our paper <a href='https://arxiv.org/abs/2310.15337' target='_blank'>\"Moral Foundations of Large Language Models\"</a> received the Best Paper Award at the AAAI 2023 R²HCAI Workshop." },
  { date: "August 2022", text: "Started as Head Graduate Student Instructor for <a href='https://rail.eecs.berkeley.edu/deeprlcourse/' target='_blank'>CS285: Deep Reinforcement Learning</a> at UC Berkeley." },
  { date: "August 2021", text: "Began my Ph.D. at UC Berkeley in the <a href='https://bair.berkeley.edu/' target='_blank'>BAIR lab</a>." },
];

/* ---------- RESEARCH AREAS ---------- */
const AREAS = ["Deception & AI Safety", "Multi-Turn RL & Dialogue Agents", "Simulating Humans", "LLMs & Society", "Reinforcement Learning"];

/* ---------- PUBLICATIONS (area drives tabs; selected drives the featured block) ---------- */
const PUBS = [
  {
    area: "Multi-Turn RL & Dialogue Agents", image: "har_fig.png", selected: true,
    title: "Hierarchical Agenda Reasoning for Strategic Multi-Turn Dialogue Agents",
    authors: ["Marwa Abdulhai", "Ryan Cheng", "Aryansh Shrivastava", "Aviral Kumar", "Sergey Levine"],
    venue: "ICLR 2026 Scaling Post-training for LLMs Workshop",
    links: [{ label: "Paper", url: "https://openreview.net/forum?id=91bXwfHP0Y" }],
    desc: "We study how dialogue agents can pursue long-horizon goals across a conversation. We introduce hierarchical agenda reasoning, in which an agent maintains and updates a structured agenda of sub-goals to plan strategically over many turns, improving goal completion in complex multi-turn negotiation and persuasion settings.",
  },
  {
    area: "LLMs & Society", image: "llm_distortion.png", selected: true,
    title: "How LLMs Distort Our Written Language",
    authors: ["Marwa Abdulhai*", "Isadora White*", "Yanming Wan", "Ibrahim Qureshi", "Joel Z. Leibo", "Max Kleiman-Weiner", "Natasha Jaques"],
    venue: "<a href='https://agentwild-workshop.github.io/' target='_blank'>ICLR 2026 Agents in the Wild Workshop</a>",
    awards: [{ text: "NBC News", cls: "award-button-2" }],
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2603.18161" },
      { label: "Code", url: "https://github.com/abdulhaim/llm_writing_distortion" },
      { label: "Website", url: "https://sites.google.com/view/llmwritingdistortion/home" },
    ],
    desc: "LLMs are used by over a billion people globally, most often to assist with writing. We demonstrate that LLMs not only alter the voice and tone of human writing, but also consistently alter the intended meaning. Through a randomized controlled trial, large-scale essay editing analysis, and examination of real-world AI-generated peer reviews, we find that heavy LLM use leads to a nearly 70% increase in neutral argumentative stances, significant loss of personal voice, homogenized semantic shifts, and altered scientific evaluation criteria in academic peer review.",
  },
  {
    area: "Deception & AI Safety", image: "tile_turning_tables.png",
    title: "Turning the Tables: Empowering LLMs to Counter Deceptive Opponents",
    authors: ["Marwa Abdulhai", "Jonathan Bodea", "Lennart Luettgau", "Christopher Summerfield"],
    venue: "In Progress",
    links: [],
    desc: "We study how LLM agents can detect and defend against deceptive counterparts in strategic dialogue, developing methods that equip models to recognize manipulation and respond robustly when interacting with adversarial opponents.",
  },
  {
    area: "LLMs & Society", image: "tile_religious_align.png",
    title: "Context-Dependent Alignment Failures in AI-Generated Religious Guidance",
    authors: ["Sabriya Alam*", "Marwa Abdulhai*", "Tarek Naous", "Niloufar Salehi"],
    venue: "CHI 2026 BiAlign Workshop",
    awards: [{ text: "Best Paper", cls: "award-button" }],
    links: [{ label: "Paper", url: "https://bialign-workshop.github.io/2026chi-pdfs/6.pdf" }],
    desc: "Building on our study of AI-generated religious content, we examine how alignment failures in this domain are highly context-dependent — varying across denominations, questions, and phrasings — highlighting the limits of one-size-fits-all alignment for culturally and religiously sensitive guidance.",
  },
  {
    area: "Simulating Humans", image: "user_divergence.png",
    title: "Measuring & Mitigating the Distributional Gap Between Real & Simulated User Behaviors",
    authors: ["Shuhaib Mehri", "Philippe Laban", "Sumuk Shashidhar", "Marwa Abdulhai", "Sergey Levine", "Michel Galley", "Dilek Hakkani-Tür"],
    venue: "Preprint 2026",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2605.07847" },
      { label: "Code", url: "https://github.com/shuhaibm/UserBehavioralDivergence" },
    ],
    desc: "LLM-based user simulators are widely used to train and evaluate conversational agents, but simulated users behave differently from real ones. We quantify this distributional gap — visualized here as separated clusters of real vs. simulated user turns — and propose methods to measure and reduce it, yielding simulators whose behavior more faithfully matches real users.",
  },
  {
    area: "Simulating Humans", extraAreas: ["Multi-Turn RL & Dialogue Agents"], image: "consistency.png", selected: true,
    title: "Consistently Simulating Human Personas with Multi-Turn Reinforcement Learning",
    authors: ["Marwa Abdulhai", "Ryan Cheng", "Donovan Clay", "Tim Althoff", "Sergey Levine", "Natasha Jaques"],
    venue: "NeurIPS 2025",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2511.00222" },
      { label: "Code", url: "https://github.com/abdulhaim/consistent-LLMs" },
      { label: "Website", url: "https://sites.google.com/view/consistent-llms" },
    ],
    desc: "LLMs are increasingly used to simulate human users in interactive settings such as therapy, education, and social role-play. While these simulations enable scalable training and evaluation of AI agents, off-the-shelf LLMs often drift from their assigned personas, contradict earlier statements, or abandon role-appropriate behavior. We introduce a unified framework for evaluating and improving consistency in LLM-generated dialogue, reducing inconsistency by over 55%, resulting in more coherent, faithful, and trustworthy simulated users.",
  },
  {
    area: "Deception & AI Safety", extraAreas: ["Multi-Turn RL & Dialogue Agents"], image: "deception_fig.png", selected: true,
    title: "Deception in Dialogue: Evaluating and Mitigating Deceptive Behavior in Large Language Models",
    authors: ["Marwa Abdulhai", "Ryan Cheng", "Aryansh Shrivastava", "Natasha Jaques", "Yarin Gal", "Sergey Levine"],
    venue: "<a href='https://trustworthy-ai-workshop.github.io/iclr2026/' target='_blank'>ICLR 2026 Trustworthy AI Workshop</a>",
    awards: [{ text: "Cited in Schmidt Sciences Trustworthy AI call", cls: "award-button-2" }],
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2510.14318" },
      { label: "Code", url: "https://github.com/abdulhaim/deceptive_dialogue" },
      { label: "Website", url: "https://sites.google.com/view/deceptive-dialogue" },
    ],
    desc: "LLMs interact with hundreds of millions of people worldwide, powering applications such as customer support, education, and healthcare. However, their ability to produce deceptive outputs poses significant safety concerns. We systematically investigate the extent to which LLMs engage in deception within dialogue, benchmarking 8 state-of-the-art models on 4 dialogue tasks: LLMs naturally exhibit deceptive behavior in ~26% of dialogue turns, and models trained with RLHF still exhibit deception at 43% on average. We introduce a multi-turn RL methodology to fine-tune LLMs to reduce deceptive behaviors, leading to a 77.6% reduction compared to instruction-tuned models.",
  },
  {
    area: "Deception & AI Safety", image: "concordia.png",
    title: "Evaluating Generalization Capabilities of LLM Agents in Mixed-Motive Scenarios Using Concordia",
    authors: ["Chandler Smith", "Marwa Abdulhai", "Manfred Diaz", "[80 authors]", "Dylan Hadfield-Menell", "Natasha Jaques", "Jose Hernandez-Orallo", "Joel Z. Leibo"],
    venue: "NeurIPS 2025",
    links: [
      { label: "Contest", url: "https://www.cooperativeai.com/contests/concordia-2024" },
      { label: "Code", url: "https://github.com/google-deepmind/concordia" },
    ],
    desc: "LLM agents are increasingly deployed in situations where they engage with both human and artificial agents, yet existing evaluation methods fail to measure how well these capabilities generalize to novel social situations. We introduce a method for evaluating the ability of LLM-based agents to cooperate in zero-shot, mixed-motive environments using Concordia, a natural-language multi-agent simulation environment — emphasizing an agent's ability to identify and exploit opportunities for mutual gain across diverse partners and contexts.",
  },
  {
    area: "Multi-Turn RL & Dialogue Agents", image: "curiosity.png",
    title: "Enhancing Personalized Multi-Turn Dialogue with Curiosity Reward",
    authors: ["Yanming Wan", "Jiaxing Wu", "Marwa Abdulhai", "Lior Shani", "Natasha Jaques"],
    venue: "NeurIPS 2025; ICML 2025 Workshop on Models of Human Feedback",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/2504.03206" }],
    desc: "Effective conversational agents must personalize their interactions to adapt to user preferences across domains like education and healthcare. Methods like RLHF prioritize helpfulness and safety but fall short in fostering truly empathetic, adaptive dialogue, and typically rely on extensive user history. We propose leveraging a user model to incorporate a curiosity-based intrinsic reward into multi-turn RLHF, showing improved generalization compared to standard multi-turn RLHF while maintaining conversation quality.",
  },
  {
    area: "Simulating Humans", image: "psychometric.png",
    title: "A Psychometric Framework for Evaluating and Shaping Personality Traits in Large Language Models",
    authors: ["Gregory Serapio-García", "Mustafa Safdari", "Clement Crepy", "Luning Sun", "Stephen Fitz", "Peter Romero", "Marwa Abdulhai", "Aleksandra Faust", "Maja Mataric"],
    venue: "Nature Machine Intelligence 2025",
    links: [
      { label: "Paper", url: "https://www.nature.com/articles/s42256-025-01115-6" },
      { label: "Code", url: "https://github.com/google-research/google-research/tree/master/psyborgs" },
    ],
    desc: "We present a validated psychometric framework for administering personality tests to LLMs, quantifying the reliability and validity of the traits they express, and shaping those traits along desired dimensions — providing principled tools for characterizing and controlling LLM personality.",
  },
  {
    area: "Multi-Turn RL & Dialogue Agents", image: "lmrl_gym.png", selected: true,
    title: "LMRL Gym: Benchmarks for Multi-Turn Reinforcement Learning with Language Models",
    authors: ["Marwa Abdulhai", "Isadora White", "Charlie Snell", "Charles Sun", "Joey Hong", "Yuexiang Zhai", "Kelvin Xu", "Sergey Levine"],
    venue: "ICLR GenAI4DM Workshop 2024; ICML 2025",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2311.18232" },
      { label: "Code", url: "https://github.com/abdulhaim/LMRL-Gym" },
      { label: "Website", url: "https://lmrl-gym.github.io/" },
    ],
    desc: "We introduce LMRL-Gym, a benchmark and toolkit for developing reinforcement learning algorithms that operate with LLMs across eight multi-turn dialogue and text-game tasks. This work demonstrates training LLMs to plan and act strategically, ask clarifying questions, and solve long-horizon tasks — bridging reactive generation and goal-driven interaction.",
  },
  {
    area: "LLMs & Society", image: "islam_ai_faact.png",
    title: "Blind Faith? User Preference and Expert Assessment of AI-Generated Religious Content",
    authors: ["Sabriya Alam", "Marwa Abdulhai", "Niloufar Salehi"],
    venue: "FAccT 2025",
    links: [{ label: "Paper", url: "https://dl.acm.org/doi/full/10.1145/3715275.3732162" }],
    desc: "The increasing use of AI tools like ChatGPT for religious information-seeking among Muslims raises critical questions about technology, faith, and expertise. This mixed-methods study investigates user and expert evaluations of AI-generated religious content through interviews, surveys, and expert consultations. We reveal a significant disconnect: despite expressing distrust in AI for religious guidance and a stated preference for scholarly answers, Muslim users overwhelmingly preferred AI-generated responses in blind evaluations, favoring them in 81.3% of cases.",
  },
  {
    area: "Simulating Humans", image: "virtual_personas.png",
    title: "Virtual Personas for Language Models via an Anthology of Backstories",
    authors: ["Suhong Moon*", "Marwa Abdulhai*", "Minwoo Kang*", "Joseph Suh*", "John Canny"],
    venue: "EMNLP 2024",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2407.06576" },
      { label: "Code", url: "https://github.com/CannyLab/anthology" },
    ],
    desc: "LLMs are trained from text authored by millions of distinct authors, reflecting an enormous diversity of human traits. We introduce \"Anthology\", a method for conditioning LLMs to particular virtual personas by harnessing open-ended life narratives (\"backstories\"). Our methodology enhances the consistency and reliability of experimental outcomes while ensuring better representation of diverse sub-populations. Across three nationally representative Pew ATP surveys, Anthology achieves up to 18% improvement in matching human response distributions and 27% improvement in consistency metrics.",
  },
  {
    area: "Deception & AI Safety", image: "defining_deception.png",
    title: "Defining Deception in Decision Making",
    authors: ["Marwa Abdulhai", "Micah Carroll", "Justin Svegliato", "Anca Dragan", "Sergey Levine"],
    venue: "AAMAS 2024",
    links: [{ label: "Paper", url: "https://www.ifaamas.org/Proceedings/aamas2024/pdfs/p2111.pdf" }],
    desc: "This paper formalizes deception in decision-making processes and proposes principled methods to detect and evaluate deceptive trajectories in multi-agent systems, using game-theoretic and reinforcement learning approaches.",
  },
  {
    area: "Deception & AI Safety", extraAreas: ["LLMs & Society"], image: "davinci_model.png", selected: true,
    title: "Moral Foundations of Large Language Models",
    authors: ["Marwa Abdulhai", "Gregory Serapio-García", "Clement Crepy", "Daria Valter", "John Canny", "Natasha Jaques"],
    venue: "AAAI-23 R²HCAI; EMNLP 2024",
    awards: [{ text: "Best Paper", cls: "award-button" }],
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2310.15337" },
      { label: "Code", url: "https://github.com/abdulhaim/moral_foundations_llms" },
      { label: "Website", url: "https://sites.google.com/view/moral-foundations-llms" },
    ],
    desc: "Moral foundations theory (MFT) decomposes human moral reasoning into factors such as care/harm, liberty/oppression, and sanctity/degradation. As LLMs are trained on internet data, they may reflect the biases present in such corpora. We use MFT as a lens to analyze whether popular LLMs have acquired a bias toward a particular set of moral values, relate these to human moral foundations and political affiliations, measure the consistency of these biases, and show we can adversarially select prompts that shift a model's moral foundations — affecting behavior on downstream tasks.",
  },
  {
    area: "Reinforcement Learning", image: "basis_irl.png",
    title: "Basis for Behavior: Efficient Inverse Reinforcement Learning using Past Experience",
    authors: ["Marwa Abdulhai", "Natasha Jaques", "Sergey Levine"],
    venue: "Preprint 2022",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2208.04919" },
      { label: "Code", url: "https://github.com/abdulhaim/basis-irl" },
      { label: "Website", url: "https://sites.google.com/view/basis-irl" },
    ],
    desc: "We propose learning a reusable basis of behaviors from past tasks via RL pretraining, then rapidly inferring a demonstrator's preferences at test time as a combination of these basis behaviors — enabling more sample-efficient inverse reinforcement learning.",
  },
  {
    area: "Reinforcement Learning", image: "cradol.png",
    title: "Context-Specific Representation Abstraction for Deep Option Learning",
    authors: ["Marwa Abdulhai", "Dongki Kim", "Matthew Riemer", "Miao Liu", "Gerald Tesauro", "Jonathan P. How"],
    venue: "AAAI-22",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2109.09876" },
      { label: "Code", url: "https://github.com/cradol/cradol" },
      { label: "Video", url: "https://sites.google.com/view/cradol/home" },
    ],
    desc: "We introduce Context-Specific Representation Abstraction for Deep Option Learning (CRADOL), a framework that considers both temporal abstraction and context-specific representation abstraction to effectively reduce the size of the search over policy space.",
  },
  {
    area: "Reinforcement Learning", image: "meta_mapg.png",
    title: "A Policy Gradient Algorithm for Learning to Learn in Multiagent Reinforcement Learning",
    authors: ["Dongki Kim", "Miao Liu", "Matthew Riemer", "Chuangchuang Sun", "Marwa Abdulhai", "Golnaz Habibi", "Sebastian Lopez-Cot", "Gerald Tesauro", "Jonathan P. How"],
    venue: "ICML-21; AAAI-20 Symposium",
    links: [
      { label: "Paper", url: "https://arxiv.org/pdf/2011.00382.pdf" },
      { label: "Code", url: "https://github.com/dkkim93/meta-mapg" },
      { label: "Video", url: "https://sites.google.com/view/meta-mapg/home" },
    ],
    desc: "We develop a novel meta-multiagent policy gradient theorem that directly accommodates the non-stationary policy dynamics inherent to multiagent settings. Our meta-agent considers both an agent's own non-stationary policy dynamics and those of other agents to adapt quickly.",
  },
];

/* ---------- TEACHING ---------- */
const TEACHING = [
  { image: "cs188.png", title: "CS188: Introduction to Artificial Intelligence", role: "Summer Lecturer", term: "UC Berkeley, Summer 2026", links: [{ label: "Course Website", url: "https://inst.eecs.berkeley.edu/~cs188/su26/" }, { label: "My Lectures", url: "https://youtube.com/playlist?list=PLp8QV47qJEg5NT4l-213NzvGk8QQc7eA4" }], desc: "Lecturing 232 students four times a week; supervising a staff of 7 TAs, creating exam questions, and managing the course." },
  { image: "cs188.png", title: "CS188: Introduction to Artificial Intelligence", role: "Graduate Student Instructor", term: "UC Berkeley, 2024 &ndash; Present", links: [{ label: "Course Website", url: "https://inst.eecs.berkeley.edu/~cs188/sp24/" }], desc: "Supporting 657 students on search, logic, Bayes nets, machine learning, and RL; teaching discussion sections, holding office hours, designing projects and exams, and producing content videos." },
  { image: "coop_ai.png", title: "Introduction to Cooperative AI", role: "Course Facilitator", term: "Cooperative AI Foundation, 2025 &ndash; Present", links: [{ label: "Curriculum", url: "https://www.cooperativeai.com/curriculum" }], desc: "Facilitated two cohorts of the course, leading weekly discussions with students on the risks of advanced AI in multi-agent settings and how AI can enhance human cooperation." },
  { image: "deepRL.png", title: "CS285: Deep Reinforcement Learning", role: "Head Graduate Student Instructor", term: "UC Berkeley, Fall 2022", links: [{ label: "Course Website", url: "https://rail.eecs.berkeley.edu/deeprlcourse/" }], desc: "Supervised 263 students on model-based/free, inverse, and offline RL; organized weekly meetings, created homework, and lectured on deep learning basics." },
  { image: "planning.png", title: "6.141: Robotics, Science & Systems", role: "Teaching Assistant", term: "MIT, Spring 2019", links: [{ label: "Assignments", url: "https://github.com/mit-rss" }, { label: "Medium Article", url: "https://medium.com/@marwaabdulhai/6-141-review-7e1d548055ab" }], desc: "Supervised 104 students in labs on controls, computer vision, and planning; designed the TA solution for a deep-learning self-driving racecar challenge." },
  { image: "react.jpg", title: "MIT Refugee Action Hub (ReACT)", role: "Student Instructor", term: "Amman, Jordan, January 2019", links: [{ label: "Program Page", url: "https://react.mit.edu/" }], desc: "Taught Python, Arduino, and entrepreneurship to Syrian, Palestinian, Rwandan, and Iraqi refugee students." },
  { image: "009graph.png", title: "6.009: Fundamentals of Programming in Python", role: "Lab Assistant", term: "MIT, December 2018", links: [{ label: "Course Page", url: "https://py.mit.edu/fall20" }], desc: "Assisted ~600 students with Python assignments on recursion and algorithms." },
];

/* ---------- GUEST LECTURES ---------- */
const GUEST_LECTURES = [
  { text: "Sundar STEM Seminar: \"How to Do Research in AI\"", date: "July 2026" },
  { text: "Fatima Fellowship Seminar: \"How to Do Research in AI\"", date: "June 2026" },
  { text: "UC Berkeley CS188 (Intro to AI): \"Introduction to Large Language Models\"", date: "August 2024" },
  { text: "UC Berkeley CS10 (Beauty and Joy of Computing): <a href='https://www.youtube.com/playlist?list=PLnocShPlK-FsaLJaFkg26MwjMySrz0tSl' target='_blank'>\"Introduction to AI\"</a> (Lecture 18)", date: "March 2024" },
];

/* ---------- INVITED TALKS ---------- */
const TALKS = [
  { text: "Sundar STEM Talk: \"How to Do Research in AI\"", date: "July 2026" },
  { text: "Fatima Institute Seminar: \"How to Do Research in AI\"", date: "June 2026" },
  { text: "CHAI 2026 Workshop Poster on Strategic Dialogue Agents", date: "June 2026" },
  { text: "University of Washington: \"How LLMs Distort Our Written Language\"", date: "June 2026" },
  { text: "<a href='https://www.complexdatalab.com/stamina/' target='_blank'>STAMINA Group</a>: \"Consistently Simulating Human Personas\"", date: "May 2026" },
  { text: "<a href='https://himalakkaraju.github.io/' target='_blank'>Harvard AI4LIFE Group</a> (PI: Hima Lakkaraju): \"Building Goal-Directed Dialogue Agents\"", date: "April 2026" },
  { text: "UC Berkeley AI Leadership Accelerator: \"Building Long Horizon Dialogue Agents\"", date: "April 2026" },
  { text: "<a href='https://saferobotics.princeton.edu/' target='_blank'>Princeton Safe Robotics Lab</a> (PI: Jaime Fernández Fisac): \"Building Goal-Directed Dialogue Agents\"", date: "February 2026" },
  { text: "<a href='https://princeton-rl.github.io/' target='_blank'>Princeton Reinforcement Learning Lab</a> (PI: Ben Eysenbach): \"Building Goal-Directed Dialogue Agents\"", date: "January 2026" },
  { text: "NeurIPS 2025 Social: Evaluating Agentic Systems in the Real World", date: "December 2025" },
  { text: "<a href='https://jsteinhardt.stat.berkeley.edu/' target='_blank'>UC Berkeley Steinhardt Group</a> (PI: Jacob Steinhardt): \"Building Goal-Directed Dialogue Agents\"", date: "November 2025" },
  { text: "MIT Global Teaching Labs India: \"Introduction to Large Language Models\"", date: "January 2025" },
  { text: "<a href='https://cltc.berkeley.edu/2024/06/11/uc-berkeley-ai-policy-research-symposium-2024/' target='_blank'>UC Berkeley AI Policy Hub Research Symposium</a>: \"Addressing Deception in Dialogue\"", date: "June 2024" },
  { text: "<a href='https://socialrl.cs.washington.edu/' target='_blank'>University of Washington Social RL Group</a> (PI: Natasha Jaques)", date: "May 2024" },
  { text: "Berkeley&ndash;Stanford WiCSE Spotlight Talk: \"Deception in Dialogue\"", date: "April 2023" },
  { text: "AAAI 2023 R²HCAI: \"Moral Foundations of Large Language Models\"", date: "February 2023" },
  { text: "Berkeley Multi-Agent Learning (MARL) Seminar: \"BASIS\"", date: "August 2022" },
];

/* ---------- HONORS & AWARDS ---------- */
const AWARDS = [
  { text: "CHI 2026 BiAlign Workshop Best Paper Award", date: "2026" },
  { text: "<a href='https://www.cooperativeai.com/post/announcing-the-2025-cooperative-ai-phd-scholars' target='_blank'>Cooperative AI PhD Fellowship</a>", date: "2025" },
  { text: "<a href='https://cltc.berkeley.edu/program/ai-policy-hub/' target='_blank'>Berkeley AI Policy Hub Fellowship</a>", date: "2023 – 2024" },
  { text: "<a href='https://www.quadfellowship.org/2023-quad-fellows' target='_blank'>Quad Fellowship US Fellow</a>", date: "2023 – 2024" },
  { text: "AAAI 2023 R²HCAI Workshop Best Paper Award", date: "2023" },
  { text: "UC Berkeley EECS Excellence Award", date: "2021" },
  { text: "<a href='https://www.youtube.com/watch?v=31L9eYsfp6E' target='_blank'>TEDxMIT</a> Speaker", date: "2020" },
  { text: "MIT Lincoln Laboratory Research &amp; Innovation Scholar", date: "2019 – 2020" },
  { text: "MIT Quest Innovation Scholar", date: "2019" },
];

/* ---------- GRANTS ---------- */
const GRANTS = [
  { text: "TRI Grant: Pluralistic AI that Empowers &amp; Adapts to People", date: "2026 – Present" },
  { text: "OpenAI Grant: Research into Agentic AI Systems", date: "2024" },
  { text: "Meta AI &ndash; BAIR Commons Research Grant", date: "2023 – 2024" },
  { text: "Cooperative AI Grant: Cooperation &amp; Negotiation in LLMs", date: "2022 – 2023" },
];

/* ---------- ADVICE TO STUDENTS / FAQ ----------
 * Drawn from my "How to Do Research" seminar (Fatima Institute for Global AI Research). */
const ADVICE_INTRO = `Mentorship is one of the most meaningful parts of my work. Through the
  <a href="https://www.fatimafellowship.com/" target="_blank">Fatima Fellowship</a>, the
  <a href="https://bair.berkeley.edu/reu.html" target="_blank">BAIR REU</a>, and the BAIR mentoring program,
  I've worked with many students starting out in research. Here are some questions I'm often asked, drawn from my
  <i>"How to Do Research"</i> seminar for the Fatima Institute for Global AI Research.`;

const FAQ = [
  { q: "How do I do research?", a: "The short version: research is a loop. You plan an experiment and write down what you expect to learn, run it carefully (changing one thing at a time), analyze what actually happened versus what you expected, and adjust your plan. Along the way, keep a research diary, protect focused blocks of time, and try to capture your problem in a single clear figure before piling on experiments. For the longer version, see my full <a href='#guide'>guide on how to do research</a>." },
  { q: "How do I get involved in research?", a: "Start with a topic that genuinely interests you, then find the people working on it. Take project-based classes, join a lab as an undergraduate researcher, and apply to structured programs like the <a href='https://bair.berkeley.edu/reu.html' target='_blank'>BAIR REU</a> or the <a href='https://www.fatimafellowship.com/' target='_blank'>Fatima Fellowship</a>. Reading a few recent papers in an area and then emailing a professor or one of their PhD students with a specific, thoughtful question goes a long way (<a href='https://www.eugenevinitsky.com/posts/coldemails/' target='_blank'>this cold-emailing guide</a> is a good place to start). You do not need to know everything before you begin; curiosity and consistency matter more than credentials." },
  { q: "How do I prepare for grad school?", a: "Committees weigh research experience and potential, specific and credible recommendation letters, a statement of purpose with a clear direction, and fit with specific advisors. Build a balanced list around fit rather than ranking, targeting programs with two or three faculty whose work genuinely overlaps yours. Treat the statement as an argument, not a memoir: lead with research, describe concrete projects, and name faculty at each school. Give your recommenders four to six weeks and an easy packet (your CV, draft statement, school list, and deadlines). Most US deadlines fall in November and December, so start early. A couple of resources: <a href='https://cs-sop.notion.site/' target='_blank'>past statements of purpose</a> and <a href='https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf' target='_blank'>Mor Harchol-Balter's guide</a>." },
  { q: "What classes should I take?", a: "Build strong foundations first: linear algebra, probability and statistics, and a solid programming course. From there, a few classes and resources I recommend for AI and NLP: <a href='https://web.stanford.edu/class/cs224n/' target='_blank'>Stanford CS224N (NLP with Deep Learning)</a>, <a href='https://cs336.stanford.edu/' target='_blank'>Stanford CS336 (Language Modeling from Scratch)</a>, and <a href='https://rail.eecs.berkeley.edu/deeprlcourse/' target='_blank'>Berkeley's Deep Reinforcement Learning</a>. For self-study, <a href='https://karpathy.ai/zero-to-hero.html' target='_blank'>Andrej Karpathy's Neural Networks: Zero to Hero</a> and <a href='https://rlhfbook.com/' target='_blank'>Nathan Lambert's RLHF book</a> are excellent." },
];

const RESOURCES = [
  { group: "Applying to grad school", items: [
    { label: "Past statements of purpose (cs-sop)", url: "https://cs-sop.notion.site/" },
    { label: "Cold-emailing guide by Eugene Vinitsky", url: "https://www.eugenevinitsky.com/posts/coldemails/" },
    { label: "Applying to Ph.D. Programs in CS (Mor Harchol-Balter)", url: "https://www.cs.cmu.edu/~harchol/gradschooltalk.pdf" },
  ]},
  { group: "Learning AI / NLP", items: [
    { label: "Stanford CS224N: NLP with Deep Learning", url: "https://web.stanford.edu/class/cs224n/" },
    { label: "Stanford CS336: Language Modeling from Scratch", url: "https://cs336.stanford.edu/" },
    { label: "Berkeley Deep Reinforcement Learning", url: "https://rail.eecs.berkeley.edu/deeprlcourse/" },
    { label: "Karpathy: Neural Networks Zero to Hero", url: "https://karpathy.ai/zero-to-hero.html" },
    { label: "Nathan Lambert: RLHF Book", url: "https://rlhfbook.com/" },
  ]},
  { group: "Research advice", items: [
    { label: "An Opinionated Guide to ML Research (John Schulman)", url: "http://joschu.net/blog/opinionated-guide-ml-research.html" },
    { label: "How to Read a Paper (S. Keshav)", url: "http://ccr.sigcomm.org/online/files/p83-keshavA.pdf" },
    { label: "How to ML Paper (Jakob Foerster)", url: "https://www.jakobfoerster.com/how-to-ml-paper" },
    { label: "My research process (Neel Nanda)", url: "https://www.alignmentforum.org/posts/hjMy4ZxS5ogA9cTYK/how-i-think-about-my-research-process-explore-understand" },
  ]},
  { group: "Grants", items: [
    { label: "Compute Grants Guide for Students", url: "https://nightingal3.github.io/blog/2026/04/16/compute-grants/" },
    { label: "OpenAI Researcher Access Program", url: "https://openai.com/form/researcher-access-program/" },
    { label: "Foresight Institute: AI Safety Grants", url: "https://foresight.org/grants/grants-ai-for-science-safety/" },
  ]},
];

/* ---------- HOW TO DO RESEARCH (guide, linked from Advice) ---------- */
const GUIDE_INTRO = `This guide collects the research advice I share most often, drawn from my
  <i>"How to Do Research"</i> seminar for the Fatima Institute for Global AI Research. It is written for students
  starting their first projects.`;

const GUIDE_SECTIONS = [
  { h: "The core research process", p: "Most of your time lives in one loop, run over and over. Plan the next experiment and write down what you expect to learn. Run it carefully, changing one thing at a time so the result is interpretable. Analyze what actually happened versus what you expected, and why it differs. Adjust your plan and log the result in your research diary. End every session by writing down the next step, so you restart quickly tomorrow. You will go around this loop many times; each loop is progress, even when experiments fail." },
  { h: "Keep a research diary", p: "Keep a running log of what you did each day and what you learned. Record the date and goal, what you tried and why, what happened (numbers, plots, errors), what it means, the next concrete step, and open questions for your mentor. Do it daily, after every work session and meeting. Your diary is already half your paper, it makes your work reproducible, and it makes updating your mentor take under two minutes." },
  { h: "Structure your time and prioritize", p: "Protect uninterrupted blocks, since research needs focus rather than ten-minute gaps between other obligations. Plan the week, then pick one main thing to move forward each day. Consistency beats intensity: steady weekly hours beat an all-nighter before your meeting. Prioritize what unblocks the most other work, run the cheapest experiment that could change your mind first, and test the riskiest assumption early." },
  { h: "Demonstrate your problem in a single figure", p: "Run one experiment that shows the problem against the best baseline. A single figure that makes clear why your problem matters is enough to motivate the work; the rest of your ablations and baselines can come after." },
  { h: "Frame the project with a mini-proposal", p: "Before diving in, write a one-to-two page plan. Answer, in plain language: What are you trying to do? How is it done today, and what are the limits? What is new in your approach, and why will it succeed? Who cares? How will you measure success? If a section is hard to write, that is exactly where the plan is weak. Search the literature first so you do not rebuild something a published paper already did, and aim to convey one clear idea." },
  { h: "Read papers efficiently", p: "Do not read top to bottom. Use up to three passes, each deeper and each a decision point. Pass 1 (5 to 10 minutes): title, abstract, intro, headings, and conclusion, to decide whether the paper is even relevant. Pass 2 (about an hour): read the figures, tables, and argument, then summarize the paper in your own words. Pass 3 (four or more hours, only for papers central to your work): re-derive or re-implement the key idea. Read adaptively based on how familiar the area is." },
  { h: "Do a focused literature review", p: "Start from a strong recent paper and mine its related-work section, then follow citations both backward to the foundations and forward to who cited it. Skim new arXiv listings in your area a few times a week, and look at the orals and best papers at NeurIPS, ICML, ICLR, ACL, and CHI. Track every paper from day one with one line on the problem, the idea, and why it matters to you, and save the BibTeX so your related-work section writes itself." },
  { h: "Work closely with your mentor", p: "Your mentor is your most important resource. Meet more when you are planning, since advice is most valuable early; do not wait until you have results to ask for help. Ask specific questions ('I tried A and B, which is worth pursuing?') rather than 'what should I do?'. Send quick updates with a plot between meetings. The consistent, organized way you work is what lets your mentor write you a specific, credible recommendation letter." },
  { h: "It is okay if things do not work", p: "Feeling stupid is normal; real research means working at the edge of the known, and that discomfort is the job, not a verdict on you. Impostor feelings are universal, even among people you admire. Do not compare yourself to peers' polished results, since you do not see their dead ends. A dead end is information. Protect your health: sleep, take real breaks, and keep exercising, and celebrate small wins." },
  { h: "Using AI in your research", p: "Good uses include explaining unfamiliar concepts and notation, summarizing papers, brainstorming approaches, and debugging code. Verify everything, since models hallucinate citations and facts; check claims and numbers against primary sources. Make it challenge you by asking it to argue against your idea and play reviewer. Mind confidentiality, and be careful using it for writing, since AI tends to homogenize your writing and can even change your claims." },
];

/* ============================================================
 * RENDERING
 * ============================================================ */
function el(id) { return document.getElementById(id); }
const IMG = f => `./media/${f}`;

function authorHTML(name) {
  const star = name.endsWith("*");
  const clean = star ? name.slice(0, -1) : name;
  const suf = star ? "*" : "";
  if (clean.startsWith("[")) return `<span class="etal">${clean}</span>${suf}`;
  if (clean === "Marwa Abdulhai") return `<u>Marwa Abdulhai</u>${suf}`;
  const url = AUTHOR_URLS[clean];
  return (url ? `<a href="${url}" target="_blank">${clean}</a>` : clean) + suf;
}
const authorsHTML = list => list.map(authorHTML).join(", ");

function linksHTML(links) {
  return (links || []).length
    ? `<div class="pub-links">` + links.map(l => `<a href="${l.url}" target="_blank">${l.label}</a>`).join(" / ") + `</div>`
    : "";
}

function pubCard(p) {
  const awards = (p.awards || []).map(a => `<span class="${a.cls}">${a.text}</span>`).join("");
  const img = p.image ? `<div class="pub-img"><img src="${IMG(p.image)}" alt=""></div>` : "";
  const desc = p.desc ? `<p class="pub-desc">${p.desc}</p>` : "";
  return `<div class="pub-row${p.image ? "" : " no-img"}">
      ${img}
      <div class="pub-body xs-sm-txt">
        <span class="pub-title">${p.title}</span>${awards}
        <span class="pub-authors">${authorsHTML(p.authors)}</span>
        <span class="pub-venue">${p.venue}</span>
        ${linksHTML(p.links)}
        ${desc}
      </div>
    </div>`;
}

function teachCard(t) {
  const img = t.image ? `<div class="pub-img"><img src="${IMG(t.image)}" alt=""></div>` : "";
  return `<div class="pub-row${t.image ? "" : " no-img"}">
      ${img}
      <div class="pub-body xs-sm-txt">
        <span class="pub-title">${t.title}</span>
        <span class="pub-authors"><i>${t.role}</i> &mdash; ${t.term}</span>
        ${linksHTML(t.links)}
        <p class="pub-desc">${t.desc}</p>
      </div>
    </div>`;
}

function datedList(items) {
  return `<div class="dated-list xs-sm-txt">` +
    items.map(i => `<div class="dated-row"><span>${i.text}</span><span class="date">${i.date}</span></div>`).join("") +
    `</div>`;
}

/* ---- Publication tabs (filter the full list by area) ---- */
let activeArea = "All";
const TABS = ["All", ...AREAS];
function renderTabs() {
  el("pub-tabs").innerHTML = TABS.map(t =>
    `<button class="pub-tab${t === activeArea ? " active" : ""}" data-area="${t}">${t}</button>`
  ).join("");
  Array.from(document.querySelectorAll(".pub-tab")).forEach(btn => {
    btn.addEventListener("click", () => { activeArea = btn.getAttribute("data-area"); renderTabs(); renderAllPubs(); });
  });
}
function renderAllPubs() {
  const list = activeArea === "All"
    ? PUBS
    : PUBS.filter(p => p.area === activeArea || (p.extraAreas || []).includes(activeArea));
  el("publications").innerHTML = list.map(pubCard).join("");
}

/* ---- Sidebar (shared across pages) ---- */
function renderSidebar(active) {
  const links = SOCIAL.map(s => `<div><a href="${s.url}"${s.url.startsWith("http") ? " target=\"_blank\"" : ""}>${s.label}</a></div>`).join("");
  const nav = NAV.map(n => `<div><a href="#${n.page}" class="nav-link${n.page === active ? " active" : ""}" data-page="${n.page}">${n.label}</a></div>`).join("");
  const inner = `
    <div class="nav-text-top">
      <div class="md-txt"><a href="#home">Marwa Abdulhai</a></div>
    </div>
    <div class="nav-img"><img src="${IMG('profile.jpg')}" alt="Marwa Abdulhai"></div>
    <div class="nav-text-bottom">
      <div class="xs-txt-nav">${links}</div>
      <div class="xs-txt-nav nav-pages">${nav}</div>
    </div>`;
  el("sidebar").innerHTML = inner;
  el("sidebar-mobile").innerHTML = `
    <div class="md-txt">Marwa Abdulhai</div>
    <img src="${IMG('profile.jpg')}" alt="Marwa Abdulhai">
    <div class="xs-txt-nav nav-mobile-links">${SOCIAL.map(s => `<a href="${s.url}"${s.url.startsWith("http") ? " target=\"_blank\"" : ""}>${s.label.replace(' / X','')}</a>`).join("")}</div>
    <div class="xs-txt-nav nav-mobile-pages">${NAV.map(n => `<a href="#${n.page}" class="nav-link" data-page="${n.page}">${n.label}</a>`).join("")}</div>`;
}

/* ---- Page content ---- */
function fillHome() {
  el("summary").innerHTML = SUMMARY;
  el("updates").innerHTML =
    `<div class="sm-txt-caps updates-title">News</div>` +
    `<div class="updates-scroll">` +
    UPDATES.map(u => `<div class="update-item xs-txt"><span class="update-date">${u.date}</span><span>${u.text}</span></div>`).join("") +
    `</div>`;
  el("selected").innerHTML = PUBS.filter(p => p.selected).map(pubCard).join("");
  renderTabs();
  renderAllPubs();
}
function fillTeaching() {
  el("teaching").innerHTML = TEACHING.map(teachCard).join("");
  el("guest-lectures").innerHTML = datedList(GUEST_LECTURES);
}
function fillTalks() { el("talks").innerHTML = datedList(TALKS); }
function fillAwards() {
  el("awards").innerHTML = datedList(AWARDS);
  el("grants").innerHTML = datedList(GRANTS);
}
function fillAdvice() {
  const faq = FAQ.map(f =>
    `<details class="faq"><summary>${f.q}</summary><div class="faq-a sm-txt">${f.a}</div></details>`
  ).join("");
  el("advice").innerHTML =
    `<div class="advice">
      <p class="sm-txt advice-intro">${ADVICE_INTRO}</p>
      <div class="faq-list">${faq}</div>
      <p class="sm-txt" style="margin-top:24px;color:#9a9ea1;"><i>Have a question? Feel free to
      <a href="mailto:marwa_abdulhai@berkeley.edu">reach out</a>.</i></p>
    </div>`;
}
function fillGuide() {
  const secs = GUIDE_SECTIONS.map(s => `<h3>${s.h}</h3><p class="sm-txt">${s.p}</p>`).join("");
  const res = RESOURCES.map(r =>
    `<div class="res-group"><div class="subhead">${r.group}</div>` +
    r.items.map(i => `<div class="res-item xs-sm-txt"><a href="${i.url}" target="_blank">${i.label}</a></div>`).join("") +
    `</div>`
  ).join("");
  el("guide-content").innerHTML =
    `<div class="advice">
      <p class="xs-txt guide-back"><a href="#advice">&larr; Advice to Students</a></p>
      <p class="sm-txt advice-intro">${GUIDE_INTRO}</p>
      ${secs}
      <div class="section-title sm-txt-caps" style="margin:40px 0 16px;">Resources</div>
      <div class="res-grid">${res}</div>
    </div>`;
}

/* ---- Simple hash router ---- */
function showPage(page) {
  if (!document.getElementById("page-" + page)) page = "home";
  const navActive = (page === "guide") ? "advice" : page;
  document.querySelectorAll(".page").forEach(s => s.classList.toggle("active", s.id === "page-" + page));
  document.querySelectorAll(".nav-link").forEach(a => a.classList.toggle("active", a.dataset.page === navActive));
  window.scrollTo(0, 0);
}
function currentPage() { return (location.hash || "#home").replace("#", ""); }

/* ---- Boot ---- */
renderSidebar(currentPage());
fillHome();
fillTeaching();
fillTalks();
fillAwards();
fillAdvice();
fillGuide();
showPage(currentPage());
window.addEventListener("hashchange", () => { showPage(currentPage()); renderSidebar(currentPage()); });
