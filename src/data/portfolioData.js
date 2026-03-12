export const portfolioData = {
  // --- Hero / Personal Info ---
  name: "Emmy Fong",
  titles: ["Student", "AI Enthusiast", "Full-Stack Developer", "Game Developer", "Researcher"],
  bio: [
    "Hi! My name is Emmy. I'm currently a Computer Science student at Simon Fraser University in a Bachelor-Master Dual Degree Program with Zhejiang University. My interests include Software Development, Artificial Intelligence, Machine and Deep learning, Full Stack Web Development, Quantum Computing, and Finance.",
    "I'm working towards a Bachelor of Science in Computer Science at SFU and a Master in Finance at Zhejiang University."
  ],
  // --- Social Links ---
  socials: {
    github: "https://github.com/emmyfong",
    linkedin: "https://www.linkedin.com/in/emmy-fong-0ab710214/",
    resume: "https://raw.githubusercontent.com/emmyfong/personal-portfolio/main/Resume.pdf"
  },

  // --- Skills ---
  skills: {
    'Programming': ['Python', 'C/C++', 'C#', 'Kotlin', 'SQL', 'JavaScript', 'HTML/CSS', 'React', 'Node.js', 'Next.js', 'Flask', 'FastAPI', 'Express.js'],
    'Databases & Tools': ['Git', 'GitHub', 'GitLab', 'MongoDB', 'SQLite', 'Google Cloud Platform', 'Firebase', 'Unity', 'Linux', 'Android Studio', 'Pydantic', 'Socket.IO', 'Jupyter Notebooks', 'NumPy', 'Pandas'],
    'Concepts & Methods': ['Data Engineering', 'Analytics Data Modeling', 'Generative AI', 'RESTful API Design', 'Async Programming (FastAPI)', 'GridFS', 'MVVM Architecture', 'Agile SDLC', 'Data Seeding', 'CORS'],
    'AI Tools': ['ChatGPT', 'Google Gemini', 'DeepSeek', 'Claude AI/Code', 'Cursor', 'Google Antigravity', 'OpenAI Codex', 'CoPilot', 'Ollama']
  },

  // --- Experiences ---
  experiences: [
    {
      role: 'Junior Business Analyst',
      organization: 'SFU Office of the Vice President Research and Innovation',
      date: 'Jan 2026 - Present',
      description: 'Developed a Python-based validation program to verify the legal status, amalgamations, and continuations of companies. Authored and proposed a data pipeline to streamline verification of company activity, transitioning manual spreadsheet audits into an automated, scalable workflow. Collaborated with web development and database teams to propose schema enhancements for web application, ensuring better integration of external data.',
      tags: ['Python', 'Data Engineering', 'Process Automation']
    },
    {
      role: 'Software Developer',
      organization: 'SFU Robot Soccer Club — Reinforcement Learning Team',
      date: 'Sep 2025 - Present',
      description: 'Developing a training environment by integrating the MuJoCo physics engine with grSim to train autonomous soccer robots. Modeling high-fidelity robot assets using Blender and CAD, converting geometries into MuJoCo XML formats for accurate physical simulation. Conducting competitive research on RL architectures used by global RoboCup teams to transition team logic from Finite State Machines (FSM) to deep RL.',
      tags: ['MuJoCo', 'C++', 'Python', 'Reinforcement Learning']
    },
    {
      role: 'Treasurer',
      organization: 'Women in Computer Science, Simon Fraser University',
      date: 'May 2025 - Present',
      description: 'Responsible for overseeing annual budget planning and maintaining accurate financial records in alignment with university funding policies. Developed and maintained a comprehensive Google spreadsheet to track income, reimbursements, and expenditures, significantly enhancing financial accuracy and transparency.',
      tags: ['Leadership', 'Finance', 'Management']
    },
    {
      role: 'Freelance Web Developer',
      organization: 'Whitebox Coworking',
      date: 'May 2025 - Sep 2025',
      description: 'Engineered full-stack management system with multi-tier space admin portal. Optimized media delivery by 40% via GridFS and async APIs for location-specific asset management. Hardened system security using origin-specific CORS middleware and automated data seeding utilities.',
      tags: ['FastAPI', 'MongoDB', 'Next.js', 'Full Stack Development']
    },
    {
      role: 'Research Assistant',
      organization: 'Simon Fraser University',
      date: 'Sep 2024 - Dec 2024',
      description: 'Prototyped AR architectural optimizations for medical education, focusing on latency and QoE metrics. Reduced interaction bottlenecks by balancing local compute with network-bound bandwidth parameters. Implemented code-partitioning offloading and Dynamic Adaptive MAR to stabilize high-fidelity rendering.',
      tags: ['AR/VR', 'Netowrk Optimization', 'Research']
    },

  ],

  // --- Education ---
  education: [
    {
      school: 'Simon Fraser University',
      degree: 'B.S. in Computer Science and Masters in Finance (Dual Degree with Zhejiang University)',
      date: 'Sep 2023 - Expected April 2028',
      description: 'Bachelor-Master Dual Degree Program. Focus on AI, Data Science, and Financial Engineering.',
    }
  ],

  // --- Projects ---
  projects: [
    {
      title: 'MAPF Benchmarking Suite',
      description: 'A modular pipeline comparing CBS vs. SAT-based solvers for Multi-Agent Path Finding with 10–30% obstacle density.',
      image: new URL('../assets/ProjectImages/MAPF/MAPF1.png', import.meta.url).href,
      tech: ['Python', 'PyGame', 'A*', 'SAT Solvers', 'CBS'],
      date: 'Dec 2025',
      github: 'https://github.com/AoiKumo31/MAPF-SAT-Benchmark',
      details: 'Built modular pipeline comparing CBS vs. SAT-based solvers with 10–30% obstacle density generation. Developed PyGame visualizer and collision validator to verify vertex/edge constraints across agent paths. Analyzed scalability for 2–20 agents, identifying phase transitions where SAT outperforms search methods.',
    },
    {
      title: 'Multi-Agent Path Finding (MAPF) Solvers',
      description: 'Implementation of Prioritized Planning and CBS algorithms with Disjoint Splitting optimizations.',
      image: new URL('../assets/ProjectImages/MAPF/MAPF2.png', import.meta.url).href,
      tech: ['Python', 'CBS', 'Disjoint Splitting', 'Optimization'],
      date: 'Oct 2025',
      details: 'Implemented Prioritized Planning, Conflict-Based Search (CBS), and CBS with Disjoint Splitting algorithms. Reduced high-level node expansion by 40% by engineering Disjoint Splitting as a search-space optimization. Designed edge-case test instances to prove the incompleteness and suboptimality of decoupled solvers formally.',
    },
    {
      title: 'Personal Finance App',
      description: 'A mobile application for secure, real-time personal finance tracking, built using modern Android development principles.',
      image: new URL('../assets/ProjectImages/PFApp/PF3.png', import.meta.url).href,
      tech: ['Android Studio', 'Kotlin', 'Firebase', 'Jetpack Compose', 'MVVM'],
      github: 'https://github.com/emmyfong/PersonalFinanceApp',
      details: 'Developed a feature-rich personal finance application for Android using Kotlin and Android Studio. The architecture was based on the industry-standard Model-View-ViewModel (MVVM) pattern, utilizing Jetpack Compose for a reactive and declarative user interface across three distinct layers (UI, ViewModel, Repository). The application features secure, real-time transaction data persistence using a NoSQL data model implemented with Firebase Authentication and Firestore. This model was structured across two main collections to efficiently handle user accounts and transaction records. Key functionalities included manual transaction logging, net cash flow calculation, and a comprehensive dashboard for data visualization.',
    },
    {
      title: 'Library Database',
      description: 'A full-stack library management system featuring a FastAPI backend and React frontend, with SQLAlchemy for relational database interaction.',
      image: new URL('../assets/ProjectImages/LibraryDB/LDB-3.png', import.meta.url).href,
      tech: ['React', 'FastAPI', 'SQLAlchemy', 'SQLite'],
      date: 'Apr 2025',
      github: 'https://github.com/emmyfong/CMPT354-LibraryDataBase',
      details: 'Architected 3-layer service backend with 10+ REST endpoints and SQLAlchemy ORM for inventory logic. Designed modular React frontend with reusable UI components for authentication and book circulation. Managed relational schema for users, inventory, and transactions via SQLite and custom data models.',
    },
    {
      title: 'F1 Analytics Website',
      description: 'In Progress F1 Analytics using Python, Next.js, Supabase, and FastF1 API.',
      image: '',
      tech: ['Python', 'Next.js', 'SupaBase', 'FastF1 API'],
      details: 'In Progress F1 Analytics using Python, Next.js, Supabase, and FastF1 API.',
    },
    {
      title: 'Witch Dog',
      description: 'A full-stack, real-time multiplayer trivia game built in StormHacks 2025 (a 24-hour hackathon), featuring dynamic content generation via the Google Gemini API.',
      image: new URL('../assets/ProjectImages/WitchDog/WD-1.png', import.meta.url).href,
      tech: ['Node.js', 'Express.js', 'Socket.IO', 'React', 'Google Gemini API'],
      github: 'https://github.com/emmyfong/storm-hacks-2025',
      link: 'https://storm-hacks-2025.vercel.app/',
      details: 'Designed and implemented a complete real-time multiplayer trivia game. The project\'s backend, using Node.js/Express.js, was coupled with a Socket.IO WebSocket layer, which was critical for low-latency, real-time communication. This layer standardized over 10 core events to manage game state synchronization across 4 concurrent player clients. The game’s core loop was enhanced by integrating the Google Gemini API to dynamically generate unique trivia questions on demand, ensuring virtually endless and fresh content. The frontend was a robust React/TypeScript application with a dedicated client-side state management system to handle WebSocket persistence and manage transitions across more than 5 distinct game screens.',
    },
    {
      title: 'Chord Breaker',
      description: 'A music-based combat rhythm game engineered using the Unity and C#, centered around music theory concepts.',
      image: '',
      tech: ['Unity', 'C#', 'Game Development', 'Music Theory'],
      link: 'https://angrycow05.itch.io/chord-breaker',
      details: 'A game development project utilizing the Unity and C# to create a unique rhythm-based combat experience. The core gameplay loop was engineered using a singleton pattern for central game management and state control. A custom inventory UI system was designed and implemented for player interaction and item management. The most distinct feature was the creation of the main combat loop, which functions essentially as a music editor grounded in fundamental music theory principles, allowing for complex, music-driven interaction and challenge.',
    },
    {
      title: 'Brain Tumor Segmentation',
      description: 'Explored Meta\'s Segment Anything Models and tested different methods to segment brain tumors on the BraTS brain tumor dataset.',
      image: new URL('../assets/ProjectImages/SAM-2.png', import.meta.url).href,
      tech: ['Python', 'PyTorch', 'NumPy', 'SAM'],
      details: 'This project investigated the effectiveness of general-purpose segmentation models, like Meta’s Segment Anything Model (SAM), for highly specialized tasks, specifically brain tumor segmentation. I experimented with various prompting strategies, including bounding boxes and point clouds derived from ground-truth masks, to guide the zero-shot model. The analysis focused on evaluating SAM\'s performance on various tumor regions (Necrotic Core, Edema, and Enhancing Tumor) against established medical image segmentation benchmarks to understand its potential and limitations in a clinical context.',
    },
    {
      title: 'WanderWise - Travel Planning Application',
      description: 'Collaborative development of a travel planning web application featuring map-based navigation, personalized route planning, and location search powered by the Google Maps API.',
      image: new URL('../assets/ProjectImages/WanderWise/WW1.png', import.meta.url).href,
      tech: ['React', 'Google Maps API', 'JavaScript', 'HTML/CSS'],
      link: 'https://main.d1n7pdvw8eryho.amplifyapp.com/',
      details: 'Contributed to the development of a full-featured travel planning application designed to enhance user navigation and destination discovery through an interactive map interface. Integrated Google Maps API to implement key features such as location autocomplete and Google Directions for accurate, user-friendly route planning. Developed interactive components including “Find Attractions” and “Plan Route,” enabling personalized travel recommendations and itinerary construction. Worked within a collaborative team using GitHub for version control, participated in Agile Kanban workflows, and documented progress through structured milestones to ensure consistent development and delivery.',
    },
    {
      title: 'Krill Krushers',
      description: 'Award-winning Unity game developed for StormHacks 2024, inspired by Vampire Survivors and League of Legends’ Swarm mode.',
      image: new URL('../assets/ProjectImages/KrillKrushers/KK1.png', import.meta.url).href,
      tech: ['Unity C#', 'Unity Animator', 'Visual Studio'],
      github: 'https://github.com/emmyfong/KrillKrushers',
      link: 'https://emmyfong.github.io/KrillKrushers/',
      details: 'Co-led the development of Krill Krushers, a 2D survival-style game built in Unity and recognized as the “Best Entertainment Hack” at SFU Surge x MLH’s 2024 StormHacks. Inspired by titles such as Vampire Survivors and League of Legends’ Swarm mode, the project focused on creating fast-paced, upgrade-based gameplay. Responsibilities included designing and implementing core game systems such as game state transitions (play, pause, death, level-up, restart), enemy spawner logic, and an upgrade selection mechanic. The upgrade system presents players with three randomized enhancements from a predefined pool, offering strategic depth and replayability. The project emphasized real-time responsiveness, polished UI elements, and engaging player progression loops.',
    },
    {
      title: 'Tic-Tac-Toe AI',
      description: 'Implemented AI for extended Tic-Tac-Toe using MiniMax, Alpha-Beta Pruning, and Monte Carlo Search Tree.',
      image: new URL('../assets/ProjectImages/TTT/TTT2.png', import.meta.url).href,
      tech: ['Python', 'PyCharm'],
      details: 'Developed an AI engine for solving extended versions of Tic-Tac-Toe by implementing and comparing multiple search algorithms, including MiniMax, MiniMax with Alpha-Beta Pruning, and Monte Carlo Search Tree (MCST). Depth-cutoff versions of MiniMax and Alpha-Beta were implemented to balance decision quality with computational efficiency. A custom evaluation function was designed to assess board states by estimating potential winning configurations, improving the AI’s ability to select optimal moves. The AI consistently achieved optimal play, ensuring a win or draw against human opponents under standard conditions.',
    }
  ]
};
