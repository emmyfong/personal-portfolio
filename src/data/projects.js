/* Project Data */

const projects = [
    /* SAM Segmentation */
    {
        title: 'Brain Tumor Segmentation',
        description: 'Explored Meta\'s Segment Anything Models and tested different methods to segment brain tumors on the BraTS brain tumor dataset.',
        image: new URL('../assets/ProjectImages/SAM-2.png', import.meta.url).href,
        tech: ['Python', 'PyTorch', 'SAM'],
        featured: true,
        slug: 'brain-tumor-segmentation',
        details: 'Implemented a brain tumor segmentation pipeline by fine-tuning Meta’s Segment Anything Model (SAM) using adapter modules in PyTorch, with the goal of improving segmentation accuracy on the BraTS medical imaging dataset. Developed and evaluated multiple prompt-based approaches—including bounding-box, point-based, and hybrid workflows—to optimize tumor region isolation. Performance was assessed using the Dice coefficient and Intersection over Union (IoU) metrics, demonstrating improvements over the SAM baseline. The project included the automation of data preprocessing and inference workflows in Python, with support for NIfTI medical imaging formats and integrated visualization tools to streamline model development and analysis.',
        moreImages: [new URL('../assets/ProjectImages/SAM-1.png', import.meta.url).href, new URL('../assets/ProjectImages/SAM-2.png', import.meta.url).href, new URL('../assets/ProjectImages/SAM-3.png', import.meta.url).href]
    },
    /* Library Database */
    {
        title: 'Library Database',
        description: 'A full-stack library management system featuring a FastAPI backend and React frontend, with SQLAlchemy for relational database interaction.',
        image: new URL('../assets/ProjectImages/LibraryDB/LDB-3.png', import.meta.url).href,
        tech: ['React', 'FastAPI', 'SQLAlchemy'],
        featured: true,
        slug: 'library-database',
        github: 'https://github.com/EvanDongChen/CMPT354-LibraryDataBase',
        details: 'Developed a full-stack web application for managing community library operations, including borrowing and donating books, user account creation, volunteer registration, and a community Q&A forum. The system was built using FastAPI for the backend and React for the frontend, with SQLAlchemy handling database communication. Responsibilities centered on backend development, including the design of a normalized relational database schema, implementation of secure user authentication, and development of robust API endpoints to support core application features. The project emphasized scalable architecture and clean separation between backend services and the user interface.',
        moreImages: [new URL('../assets/ProjectImages/LibraryDB/LDB-3.png', import.meta.url).href, new URL('../assets/ProjectImages/LibraryDB/LDB-1.png', import.meta.url).href, new URL('../assets/ProjectImages/LibraryDB/LDB-2.png', import.meta.url).href]
    },
    {
        title: 'WanderWise - Travel Planning Application',
        description: 'Collaborative development of a travel planning web application featuring map-based navigation, personalized route planning, and location search powered by the Google Maps API.',
        image: new URL('../assets/ProjectImages/WanderWise/WW1.png', import.meta.url).href,
        tech: ['React', 'Google Maps API', 'JavaScript', 'HTML/CSS'],
        featured: true,
        slug: 'wander-wise',
        link: 'https://main.d1n7pdvw8eryho.amplifyapp.com/',
        details: 'Contributed to the development of a full-featured travel planning application designed to enhance user navigation and destination discovery through an interactive map interface. Integrated Google Maps API to implement key features such as location autocomplete and Google Directions for accurate, user-friendly route planning. Developed interactive components including “Find Attractions” and “Plan Route,” enabling personalized travel recommendations and itinerary construction. Worked within a collaborative team using GitHub for version control, participated in Agile Kanban workflows, and documented progress through structured milestones to ensure consistent development and delivery.',
        moreImages: [new URL('../assets/ProjectImages/WanderWise/WW1.png', import.meta.url).href, new URL('../assets/ProjectImages/WanderWise/WW2.png', import.meta.url).href, new URL('../assets/ProjectImages/WanderWise/WW3.png', import.meta.url).href]
    },
    {
        title: 'Krill Krushers',
        description: 'Award-winning Unity game developed for StormHacks 2024, inspired by Vampire Survivors and League of Legends’ Swarm mode. Focused on core game logic, system design, and gameplay flow.',
        image: new URL('../assets/ProjectImages/KrillKrushers/KK1.png', import.meta.url).href,
        tech: ['Unity C#', 'Unity Animator', 'Visual Studio'],
        featured: true,
        slug: 'krill-krushers',
        github: 'https://github.com/emmyfong/KrillKrushers',
        details: 'Co-led the development of Krill Krushers, a 2D survival-style game built in Unity and recognized as the “Best Entertainment Hack” at SFU Surge x MLH’s 2024 StormHacks. Inspired by titles such as Vampire Survivors and League of Legends’ Swarm mode, the project focused on creating fast-paced, upgrade-based gameplay. Responsibilities included designing and implementing core game systems such as game state transitions (play, pause, death, level-up, restart), enemy spawner logic, and an upgrade selection mechanic. The upgrade system presents players with three randomized enhancements from a predefined pool, offering strategic depth and replayability. The project emphasized real-time responsiveness, polished UI elements, and engaging player progression loops.',
        moreImages: [ new URL('../assets/ProjectImages/KrillKrushers/KK1.png', import.meta.url).href,  new URL('../assets/ProjectImages/KrillKrushers/KK2.png', import.meta.url).href,  new URL('../assets/ProjectImages/KrillKrushers/KK3.png', import.meta.url).href]
    },
    {
        title: 'Tic-Tac-Toe AI',
        description: 'Implemented AI for extended Tic-Tac-Toe using MiniMax, Alpha-Beta Pruning, and Monte Carlo Search Tree to evaluate and optimize gameplay strategies.',
        image: '/images/library-db.png',
        tech: ['React', 'FastAPI', 'SQLAlchemy'],
        featured: true,
        slug: 'tic-tac-toe',
        github: 'https://github.com/emmyfong/library-db',
        details: 'Developed an AI engine for solving extended versions of Tic-Tac-Toe by implementing and comparing multiple search algorithms, including MiniMax, MiniMax with Alpha-Beta Pruning, and Monte Carlo Search Tree (MCST). Depth-cutoff versions of MiniMax and Alpha-Beta were implemented to balance decision quality with computational efficiency. A custom evaluation function was designed to assess board states by estimating potential winning configurations, improving the AI’s ability to select optimal moves. The AI consistently achieved optimal play, ensuring a win or draw against human opponents under standard conditions.',
        moreImages: []
    },
    {
        title: 'Portfolio Website',
        description: 'Personal website with Vite + React + animations',
        image: '/images/portfolio.png',
        tech: ['React', 'CSS', 'Framer Motion'],
        featured: false,
        slug: 'portfolio-website',
        github: 'https://github.com/emmyfong/portfolio',
        details: 'Designed for showcasing my work interactively with a typewriter hero and particle background.',
        moreImages: []
    }
];
export default projects