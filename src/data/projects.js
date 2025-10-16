/* Project Data */

const projects = [

    /* F1 Analytics Website */
    {
        title: 'F1 Analytics Website - In Progress',
        description: '',
        image: '',
        tech: ['Python', 'Next.js', 'SupaBase', 'FastF1 API'],
        featured: false,
        slug: 'f1-analytics-app',
        details: '',
        moreImages: []
    },

    /* Witch Dog Trivia */
    {
        title: 'Witch Dog',
        description: 'A full-stack, real-time multiplayer trivia game built in StormHacks 2025 (a 24-hour hackathon), featuring dynamic content generation via the Google Gemini API.',
        image: new URL('../assets/ProjectImages/WitchDog/WD-1.png', import.meta.url).href,
        tech: ['Node.js', 'Express.js', 'Socket.IO', 'React', 'Google Gemini API'],
        featured: true,
        slug: 'witch-dog-trivia',
        github: 'https://github.com/emmyfong/storm-hacks-2025',
        link: 'https://storm-hacks-2025.vercel.app/',
        details: 'Designed and implemented a complete real-time multiplayer trivia game. The project\'s backend, using Node.js/Express.js, was coupled with a Socket.IO WebSocket layer, which was critical for low-latency, real-time communication. This layer standardized over 10 core events to manage game state synchronization across 4 concurrent player clients. The game’s core loop was enhanced by integrating the Google Gemini API to dynamically generate unique trivia questions on demand, ensuring virtually endless and fresh content. The frontend was a robust React/TypeScript application with a dedicated client-side state management system to handle WebSocket persistence and manage transitions across more than 5 distinct game screens.',
        moreImages: [new URL('../assets/ProjectImages/WitchDog/WD-2.png', import.meta.url).href, new URL('../assets/ProjectImages/WitchDog/WD-3.png', import.meta.url).href]
    },

    /* Personal Finance App */
    {
        title: 'Personal Finance App',
        description: 'A mobile application for secure, real-time personal finance tracking, built using modern Android development principles.',
        image: new URL('../assets/ProjectImages/FinanceApp-1.png', import.meta.url).href,
        tech: ['Android Studio', 'Kotlin', 'Firebase', 'Jetpack Compose', 'MVVM'],
        featured: false,
        slug: 'personal-finance-app',
        github: '',
        details: 'Developed a feature-rich personal finance application for Android using Kotlin and Android Studio. The architecture was based on the industry-standard Model-View-ViewModel (MVVM) pattern, utilizing Jetpack Compose for a reactive and declarative user interface across three distinct layers (UI, ViewModel, Repository). The application features secure, real-time transaction data persistence using a NoSQL data model implemented with Firebase Authentication and Firestore. This model was structured across two main collections to efficiently handle user accounts and transaction records. Key functionalities included manual transaction logging, net cash flow calculation, and a comprehensive dashboard for data visualization.',
        moreImages: []
    },

    /* Chord Breaker */
    {
        title: 'Chord Breaker',
        description: 'A music-based combat rhythm game engineered using the Unity and C#, centered around music theory concepts.',
        image: new URL('../assets/ProjectImages/ChordBreaker-1.png', import.meta.url).href,
        tech: ['Unity', 'C#', 'Game Development', 'Music Theory'],
        featured: false,
        slug: 'chord-breaker',
        link: 'https://angrycow05.itch.io/chord-breaker',
        details: 'A game development project utilizing the Unity and C# to create a unique rhythm-based combat experience. The core gameplay loop was engineered using a singleton pattern for central game management and state control. A custom inventory UI system was designed and implemented for player interaction and item management. The most distinct feature was the creation of the main combat loop, which functions essentially as a music editor grounded in fundamental music theory principles, allowing for complex, music-driven interaction and challenge.',
        moreImages: [] // Add image URLs here when available
    },
    
    /* SAM Segmentation */
    {
        title: 'Brain Tumor Segmentation',
        description: 'Explored Meta\'s Segment Anything Models and tested different methods to segment brain tumors on the BraTS brain tumor dataset.',
        image: new URL('../assets/ProjectImages/SAM-2.png', import.meta.url).href,
        tech: ['Python', 'PyTorch', 'NumPy', 'SAM'],
        featured: true,
        slug: 'brain-tumor-segmentation',
        details: 'This project investigated the effectiveness of general-purpose segmentation models, like Meta’s Segment Anything Model (SAM), for highly specialized tasks, specifically brain tumor segmentation. I experimented with various prompting strategies, including bounding boxes and point clouds derived from ground-truth masks, to guide the zero-shot model. The analysis focused on evaluating SAM\'s performance on various tumor regions (Necrotic Core, Edema, and Enhancing Tumor) against established medical image segmentation benchmarks to understand its potential and limitations in a clinical context.',
        moreImages: [new URL('../assets/ProjectImages/SAM-1.png', import.meta.url).href, new URL('../assets/ProjectImages/SAM-2.png', import.meta.url).href, new URL('../assets/ProjectImages/SAM-3.png', import.meta.url).href]
    },
    /* Library Database */
    {
        title: 'Library Database',
        description: 'A full-stack library management system featuring a FastAPI backend and React frontend, with SQLAlchemy for relational database interaction.',
        image: new URL('../assets/ProjectImages/LibraryDB/LDB-3.png', import.meta.url).href,
        tech: ['React', 'FastAPI', 'SQLAlchemy', 'JavaScript'],
        featured: true,
        slug: 'library-database',
        github: 'https://github.com/EvanDongChen/CMPT354-LibraryDataBase',
        link: 'https://librarydatabaseproject.onrender.com/',
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
        featured: false,
        slug: 'krill-krushers',
        github: 'https://github.com/emmyfong/KrillKrushers',
        link: 'https://emmyfong.github.io/KrillKrushers/',
        details: 'Co-led the development of Krill Krushers, a 2D survival-style game built in Unity and recognized as the “Best Entertainment Hack” at SFU Surge x MLH’s 2024 StormHacks. Inspired by titles such as Vampire Survivors and League of Legends’ Swarm mode, the project focused on creating fast-paced, upgrade-based gameplay. Responsibilities included designing and implementing core game systems such as game state transitions (play, pause, death, level-up, restart), enemy spawner logic, and an upgrade selection mechanic. The upgrade system presents players with three randomized enhancements from a predefined pool, offering strategic depth and replayability. The project emphasized real-time responsiveness, polished UI elements, and engaging player progression loops.',
        moreImages: [ new URL('../assets/ProjectImages/KrillKrushers/KK1.png', import.meta.url).href,  new URL('../assets/ProjectImages/KrillKrushers/KK2.png', import.meta.url).href,  new URL('../assets/ProjectImages/KrillKrushers/KK3.png', import.meta.url).href]
    },
    {
        title: 'Tic-Tac-Toe AI',
        description: 'Implemented AI for extended Tic-Tac-Toe using MiniMax, Alpha-Beta Pruning, and Monte Carlo Search Tree to evaluate and optimize gameplay strategies.',
        image: new URL('../assets/ProjectImages/TTT/TTT2.png', import.meta.url).href,
        tech: ['Python', 'PyCharm'],
        featured: false,
        slug: 'tic-tac-toe',
        details: 'Developed an AI engine for solving extended versions of Tic-Tac-Toe by implementing and comparing multiple search algorithms, including MiniMax, MiniMax with Alpha-Beta Pruning, and Monte Carlo Search Tree (MCST). Depth-cutoff versions of MiniMax and Alpha-Beta were implemented to balance decision quality with computational efficiency. A custom evaluation function was designed to assess board states by estimating potential winning configurations, improving the AI’s ability to select optimal moves. The AI consistently achieved optimal play, ensuring a win or draw against human opponents under standard conditions.',
        moreImages: [new URL('../assets/ProjectImages/TTT/TTT1.png', import.meta.url).href, new URL('../assets/ProjectImages/TTT/TTT2.png', import.meta.url).href, new URL('../assets/ProjectImages/TTT/TTT3.png', import.meta.url).href]
    },
];
export default projects