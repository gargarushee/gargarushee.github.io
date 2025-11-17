const metrics = [
  { label: 'Years delivering large-scale systems', value: '7+' },
  { label: 'AI initiatives led end-to-end', value: '12' },
  { label: 'Daily premium touchpoints unlocked', value: '25K' },
  { label: 'Engineers mentored + coached', value: '20+' }
];

const pillars = [
  {
    title: 'AI-native product architecture',
    detail:
      'Designing agentic systems, multi-step workflows, and trustworthy data contracts for premium outreach, resume intelligence, and insights.'
  },
  {
    title: 'Growth & monetization strategy',
    detail:
      'Driving intent-based premium upsells, entitlement logic, and signal pipelines that lift impressions, conversions, and retention.'
  },
  {
    title: 'Inclusive leadership & mentorship',
    detail:
      'Mentoring bootcamps, TechWomen cohorts, and cross-functional pods while building psychologically safe teams.'
  }
];

const workProjects = [
  {
    title: 'Premium Outreach Agent',
    timeframe: '2025',
    summary: 'Multi-agent workflow that drafts premium outreach in the sender’s voice.',
    outcomes: [
      'Persona + intent detectors route to 5 specialist writers with golden templates.',
      'Feedback-aware generation cut manual edits and unlocked AI assistant roadmap.'
    ],
    media: 'assets/projects/premium-outreach.svg'
  },
  {
    title: 'AI-powered Company Insights',
    timeframe: '2024',
    summary: 'LLM briefings blending hiring momentum, leadership shifts, and talent signals.',
    outcomes: [
      '350 QPS multi-colo launch with 1.6× impression lift from global coverage.',
      'Grounded summaries with citations enabled new premium SKU positioning.'
    ],
    media: 'assets/projects/ai-company-insights.svg'
  },
  {
    title: 'Actively Hiring Filter',
    timeframe: '2024',
    summary: 'Trust signal surfacing companies actively filling roles across LinkedIn.',
    outcomes: [
      'Owned signal science, pipelines, and UX across a 5-engineer pod.',
      '15% adoption by seekers plus retention lift for Premium funnels.'
    ],
    media: 'assets/projects/actively-hiring.svg'
  }
];

const personalProjects = [
  {
    title: 'Distributional Alignment of SLMs',
    context: 'Stanford CS329H · 2024',
    summary: 'Compared low-rank adaptation, steering vectors, and fine-tuning baselines.',
    media: 'assets/projects/slm-research.svg',
    link: 'https://github.com/gargarushee/Benchmarking-Distributional-Alignment-of-Small-Language-Models'
  },
  {
    title: 'Audio Digest Agent',
    context: 'LinkedIn Hackathon · 2025',
    summary: 'Adaptive audio briefings with next-best actions for member insights.',
    media: 'assets/projects/audio-digest.svg',
    link: 'https://docs.google.com/presentation/d/1p7Ecj0MCS-s-A9gvlqWp68hs1V8mlR9yw4e9Gu9Ncb8/edit?slide=id.g387c49a7ddd_0_135'
  },
  {
    title: 'CycleSyncFlow',
    context: 'Independent Research · 2025',
    summary: 'Physiological signal tracker aligning energy + focus into weekly plans.',
    media: 'assets/projects/cyclesync.svg',
    link: 'https://github.com/gargarushee/CycleSyncFlow'
  }
];

const experiences = [
  {
    company: 'LinkedIn',
    role: 'Senior Software Engineer · Premium Growth',
    period: 'Jan 2020 – Present · Sunnyvale, CA',
    summary:
      'Lead backend engineer for LinkedIn Premium experiences spanning agentic outreach, AI insights, resume intelligence, and monetization funnels.',
    highlights: [
      'Scaled company insights copilot and Actively Hiring filter; both became marquee premium differentiators.',
      'Built resume creation + optimization framework (10K+ daily builds, 15K uploads) and entitlement service for premium SKUs.',
      'Mentor for backend bootcamps, TechWomen champion, and advocate for inclusive hiring loops.'
    ],
    stack: 'Java, Scala, Samza, Kafka, Spark, Azure, GraphQL, LLM toolchains'
  },
  {
    company: 'YourMechanic (acquired)',
    role: 'Software Engineer',
    period: 'Jul 2018 – Dec 2019 · Mountain View, CA',
    summary:
      'Delivered fleet management experiences for enterprise car rental clients (Hertz, etc.) across booking, invoicing, and notifications.',
    highlights: [
      'Built audit engine + CRM integrations to guarantee traceability.',
      'Created on-demand service routing engine improving SLA adherence during peak seasons.',
      'Led performance refactors removing bottlenecks and stabilizing throughput.'
    ],
    stack: 'Ruby on Rails, React, Redux, PostgreSQL, AWS'
  },
  {
    company: 'Google Summer of Code',
    role: 'Software Developer Intern · Empa NEST',
    period: 'May 2017 – Aug 2017 · Remote',
    summary:
      'Shipped open-source visualization dashboards for renewable energy IoT data using Node-RED and Highcharts.',
    highlights: [
      'Connected Microsoft SQL + OPC UA pipelines for research-grade reliability.',
      'Delivered real-time trend and anomaly displays consumed by global labs.',
      'Kick-started ongoing collaboration between Empa and open-source contributors.'
    ],
    stack: 'JavaScript, Node-RED, Highcharts, OPC UA, SQL'
  },
  {
    company: 'Education',
    role: 'Purdue University · MS CS · GPA 3.94/4',
    period: '2016 – 2018',
    summary:
      'Focus on distributed systems and AI; complemented by BITS Pilani B.E. (Hons) with leadership in athletics and student government.',
    highlights: [
      'Coursework: Stanford CS329H, UC Berkeley LLM Agents, Statistics for AI.',
      'Graduate TA and women-in-tech organizer.',
      'Recipient of KVPY award and national scholarships.'
    ],
    stack: 'ML, Data systems, Leadership'
  }
];

const skills = [
  'Java',
  'Scala',
  'Python',
  'Generative AI',
  'LLMs',
  'gRPC',
  'GraphQL',
  'REST APIs',
  'Samza',
  'Kafka',
  'Hadoop',
  'Spark',
  'Azure',
  'SQL',
  'Big Data',
  'Ruby on Rails',
  'React',
  'Redux',
  'AngularJS',
  'PostgreSQL'
];

const leadershipSections = [
  {
    title: 'Speaking & Learning',
    items: [
      'TechFutures 2025 keynote “Agentic AI: Concept to Production” for 5K attendees.',
      'Stanford CS329H – Machine Learning with Human Preferences (Grade A).',
      'UC Berkeley CS 194/294-196 – LLM Agents (2025).'
    ]
  },
  {
    title: 'Hackathons & Recognition',
    items: [
      'LinkedIn Hackweek: Hyper-personalized Audio Digest agent showcased.',
      'Agents & Compound AI systems hackathon finalist; GreenDay Hackathon (3rd prize).',
      'KVPY Award – All India Rank 203 (IISc).'
    ]
  },
  {
    title: 'Mentorship & Community',
    items: [
      'Lead mentor for LinkedIn Backend Bootcamp – guided 11 engineers (2024).',
      'Professional Mentor & Review Committee, TechWomen USA.',
      'Champion for inclusive hiring loops and women in backend engineering.'
    ]
  }
];

const educationEntries = [
  {
    title: 'Purdue University',
    subtitle: 'MS in Computer Science · GPA 3.94/4',
    items: [
      'Graduate Teaching Assistant focused on distributed systems and AI.',
      'Coursework highlights: Statistics for Data Science & AI.',
      'Research on agentic workflows and resume intelligence.'
    ]
  },
  {
    title: 'BITS Pilani',
    subtitle: 'B.E. (Hons) · GPA 3.26/4',
    items: [
      'Joint Sports Secretary and captain, Women’s Basketball.',
      'Led student initiatives supporting women in technology.',
      'Early experience in startups (Practo) and open-source.'
    ]
  },
  {
    title: 'Continuing Learning',
    subtitle: 'Stanford CS329H · UC Berkeley LLM Agents · Stanford Continuing Studies',
    items: [
      'CS329H + CS 194/294-196 exploring representation steering & agents.',
      'Statistics for Data Science & Artificial Intelligence (Stanford).',
      'Ongoing applied research on generative AI trust and alignment.'
    ]
  }
];

const metricsEl = document.getElementById('metrics');
const pillarsEl = document.getElementById('pillars');
const workGridEl = document.getElementById('workGrid');
const personalGridEl = document.getElementById('personalGrid');
const timelineItemsEl = document.getElementById('timelineItems');
const timelineDetailEl = document.getElementById('timelineDetail');
const skillsListEl = document.getElementById('skillsList');
const leadershipGridEl = document.getElementById('leadershipGrid');
const educationGridEl = document.getElementById('educationGrid');

metrics.forEach((metric) => {
  const card = document.createElement('div');
  card.className = 'metric-card';
  card.innerHTML = `<span>${metric.value}</span><p>${metric.label}</p>`;
  metricsEl.appendChild(card);
});

pillars.forEach((pillar) => {
  const card = document.createElement('article');
  card.className = 'pillar-card';
  card.innerHTML = `<h3>${pillar.title}</h3><p>${pillar.detail}</p><span class="pillar-cta">Explore focus</span>`;
  pillarsEl.appendChild(card);
});

const renderProjectCard = (project, isWork = false) => {
  const card = document.createElement('article');
  card.className = 'project-card';
  card.innerHTML = `
    ${project.media ? `<figure class="project-media"><img src="${project.media}" alt="${project.title}" loading="lazy" /></figure>` : ''}
    <div class="tag">${isWork ? 'Work Project' : project.context}</div>
    <h3>${project.title}</h3>
    ${isWork ? `<p>${project.timeframe} · ${project.summary}</p>` : `<p>${project.summary}</p>`}
  `;

  if (project.outcomes) {
    const list = document.createElement('ul');
    project.outcomes.forEach((item) => {
      const li = document.createElement('li');
      li.textContent = item;
      list.appendChild(li);
    });
    card.appendChild(list);
  }

  if (project.link) {
    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'View project →';
    card.appendChild(link);
  }

  return card;
};

workProjects.forEach((project) => workGridEl.appendChild(renderProjectCard(project, true)));
personalProjects.forEach((project) => personalGridEl.appendChild(renderProjectCard(project)));

skills.forEach((skill) => {
  const item = document.createElement('li');
  item.textContent = skill;
  skillsListEl.appendChild(item);
});

leadershipSections.forEach((section) => {
  const card = document.createElement('article');
  card.className = 'leadership-card';
  card.innerHTML = `<h3>${section.title}</h3>`;
  const list = document.createElement('ul');
  section.items.forEach((entry) => {
    const li = document.createElement('li');
    li.textContent = entry;
    list.appendChild(li);
  });
  card.appendChild(list);
  leadershipGridEl.appendChild(card);
});

educationEntries.forEach((entry) => {
  const card = document.createElement('article');
  card.className = 'education-card';
  card.innerHTML = `<h3>${entry.title}</h3><p>${entry.subtitle}</p>`;
  const list = document.createElement('ul');
  entry.items.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    list.appendChild(li);
  });
  card.appendChild(list);
  educationGridEl.appendChild(card);
});

const setTimelineDetail = (experience) => {
  timelineDetailEl.innerHTML = `
    <p class="eyebrow">${experience.company}</p>
    <h3>${experience.role}</h3>
    <p>${experience.period}</p>
    <p>${experience.summary}</p>
    <ul>${experience.highlights.map((point) => `<li>${point}</li>`).join('')}</ul>
    <p><strong>Stack:</strong> ${experience.stack}</p>
  `;
};

experiences.forEach((experience, index) => {
  const item = document.createElement('article');
  item.className = 'timeline-item';
  item.innerHTML = `
    <strong>${experience.role}</strong>
    <small>${experience.company}</small>
    <small>${experience.period}</small>
  `;
  item.addEventListener('click', () => {
    [...timelineItemsEl.children].forEach((child) => child.classList.remove('active'));
    item.classList.add('active');
    setTimelineDetail(experience);
  });
  if (index === 0) {
    item.classList.add('active');
    setTimelineDetail(experience);
  }
  timelineItemsEl.appendChild(item);
});

document.getElementById('year').textContent = new Date().getFullYear();
