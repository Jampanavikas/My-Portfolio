export const personal = {
  name: 'Jampana Vikas Varma',
  firstName: 'Vikas',
  title: 'Full Stack Developer & Agentic AI Engineer',
  tagline: 'Building scalable APIs, LLM-powered systems, and production-ready AI applications',
  email: 'vikasvarma5424@gmail.com',
  phone: '+91 8767405239',
  location: 'Hyderabad, Telangana, India',
  linkedin: 'https://linkedin.com/in/jampana-vikas-varma-68894322b',
  summary: `Full Stack Developer experienced in building scalable applications and RESTful APIs.
    Skilled in API integration, secure authentication (JWT, RBAC), and modular system design.
    Experienced in AI-driven solutions using LLMs, LangGraph, and OCR-based document processing.
    Strong in performance optimization and delivering production-ready applications.`,
}

export const experience = [
  {
    id: 1,
    company: 'Dynamatix Analytics Pvt Ltd',
    companyNote: 'Dynamatix Services',
    role: 'Full Stack / Backend Developer',
    type: 'Full Time',
    duration: 'Sept 2024 – Present',
    icon: '🚀',
    color: '#2563eb',
    categories: [
      {
        title: 'Backend Development & API Engineering',
        icon: '⚙️',
        points: [
          'Designed scalable REST APIs using Flask for AI-driven apps: mortgage assistant, document intelligence, conversational systems',
          'Built OpenAPI-driven integration layer to dynamically execute external APIs via natural language inputs',
          'Implemented secure auth using JWT, API keys, and MongoDB-based RBAC with fine-grained access control',
          'Developed modular API architecture with Flask Blueprints and Clean Architecture principles',
        ],
      },
      {
        title: 'AI / LLM Integration',
        icon: '🤖',
        points: [
          'Engineered AI conversational workflows with LangGraph and LangChain for intelligent multi-subgraph routing',
          'Built natural language → API execution pipelines: intent detection, parameter resolution, confirmation flows',
          'Integrated LLM-based document intelligence for Q&A, summarization, and insights extraction',
        ],
      },
      {
        title: 'Document AI & Data Processing',
        icon: '📄',
        points: [
          'Developed OCR pipelines using PaddleOCR and PyMuPDF for structured data extraction from PDFs',
          'Optimized processing performance via hybrid extraction strategies, reducing latency for text-heavy docs',
          'Integrated Azure Blob Storage for scalable document storage and retrieval',
        ],
      },
      {
        title: 'System Design & DevOps',
        icon: '🏗️',
        points: [
          'Implemented Clean Architecture (Domain, Application, Infrastructure) for clear separation of concerns',
          'Designed stateful conversational systems with MongoDB-backed session management and memory loops',
          'Integrated Prometheus metrics, health checks; achieved 80%+ test coverage with pytest',
          'Containerized with Docker, deployed via Gunicorn; enforced quality with Black, Ruff, mypy',
        ],
      },
    ],
  },
  {
    id: 2,
    company: 'Dynamatix Analytics Pvt Ltd',
    companyNote: 'RiskHawk Platform',
    role: 'Junior Java Developer (Backend)',
    type: 'Internship',
    duration: 'Jan 2022 – Sept 2024',
    icon: '🏦',
    color: '#7c3aed',
    categories: [
      {
        title: 'Backend & Full Stack',
        icon: '💻',
        points: [
          'Developed and maintained backend services and APIs using Java for the RiskHawk platform',
          'Worked on live FinTech systems: NPCI, Axis Mutual Fund, Bank of Baroda, Equitas, Fincare',
          'Optimized application performance and scalability through code reviews and refactoring',
          'Assisted in database design, management, and optimization; conducted thorough testing and debugging',
        ],
      },
    ],
  },
  {
    id: 3,
    company: 'Swechha Being Humanitarian Foundation',
    companyNote: null,
    role: 'Intern & Team Lead',
    type: 'Internship',
    duration: 'May 2023 (21 days)',
    icon: '🌱',
    color: '#059669',
    categories: [
      {
        title: 'Web Development & Leadership',
        icon: '🌐',
        points: [
          'Led team through full SDLC: requirements, design, coding, testing, deployment',
          "Code reviews, bug fixing, and web design for the foundation's digital presence",
        ],
      },
    ],
  },
]

export const skills = [
  {
    category: 'AI & LLM',
    color: '#2563eb',
    icon: '🤖',
    items: [
      { name: 'LangGraph', level: 85 },
      { name: 'LangChain', level: 82 },
      { name: 'Agentic AI', level: 80 },
      { name: 'LLM Integration', level: 83 },
      { name: 'RAG Pipelines', level: 75 },
    ],
  },
  {
    category: 'Backend',
    color: '#7c3aed',
    icon: '⚙️',
    items: [
      { name: 'Python / Flask', level: 88 },
      { name: 'Java', level: 82 },
      { name: 'REST APIs', level: 90 },
      { name: 'Node.js', level: 68 },
      { name: 'Clean Architecture', level: 80 },
    ],
  },
  {
    category: 'Frontend',
    color: '#0891b2',
    icon: '🎨',
    items: [
      { name: 'React', level: 75 },
      { name: 'Angular', level: 70 },
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'JavaScript', level: 80 },
    ],
  },
  {
    category: 'Data & DevOps',
    color: '#059669',
    icon: '🗄️',
    items: [
      { name: 'MongoDB', level: 80 },
      { name: 'SQL', level: 82 },
      { name: 'Docker', level: 74 },
      { name: 'Azure Blob', level: 70 },
      { name: 'PaddleOCR', level: 78 },
    ],
  },
]

export const education = [
  {
    id: 1,
    institution: 'Great Learning',
    degree: 'PG Program in Artificial Intelligence',
    affiliation: 'McCombs School of Business, UT Austin + Great Lakes',
    period: 'April 2026 – Present',
    status: 'In Progress',
    grade: '12 months · 600+ hours',
    icon: '🎓',
    color: '#2563eb',
    details: 'Python, ML, Deep Learning, NLP, GenAI, RAG Pipelines, AI Agents',
    badge: 'Current',
  },
  {
    id: 2,
    institution: 'Nalla Malla Reddy Engineering College',
    degree: 'B.Tech in CSE (AI & ML)',
    affiliation: 'Hyderabad, Telangana',
    period: '2020 – 2024',
    status: 'Completed',
    grade: 'B.Tech Graduate',
    icon: '🏛️',
    color: '#7c3aed',
    details: 'Computer Science with specialization in Artificial Intelligence & Machine Learning',
    badge: null,
  },
  {
    id: 3,
    institution: 'TIRUMALA IIT & Medical Academy',
    degree: 'Intermediate MPC',
    affiliation: 'Bhimavaram, AP',
    period: '2018 – 2020',
    status: 'Completed',
    grade: '86%',
    icon: '📚',
    color: '#0891b2',
    details: 'Mathematics, Physics, Chemistry',
    badge: null,
  },
  {
    id: 4,
    institution: "Bharatiya Vidya Bhavan's",
    degree: 'CBSE Secondary',
    affiliation: 'Tadepalligudem, AP',
    period: '2018',
    status: 'Completed',
    grade: '67%',
    icon: '🏫',
    color: '#d97706',
    details: 'Central Board of Secondary Education',
    badge: null,
  },
]

export const projects = [
  {
    id: 1,
    title: 'Mortgage Assistant AI',
    subtitle: 'LangGraph · Conversational AI',
    type: 'Dynamatix — AI Product',
    typeColor: '#2563eb',
    description: 'AI-powered mortgage advisor using LangGraph multi-agent subgraphs for affordability analysis, income evaluation, and personalized recommendations with stateful session management.',
    tech: ['Python', 'LangGraph', 'LangChain', 'Flask', 'MongoDB', 'JWT'],
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Document Intelligence System',
    subtitle: 'OCR · LLM · PDF Processing',
    type: 'Dynamatix — Document AI',
    typeColor: '#7c3aed',
    description: 'End-to-end document processing pipeline using PaddleOCR and PyMuPDF for PDF extraction, combined with LLM-powered Q&A, summarization, and insights from uploaded documents.',
    tech: ['PaddleOCR', 'PyMuPDF', 'LangChain', 'Flask', 'Azure Blob', 'Python'],
    icon: '📄',
  },
  {
    id: 3,
    title: 'OpenAPI NL Execution Layer',
    subtitle: 'Natural Language → API',
    type: 'Dynamatix — Integration',
    typeColor: '#0891b2',
    description: 'OpenAPI-driven integration layer enabling dynamic execution of external APIs through natural language. Supports intent detection, parameter resolution, and confirmation flows.',
    tech: ['Flask', 'OpenAPI', 'LLM', 'Python', 'REST APIs', 'RBAC'],
    icon: '🔗',
  },
  {
    id: 4,
    title: 'RiskHawk Platform Revamp',
    subtitle: 'Java · Full Stack Rebuild',
    type: 'Dynamatix — Full Stack',
    typeColor: '#059669',
    description: 'Complete full-stack revamp of the RiskHawk risk analytics platform — rebuilt backend APIs (Java), new Angular UI, optimized database queries serving FinTech clients at scale.',
    tech: ['Java', 'Angular', 'SQL', 'REST APIs', 'NPCI', 'Banking Systems'],
    icon: '🦅',
  },
  {
    id: 5,
    title: 'Water Quality IoT + ML',
    subtitle: 'IoT · Machine Learning',
    type: 'College Project',
    typeColor: '#d97706',
    description: 'Real-time IoT water quality monitoring system using sensor arrays and ML models to predict contamination levels and generate actionable alerts.',
    tech: ['Python', 'Machine Learning', 'IoT', 'Sensors', 'Data Analysis'],
    icon: '💧',
  },
  {
    id: 6,
    title: 'Foundation Web Presence',
    subtitle: 'NGO Digital Identity',
    type: 'Swechha Foundation',
    typeColor: '#059669',
    description: 'Designed and built a complete responsive website for a humanitarian NGO, improving their digital outreach and volunteer engagement.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    icon: '🌍',
  },
]

export const certifications = [
  {
    id: 1,
    title: 'Internship Completion Certificate',
    issuer: 'Swechha Being Humanitarian Foundation',
    year: '2023',
    icon: '🏅',
    color: '#059669',
  },
  {
    id: 2,
    title: 'Merit Certification — Poster Presentation',
    issuer: 'CBIT (Chaitanya Bharathi Institute of Technology)',
    year: '2023',
    icon: '🥇',
    color: '#d97706',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
