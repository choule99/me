import { writeFileSync } from 'fs';
import { execSync } from 'child_process';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

// ── Variant Definitions ──

const variants = [
  {
    id: "FullStack",
    name: "Claude Houle",
    title: "Full-Stack Developer & Software Architect",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",

    location: "Montreal, QC",
    summary: "Software developer with 23+ years of experience across backend systems, mobile platforms, and web applications. Proven ability to architect and deliver production software spanning the full stack — from Spring Boot backends and Angular frontends to native iOS and Android clients — with a focus on quality, mentorship, and continuous improvement.",
    accomplishments: [
      "Led a production iOS app serving 200,000+ DAU with 99.999% crash-free rate across a 450K-line Swift codebase",
      "Architected full-stack solutions at Spiria: CAE's pilot training platform (Spring/Angular/iOS) and Acosta's retail analytics platform (Node.js/BackboneJS)",
      "Led end-to-end development of a visionOS-native app — 1st Connected Worker Solution on the visionOS App Store, securing an Apple Vision Pro Dev Kit",
      "Integrated CI/CD pipeline improving build speeds by 50% and increasing deployments from 1/week to 4/day through full App Store automation",
      "Doubled test coverage (30% → 60%) over four years through disciplined, incremental growth alongside codebase modernization",
    ],
    skills: [
      { section: "Technical Expertise" },
      { label: "Languages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL"] },
      { label: "Frontend", items: ["Angular", "React", "SwiftUI", "UIKit"] },
      { label: "Mobile", items: ["iOS SDK", "visionOS SDK", "Android SDK", "Combine"] },
      { label: "Architecture", items: ["REST API Design", "MVVM", "SOLID", "Microservices", "Clean Architecture"] },
      { section: "DevOps & Tools" },
      { label: "CI/CD", items: ["GitHub Actions", "Fastlane", "Jenkins", "Docker", "Kubernetes"] },
      { label: "Testing", items: ["JUnit", "Mockito", "XCTest", "Swift Testing", "Jest"] },
      { label: "Gen AI", items: ["Claude integration (code & test acceleration)"] },
      { section: "Leadership & Methodologies" },
      { label: "Methods", items: ["Agile (Scrum/Kanban)", "TDD", "Continuous Integration"] },
      { label: "Spoken", items: ["French and English (fully bilingual)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "2021 — Present",
        description: "Technical leader for a connected worker platform serving 200,000+ DAU. Driving full-stack evolution across mobile clients and backend integrations while ensuring 99.999% stability.",
        bullets: [
          "Operational Excellence: Major refactoring of 450K-line codebase — raised stability to 99.999% crash-free and doubled test coverage (30% to 60%)",
          "CI/CD Performance: Migrated pipeline to MacStadium, accelerating builds by 50% and enabling 4 daily releases (up from 1/week)",
          "Team Leadership: Recruited and trained a distributed team of 20 developers internationally — operational within 3 months",
          "AI Integration: Optimized workflows through adoption of generative AI tools (Claude), reducing development time by 25%",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "2019 — 2021",
        description: "Led technical delivery of mobile solutions for major clients in healthcare, media, and retail. Managed full development cycles for brands like Metro, Super C, and Le Devoir.",
        bullets: [
          "Technical Standardization: Designed shared iOS framework for 15+ client projects — reduced code duplication and development effort by 50%",
          "Major Deliveries: Technical leadership for flagship applications (Metro & Moi, Biodome de Montreal, AbbVie) from design to deployment",
          "Automation: Implemented CI/CD pipelines (MacStadium) for the entire client portfolio, industrializing release processes",
          "Mentorship: Coached junior developers and led knowledge-sharing sessions to raise overall technical proficiency",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "2013 — 2019",
        description: "Solution architect for custom software engagements spanning backend, frontend, and mobile. Led technical discovery, architecture design, and delivery for enterprise clients.",
        bullets: [
          "CAE PreStudy: Designed end-to-end architecture spanning Spring backend, Angular frontend, and native iOS for aviation pilot training",
          "Acosta SLTouch: Built hybrid mobile app and framework for retail analytics using BackboneJS/MarionetteJS and Node.js",
          "Skillable: Delivered Progressive Web App for micro-learning using Angular and TypeScript",
          "Solution Architecture: Translated business requirements into API contracts, data models, and integration strategies",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "2009 — 2013",
        description: "Pioneer in urban mobility software (Bixi) within a team combining hardware and software. Built backend systems and mobile clients for city-wide deployments.",
        bullets: [
          "Full-Stack Transition: Started on backend Java team for Solstice bike-sharing suite; transitioned to iOS bringing backend expertise",
          "International Deployment: Developed Spotcycle and Solstice apps, deployed successfully in London and New York City",
          "AR Innovation: Pioneered first-ever Augmented Reality bike-sharing finder combining live camera feed with Core Location data",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer",
        dates: "2007 — 2009",
        bullets: [
          "Platform Recovery: Architecture Team member on Ibiza Project — rebuilt travel platform with Java/Spring/Hibernate after critical client recovery",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Mainframe Migration: Migrated legacy systems to Java services on Libra project; globally distributed team (NY, Budapest, Tokyo)",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "2003 — 2005",
        bullets: [
          "Infrastructure Services: Built core services and reusable components on Software Infrastructure team for e-commerce products",
        ],
      },
    ],
  },
  {
    id: "iOS",
    name: "Claude Houle",
    title: "Lead iOS Developer & Mobile Architect",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",

    location: "Montreal, QC",
    summary: "iOS developer with 15+ years on Apple platforms and 23+ years total in software development. I specialize in building reliable, scalable mobile products — from architecting shared libraries to leading distributed teams. Passionate about code quality, CI/CD automation, and emerging technologies like visionOS, I turn technical visions into concrete, user-centered solutions.",
    accomplishments: [
      "Stabilized a 450,000-line Swift codebase (200,000 DAU): Achieved 99.999% crash-free session rate and accelerated release cadence from 1/week to 4/day.",
      "Built and shipped a visionOS-native app selected by Apple for a Vision Pro Dev Kit; launched as the 1st Connected Worker Solution on the visionOS App Store.",
      "Automated App Store deployments end-to-end: Increased release cadence from 1/week to 4/day and accelerated CI build times by 50%.",
      "Fast-tracked onboarding of 20 developers internationally via custom training curriculum — team operational within 3 months.",
      "Designed a shared iOS component library, standardizing practices and accelerating delivery across 15+ client projects.",
    ],
    skills: [
      { section: "iOS & Apple Expertise" },
      { label: "Languages", items: ["Swift (expert)", "SwiftUI", "Combine", "Objective-C (legacy)"] },
      { label: "Frameworks", items: ["visionOS", "ARKit", "Core Data", "Core Location", "MapKit", "AVFoundation"] },
      { label: "Architecture", items: ["Modular Architecture", "MVVM", "Clean Architecture", "Design Patterns", "SOLID"] },
      { label: "Concurrency", items: ["Swift Concurrency (Async/Await)", "GCD"] },
      { section: "Tooling & DevOps" },
      { label: "CI/CD", items: ["Fastlane", "GitHub Actions", "Xcode Cloud", "MacStadium", "Jenkins"] },
      { label: "Tools", items: ["Xcode", "Instruments (Profiling)", "Firebase", "Sentry", "Git"] },
      { label: "Gen AI", items: ["Claude integration (code & test acceleration)"] },
      { section: "Leadership & Methodologies" },
      { label: "Leadership", items: ["Mentorship", "Code Review", "Code Standardization", "Technical Recruiting"] },
      { label: "Methods", items: ["Agile (Scrum/Kanban)", "TDD", "Continuous Integration"] },
      { label: "Spoken", items: ["French and English (fully bilingual)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "2021 — Present",
        description: "Architect and technical leader for a leading connected worker platform serving 200,000+ daily active users. Driving evolution toward modern architectures (SwiftUI, Combine) while maintaining legacy systems (Obj-C), ensuring critical stability at 99.999%.",
        bullets: [
          "visionOS Innovation: Led end-to-end development of the 1st industrial solution on the visionOS App Store (secured Vision Pro Dev Kit after Apple review)",
          "Operational Excellence: Major refactoring effort that raised stability to 99.999% crash-free and doubled test coverage (30% to 60%)",
          "CI/CD Performance: Migrated pipeline to MacStadium, accelerating builds by 50% and enabling 4 daily releases (up from 1/week)",
          "Team Leadership: Recruited and trained a distributed team of 20 developers internationally — operational within 3 months",
          "AI Integration: Optimized workflows through adoption of generative AI tools (Claude), reducing development time by 25%",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "2019 — 2021",
        description: "Responsible for delivering mobile solutions for major clients in healthcare, media, and retail. Led the technical team through complete software development cycles for brands like Metro, Super C, and Le Devoir.",
        bullets: [
          "Technical Standardization: Designed a shared iOS framework, optimizing delivery and consistency across 15+ client projects",
          "Major Deliveries: Technical leadership for flagship applications (Metro & Moi, Biodome de Montreal, AbbVie) from design to deployment",
          "Automation: Implemented and managed CI/CD pipelines (MacStadium) for the entire client portfolio, industrializing release processes",
          "Mentorship: Coached junior developers and led knowledge-sharing sessions (lunch-and-learns) to raise overall technical proficiency",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Senior iOS Developer, Architect",
        dates: "2013 — 2019",
        description: "Architect responsible for designing and evolving custom mobile solutions for major clients. Led the technical aspects of critical projects from requirements definition through go-to-market.",
        bullets: [
          "CAE PreStudy: End-to-end architecture and development of a native iOS application for high-performance aviation pilot training",
          "Payfare (DiDi/Lyft): Developed mobile clients for a real-time payment platform serving mobility and transportation players (gig economy)",
          "Cross-platform Solutions: Delivered diverse applications (healthcare, retail analytics, micro-learning) using native and hybrid technologies based on business needs",
        ],
      },
      {
        company: "8D Technologies",
        title: "iOS Developer",
        dates: "2009 — 2013",
        description: "Pioneer in mobile development for urban mobility (Bixi) within a team combining software and hardware. Worked on large-scale systems under real-world urban connectivity constraints.",
        bullets: [
          "International Deployment: Developed Spotcycle and Solstice apps (bike-sharing), successfully deployed in London and New York",
          "Augmented Reality Innovation: Designed one of the first AR systems for locating shared bikes, combining video feed with geospatial data (Core Location)",
          "Network Optimization: Solved complex data synchronization challenges in offline or limited connectivity environments",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer",
        dates: "2007 — 2009",
        bullets: [
          "Contributed to the recovery and complete rebuild of the Ibiza platform (Java, Spring, Hibernate) following critical client issues",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Migrated legacy mainframe systems to Java services within a globally distributed team (New York, Budapest, Tokyo)",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "2003 — 2005",
        bullets: [
          "Developed infrastructure services and reusable components for e-commerce platforms",
        ],
      },
    ],
  },
  {
    id: "Architect",
    name: "Claude Houle",
    title: "Software Architect & Technical Leader",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",

    location: "Montreal, QC",
    summary: "Software architect with 23+ years of hands-on experience designing and delivering systems across backend, mobile, and web. Proven leadership in solution architecture, team transformation, mentorship, and cross-functional collaboration. Combines deep technical breadth with a product-minded approach to align engineering with business outcomes.",
    accomplishments: [
      "Transformed an 8-person iOS team into a high-performing unit — crash-free rate to 99.999%, deployments from 1/week to 4/day, build speeds improved 50%",
      "Led architecture of a visionOS-native app — 1st Connected Worker Solution on the visionOS App Store, securing an Apple Vision Pro Dev Kit",
      "Onboarded and integrated 20 developers internationally — designed training curriculum and built collaborative culture across time zones, productive within 3 months",
      "Architected CAE's pilot training platform end-to-end: Spring backend, Angular frontend, and native iOS client",
      "Delivered the Accovia Ibiza platform rebuild on time and on budget after a critical client recovery — as a member of the core Architecture Team",
    ],
    skills: [
      { section: "Architecture & Design" },
      { label: "Architecture", items: ["Solution Architecture", "API Design", "System Integration", "Data Modeling", "Distributed Systems"] },
      { label: "Patterns", items: ["Microservices", "Event-Driven", "CQRS", "Clean Architecture", "SOLID"] },
      { section: "Technical Stack" },
      { label: "Languages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Mobile/Web", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "Android SDK", "Angular"] },
      { section: "Leadership & DevOps" },
      { label: "Leadership", items: ["Team Mentorship", "Code Reviews", "Technical Discovery", "Onboarding"] },
      { label: "CI/CD", items: ["GitHub Actions", "Fastlane", "Jenkins", "Docker", "Kubernetes"] },
      { label: "Gen AI", items: ["Claude integration (code & test acceleration)"] },
      { label: "Methods", items: ["Agile (Scrum/Kanban)", "TDD", "Continuous Integration"] },
      { label: "Spoken", items: ["French and English (fully bilingual)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "2021 — Present",
        description: "Technical architect for a connected worker platform serving 200,000+ DAU. Leading architectural evolution, team transformation, and cross-functional alignment across a 450K-line codebase.",
        bullets: [
          "Architecture Leadership: Introduced internal tools, reusable libraries, and standardized practices — achieved 99.999% crash-free rate",
          "Team Scaling: Onboarded 20 developers internationally with custom training curriculum and cross-timezone code reviews — operational within 3 months",
          "Cross-functional Alignment: Bridged engineering, Product Management, and UX Design; established collaboration workflows aligning technical solutions with business goals",
          "CI/CD Architecture: Automated App Store deployments end-to-end; increased release cadence from 1/week to 4/day, improved build speeds by 50%",
          "Quality Engineering: Increased test coverage from 30% to 60% over four years through incremental testing alongside architectural modernization",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "2019 — 2021",
        description: "Led technical architecture and team development across 15+ client projects in healthcare, media, and retail sectors.",
        bullets: [
          "Technical Standardization: Designed shared iOS framework for 15+ client projects — reduced code duplication and development effort by 50%",
          "Process Improvement: Identified communication gaps between teams; established processes and tools improving alignment with product and UX",
          "Team Development: Invested in mentorship and knowledge-sharing sessions, developing junior engineers into independent contributors",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "2013 — 2019",
        description: "Solution architect responsible for initial architecture design and evolution across enterprise client engagements. Led technical discovery, requirements analysis, and delivery.",
        bullets: [
          "Solution Architecture: Led requirements analysis, technical discovery, and produced API contracts, data models, and integration strategies",
          "CAE PreStudy: Designed end-to-end architecture spanning Spring backend, Angular frontend, and iOS client for aviation pilot training",
          "Architecture Artifacts: Produced documentation covering security considerations, scalability approaches, and deployment topologies",
          "Engineering Standards: Defined standards and mentored developers across multiple project teams, raising overall code quality",
          "Acosta SLTouch: Architected hybrid mobile framework for retail analytics using BackboneJS and Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "2009 — 2013",
        description: "Pioneer in urban mobility architecture (Bixi) within a team combining hardware and software. Designed systems for city-wide deployments under real-world constraints.",
        bullets: [
          "System Architecture: Started on backend Java team; transitioned to iOS bringing backend expertise that bridged system architecture across layers",
          "Scalability Solutions: Engineered solutions for challenging connectivity and performance constraints in London and NYC deployments",
          "AR Innovation: Pioneered first-ever Augmented Reality bike-sharing finder combining live camera feed with Core Location data",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer — Architecture Team",
        dates: "2007 — 2009",
        bullets: [
          "Platform Architecture: Rebuilt Ibiza travel platform with Java/Spring/Hibernate after critical client recovery — performance optimization and service orchestration",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Migration Architecture: Libra project — migrated mainframe to Java under financial compliance requirements; globally distributed team",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "2003 — 2005",
        bullets: [
          "Infrastructure Architecture: Built core services and reusable components on Software Infrastructure team for e-commerce products",
        ],
      },
    ],
  },

  {
    id: "JavaDeveloper",
    name: "Claude Houle",
    title: "Senior Java Developer & Backend Architect",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",

    location: "Montreal, QC",
    summary: "Backend developer with 23+ years of experience building enterprise Java systems, microservices architectures, and high-throughput data platforms. Deep expertise in Spring ecosystem, database optimization, and distributed systems. Proven track record delivering mission-critical backends for financial services, travel, and manufacturing — with a focus on reliability, scalability, and team leadership.",
    accomplishments: [
      "Architected and delivered the Ibiza travel platform rebuild at Accovia — Java/Spring/Hibernate backend serving major travel operators, delivered on time after critical client recovery",
      "Built backend services for 8D Technologies' Solstice platform — Java system processing real-time events from Bixi bike-sharing kiosks deployed across cities worldwide",
      "Designed backend architecture for CAE's pilot training platform at Spiria — Spring Boot APIs, data modeling, and integration strategies supporting aviation compliance requirements",
      "Built core infrastructure services at Mediagrif adopted across multiple e-commerce product teams — reusable data access layers, service components, and API patterns",
    ],
    skills: [
      { section: "Backend Expertise" },
      { label: "Languages", items: ["Java (expert)", "Kotlin", "SQL", "TypeScript", "Python"] },
      { label: "Frameworks", items: ["Spring Boot", "Spring Security", "Hibernate/JPA", "REST APIs", "Microservices"] },
      { label: "Data", items: ["PostgreSQL", "MySQL", "Oracle", "DB2", "Redis", "ActiveMQ"] },
      { section: "Architecture & DevOps" },
      { label: "Architecture", items: ["Domain-Driven Design", "CQRS", "Event Sourcing", "API Design", "System Integration"] },
      { label: "CI/CD", items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"] },
      { label: "Testing", items: ["JUnit", "Mockito", "Integration Testing", "TDD", "Contract Testing"] },
      { label: "Gen AI", items: ["Claude integration (code & test acceleration)"] },
      { section: "Leadership & Methodologies" },
      { label: "Leadership", items: ["Mentorship", "Code Reviews", "Technical Documentation", "Onboarding"] },
      { label: "Methods", items: ["Agile (Scrum/Kanban)", "TDD", "Continuous Integration"] },
      { label: "Spoken", items: ["French and English (fully bilingual)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "2021 — Present",
        description: "Technical architect for a connected worker platform serving 200,000+ DAU. Designing backend integrations, API contracts, and data synchronization strategies for mobile clients.",
        bullets: [
          "API Design: Designed API contracts and data synchronization strategies between mobile clients and backend services — ensuring reliability at scale",
          "Engineering Standards: Established code review practices and engineering standards across the development team, improving quality and consistency",
          "Backend Collaboration: Collaborated with backend teams on service architecture decisions, bringing mobile perspective to API design",
          "Team Onboarding: Trained 20 developers with custom curriculum covering architecture patterns and best practices — operational within 3 months",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "2019 — 2021",
        description: "Led technical architecture and API integration across 15+ client projects in healthcare, media, and retail sectors.",
        bullets: [
          "Component Libraries: Designed shared component libraries and architectural patterns adopted across multiple project teams",
          "API Integration: Led integration efforts with various backend systems — established patterns for error handling, caching, and offline support",
          "Technical Mentorship: Coached developers through code reviews and knowledge-sharing sessions on architecture and design patterns",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "2013 — 2019",
        description: "Solution architect for enterprise client engagements. Led backend architecture design, API contracts, and data modeling for complex multi-tier systems.",
        bullets: [
          "CAE PreStudy: Designed backend architecture with Spring Boot, RESTful APIs, and data persistence layer for aviation pilot training",
          "Acosta SLTouch: Architected Node.js backend services and data aggregation pipelines for retail analytics platform",
          "Skillable: Delivered backend services for Progressive Web App micro-learning platform using TypeScript and Node.js",
          "Solution Architecture: Translated business requirements into API contracts, data models, and integration strategies",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "2009 — 2013",
        description: "Backend engineer for urban mobility systems (Bixi). Built Java services processing real-time events from bike-sharing kiosks deployed across major cities.",
        bullets: [
          "Backend Services: Built Java services for Solstice bike-sharing — transaction processing, station management, real-time availability APIs",
          "Data Pipelines: Designed pipelines handling high-volume telemetry from solar-powered POS stations across London and NYC deployments",
          "Full-Stack Transition: Transitioned to iOS development, bringing backend expertise that bridged system layers and improved API design",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer — Architecture Team",
        dates: "2007 — 2009",
        bullets: [
          "Platform Rebuild: Rebuilt Ibiza travel platform with Java/Spring/Hibernate after critical client recovery — service architecture, data access patterns",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Mainframe Migration: Libra project — migrated mainframe to Java/DB2 under financial compliance requirements; globally distributed team",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer — Infrastructure Team",
        dates: "2003 — 2005",
        bullets: [
          "Core Services: Built core backend services and shared infrastructure patterns adopted by multiple e-commerce product teams",
        ],
      },
    ],
  },

  // ── French Variants ──

  {
    id: "JavaDeveloper-FR",
    name: "Claude Houle",
    title: "Développeur Java sénior & Architecte backend",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",
    location: "Montréal, QC",
    sections: {
      profile: "Profil",
      accomplishments: "Réalisations clés",
      skills: "Compétences techniques",
      experience: "Expérience professionnelle",
      education: "Formation Académique",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
      capstone: "Projet de fin d'études : Réalisation technique d'un site Internet (e-commerce) pour une PME.",
    },
    summary: "Développeur backend avec plus de 23 ans d'expérience dans la construction de systèmes Java d'entreprise, d'architectures microservices et de plateformes de données à haut débit. Expertise approfondie de l'écosystème Spring, de l'optimisation de bases de données et des systèmes distribués. Bilan éprouvé dans la livraison de backends critiques pour les services financiers, le voyage et la fabrication — avec un accent sur la fiabilité, la mise à l'échelle et le leadership d'équipe.",
    accomplishments: [
      "Conçu et livré la reconstruction de la plateforme de voyage Ibiza chez Accovia — backend Java/Spring/Hibernate servant les principaux opérateurs de voyage, livré à temps après un redressement client critique",
      "Construit les services backend de la plateforme Solstice de 8D Technologies — système Java traitant les événements en temps réel des kiosques de vélo-partage Bixi déployés dans des villes à travers le monde",
      "Conçu l'architecture backend de la plateforme de formation des pilotes de CAE chez Spiria — APIs Spring Boot, modélisation de données et stratégies d'intégration supportant les exigences de conformité aéronautique",
      "Construit les services d'infrastructure de base chez Mediagrif adoptés par plusieurs équipes de produits e-commerce — couches d'accès aux données réutilisables, composants de service et patterns d'API",
    ],
    skills: [
      { section: "Expertise Backend" },
      { label: "Langages", items: ["Java (expert)", "Kotlin", "SQL", "TypeScript", "Python"] },
      { label: "Frameworks", items: ["Spring Boot", "Spring Security", "Hibernate/JPA", "REST APIs", "Microservices"] },
      { label: "Données", items: ["PostgreSQL", "MySQL", "Oracle", "DB2", "Redis", "ActiveMQ"] },
      { section: "Architecture & DevOps" },
      { label: "Architecture", items: ["Domain-Driven Design", "CQRS", "Event Sourcing", "API Design", "System Integration"] },
      { label: "CI/CD", items: ["Docker", "Kubernetes", "Jenkins", "GitLab CI", "GitHub Actions"] },
      { label: "Tests", items: ["JUnit", "Mockito", "Integration Testing", "TDD", "Contract Testing"] },
      { label: "IA Générative", items: ["Claude (accélération code & tests)"] },
      { section: "Leadership & Méthodologies" },
      { label: "Leadership", items: ["Mentorat", "Code Reviews", "Documentation technique", "Onboarding"] },
      { label: "Méthodes", items: ["Agile (Scrum/Kanban)", "TDD", "Intégration continue"] },
      { label: "Langues", items: ["Français et Anglais (parfaitement bilingue)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "2021 — Présent",
        description: "Architecte technique d'une plateforme pour travailleurs connectés servant plus de 200 000 utilisateurs actifs quotidiens. Conception des intégrations backend, contrats d'API et stratégies de synchronisation pour les clients mobiles.",
        bullets: [
          "Conception API : Élaboration des contrats d'API et stratégies de synchronisation des données entre clients mobiles et services backend — fiabilité à grande échelle",
          "Standards d'ingénierie : Mise en place des pratiques de revue de code et standards au sein de l'équipe, améliorant qualité et cohérence",
          "Collaboration backend : Participation aux décisions d'architecture de services, apportant la perspective mobile à la conception des API",
          "Intégration d'équipe : Formation de 20 développeurs avec programme sur mesure couvrant patterns d'architecture et meilleures pratiques — opérationnels en 3 mois",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "2019 — 2021",
        description: "Direction de l'architecture technique et de l'intégration API sur plus de 15 projets clients dans les secteurs de la santé, des médias et du commerce de détail.",
        bullets: [
          "Bibliothèques de composants : Conception de bibliothèques partagées et patterns architecturaux adoptés par plusieurs équipes de projet",
          "Intégration API : Direction des efforts d'intégration avec divers systèmes backend — patterns de gestion d'erreurs, mise en cache et support hors ligne",
          "Mentorat technique : Accompagnement des développeurs via revues de code et sessions de partage de connaissances sur l'architecture",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "2013 — 2019",
        description: "Architecte de solutions pour engagements clients d'entreprise. Direction de l'architecture backend, contrats d'API et modélisation de données pour systèmes multi-tiers complexes.",
        bullets: [
          "CAE PreStudy : Architecture backend avec Spring Boot, APIs RESTful et couche de persistance pour plateforme de formation des pilotes d'aviation",
          "Acosta SLTouch : Architecture des services backend Node.js et pipelines d'agrégation de données pour plateforme d'analytique de détail",
          "Skillable : Livraison des services backend pour plateforme de micro-apprentissage Progressive Web App avec TypeScript et Node.js",
          "Architecture de solutions : Traduction des exigences d'affaires en contrats d'API, modèles de données et stratégies d'intégration",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "2009 — 2013",
        description: "Ingénieur backend pour systèmes de mobilité urbaine (Bixi). Construction de services Java traitant les événements en temps réel des kiosques de vélo-partage déployés dans les grandes villes.",
        bullets: [
          "Services backend : Construction des services Java pour Solstice — traitement des transactions, gestion des stations, APIs de disponibilité en temps réel",
          "Pipelines de données : Conception des pipelines gérant la télémétrie à haut volume des stations de point de vente solaires (Londres, New York)",
          "Transition full-stack : Passage au développement iOS, apportant l'expertise backend pour améliorer la conception des API",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end — Équipe d'architecture",
        dates: "2007 — 2009",
        bullets: [
          "Reconstruction de plateforme : Reconstruction de la plateforme de voyage Ibiza avec Java/Spring/Hibernate après redressement client — architecture de services, patterns d'accès aux données",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Migration mainframe : Projet Libra — migration mainframe vers Java/DB2 sous exigences de conformité financière ; équipe distribuée mondialement",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java — Équipe d'infrastructure",
        dates: "2003 — 2005",
        bullets: [
          "Services de base : Construction des services backend et patterns d'infrastructure partagés adoptés par plusieurs équipes e-commerce",
        ],
      },
    ],
  },
  {
    id: "FullStack-FR",
    name: "Claude Houle",
    title: "Développeur Full-Stack & Architecte logiciel",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",
    location: "Montréal, QC",
    sections: {
      profile: "Profil",
      accomplishments: "Réalisations clés",
      skills: "Compétences techniques",
      experience: "Expérience professionnelle",
      education: "Formation Académique",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
      capstone: "Projet de fin d'études : Réalisation technique d'un site Internet (e-commerce) pour une PME.",
    },
    summary: "Développeur logiciel avec plus de 23 ans d'expérience en systèmes backend, plateformes mobiles et applications web. Capacité éprouvée à concevoir et livrer des logiciels de production couvrant l'ensemble de la pile technologique — des backends Spring Boot et frontends Angular aux clients natifs iOS et Android — avec un accent sur la qualité, le mentorat et l'amélioration continue.",
    accomplishments: [
      "Dirigé une application iOS en production servant plus de 200 000 utilisateurs actifs quotidiens avec un taux sans plantage de 99,999 % sur une base de code Swift de 450K lignes",
      "Conçu des solutions full-stack chez Spiria : plateforme de formation des pilotes de CAE (Spring/Angular/iOS) et plateforme d'analytique de détail Acosta (Node.js/BackboneJS)",
      "Dirigé le développement complet d'une application native visionOS — 1re solution pour travailleurs connectés sur l'App Store visionOS, obtention d'un Apple Vision Pro Dev Kit",
      "Intégré un pipeline CI/CD améliorant la vitesse de compilation de 50 % et augmentant les déploiements de 1/semaine à 4/jour grâce à l'automatisation complète de l'App Store",
      "Doublé la couverture de tests (30 % → 60 %) sur quatre ans grâce à une croissance disciplinée et incrémentale parallèlement à la modernisation de la base de code",
    ],
    skills: [
      { section: "Expertise Technique" },
      { label: "Langages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL"] },
      { label: "Frontend", items: ["Angular", "React", "SwiftUI", "UIKit"] },
      { label: "Mobile", items: ["iOS SDK", "visionOS SDK", "Android SDK", "Combine"] },
      { label: "Architecture", items: ["REST API Design", "MVVM", "SOLID", "Microservices", "Clean Architecture"] },
      { section: "DevOps & Outils" },
      { label: "CI/CD", items: ["GitHub Actions", "Fastlane", "Jenkins", "Docker", "Kubernetes"] },
      { label: "Tests", items: ["JUnit", "Mockito", "XCTest", "Swift Testing", "Jest"] },
      { label: "IA Générative", items: ["Claude (accélération code & tests)"] },
      { section: "Leadership & Méthodologies" },
      { label: "Méthodes", items: ["Agile (Scrum/Kanban)", "TDD", "Intégration continue"] },
      { label: "Langues", items: ["Français et Anglais (parfaitement bilingue)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "2021 — Présent",
        description: "Leader technique d'une plateforme pour travailleurs connectés servant plus de 200 000 utilisateurs actifs quotidiens. Pilotage de l'évolution full-stack des clients mobiles et intégrations backend, garantissant une stabilité de 99,999 %.",
        bullets: [
          "Excellence opérationnelle : Refactorisation majeure d'une base de code de 450K lignes — stabilité portée à 99,999 % et couverture de tests doublée (30 % à 60 %)",
          "Performance CI/CD : Migration du pipeline sur MacStadium, accélérant la compilation de 50 % et permettant 4 mises en production quotidiennes (vs 1/semaine)",
          "Leadership d'équipe : Recrutement et formation d'une équipe distribuée de 20 développeurs à l'international — opérationnelle en 3 mois",
          "Intégration de l'IA : Optimisation des flux de travail via adoption d'outils d'IA générative (Claude), réduisant le temps de développement de 25 %",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "2019 — 2021",
        description: "Direction technique des solutions mobiles pour clients majeurs dans les secteurs de la santé, des médias et du commerce de détail. Gestion des cycles complets de développement pour des marques comme Metro, Super C et Le Devoir.",
        bullets: [
          "Standardisation technique : Conception d'un framework iOS partagé pour 15+ projets clients — réduction de 50 % de la duplication de code et de l'effort de développement",
          "Livraisons d'envergure : Leadership technique des applications principales (Metro & Moi, Biodôme de Montréal, AbbVie) de la conception au déploiement",
          "Automatisation : Mise en place des pipelines CI/CD (MacStadium) pour l'ensemble du portfolio client, industrialisant les processus de mise en production",
          "Mentorat : Accompagnement des développeurs juniors et animation de sessions de partage de connaissances pour élever le niveau technique global",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "2013 — 2019",
        description: "Architecte de solutions pour engagements logiciels sur mesure couvrant backend, frontend et mobile. Direction de la découverte technique, conception d'architecture et livraison pour clients d'entreprise.",
        bullets: [
          "CAE PreStudy : Architecture de bout en bout couvrant backend Spring, frontend Angular et iOS natif pour formation des pilotes d'aviation",
          "Acosta SLTouch : Construction d'une application mobile hybride et framework pour l'analytique de détail avec BackboneJS/MarionetteJS et Node.js",
          "Skillable : Livraison d'une Progressive Web App pour le micro-apprentissage avec Angular et TypeScript",
          "Architecture de solutions : Traduction des exigences d'affaires en contrats d'API, modèles de données et stratégies d'intégration",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "2009 — 2013",
        description: "Pionnier de la mobilité urbaine (Bixi) au sein d'une équipe alliant logiciel et matériel. Construction de systèmes backend et clients mobiles pour déploiements à l'échelle des villes.",
        bullets: [
          "Transition full-stack : Démarrage dans l'équipe backend Java pour Solstice ; transition vers iOS avec expertise backend",
          "Déploiement international : Développement des applications Spotcycle et Solstice, déployées avec succès à Londres et New York",
          "Innovation AR : Pionnier du premier système de réalité augmentée pour localiser les vélos en libre-service (flux caméra + Core Location)",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end",
        dates: "2007 — 2009",
        bullets: [
          "Redressement de plateforme : Membre de l'équipe d'architecture du projet Ibiza — reconstruction de la plateforme de voyage avec Java/Spring/Hibernate après crise client",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Migration mainframe : Projet Libra — migration des systèmes legacy vers services Java ; équipe distribuée mondialement (NY, Budapest, Tokyo)",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "2003 — 2005",
        bullets: [
          "Services d'infrastructure : Construction des services de base et composants réutilisables pour produits e-commerce",
        ],
      },
    ],
  },
  {
    id: "iOS-FR",
    name: "Claude Houle",
    title: "Lead développeur iOS & Architecte mobile",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",
    location: "Montréal, QC",
    sections: {
      profile: "Profil",
      accomplishments: "Réalisations clés",
      skills: "Compétences techniques",
      experience: "Expérience professionnelle",
      education: "Formation Académique",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
      capstone: "Projet de fin d'études : Réalisation technique d'un site Internet (e-commerce) pour une PME.",
    },
    summary: "Développeur iOS avec plus de 15 ans sur les plateformes Apple et totalisant plus de 23 ans d'expérience en développement logiciel. Je me spécialise dans la création de produits mobiles fiables et évolutifs — de l'architecture de bibliothèques partagées au pilotage technique d'équipes distribuées. Passionné par la qualité du code, l'automatisation CI/CD et l'adoption de technologies émergentes comme visionOS, je transforme les visions technologiques en solutions concrètes, durables et centrées sur l'utilisateur.",
    accomplishments: [
      "Stabilisé une base de code Swift de 450 000 lignes (200 000 DAU) : Atteint un taux de sessions sans incident de 99,999 % et accéléré la cadence de mise en production de 1/semaine à 4/jour.",
      "Conçu et livré une application native visionOS sélectionnée par Apple pour l'obtention d'un Vision Pro Dev Kit ; lancée en tant que 1re solution pour travailleurs connectés sur l'App Store visionOS.",
      "Automatisé les déploiements App Store de bout en bout : Augmentation de la cadence de mise en production de 1/semaine à 4/jour et accélération de la compilation CI de 50 %.",
      "Accéléré la montée en compétence de 20 développeurs à l'international via un programme de formation sur mesure — équipe opérationnelle en 3 mois.",
      "Conçu une bibliothèque de composants iOS partagée, standardisant les pratiques et accélérant la livraison de plus de 15 projets clients.",
    ],
    skills: [
      { section: "Expertise iOS & Apple" },
      { label: "Langages", items: ["Swift (expert)", "SwiftUI", "Combine", "Objective-C (legacy)"] },
      { label: "Frameworks", items: ["visionOS", "ARKit", "Core Data", "Core Location", "MapKit", "AVFoundation"] },
      { label: "Architecture", items: ["Modular Architecture", "MVVM", "Clean Architecture", "Design Patterns", "SOLID"] },
      { label: "Concurrence", items: ["Swift Concurrency (Async/Await)", "GCD"] },
      { section: "Outillage & DevOps" },
      { label: "CI/CD", items: ["Fastlane", "GitHub Actions", "Xcode Cloud", "MacStadium", "Jenkins"] },
      { label: "Outils", items: ["Xcode", "Instruments (Profiling)", "Firebase", "Sentry", "Git"] },
      { label: "IA Générative", items: ["Claude (accélération code & tests)"] },
      { section: "Leadership & Méthodologies" },
      { label: "Leadership", items: ["Mentorat", "Code Review", "Standardisation de code", "Recrutement technique"] },
      { label: "Méthodes", items: ["Agile (Scrum/Kanban)", "TDD", "Intégration continue"] },
      { label: "Langues", items: ["Français et Anglais (parfaitement bilingue)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "2021 — Présent",
        description: "Architecte et leader technique d'une plateforme de référence pour travailleurs connectés servant quotidiennement plus de 200 000 utilisateurs actifs. J'assure l'évolution vers des architectures modernes (SwiftUI, Combine) et la maintenance du legacy (Obj-C), tout en garantissant une stabilité critique de 99,999 %.",
        bullets: [
          "Innovation visionOS : Encadrement complet du développement de la 1re solution industrielle sur l'App Store visionOS (obtention du Vision Pro Dev Kit après revue par Apple)",
          "Excellence opérationnelle : Refactorisation majeure ayant augmenté le taux de stabilité à 99,999 % et doublé la couverture de tests (de 30 % à 60 %)",
          "Performance CI/CD : Migration du pipeline sur MacStadium, accélérant la compilation de 50 % et permettant de passer de 1 à 4 mises en production quotidiennes",
          "Leadership d'équipe : Recrutement et formation sur mesure d'une équipe distribuée de 20 développeurs à l'international, opérationnelle en seulement 3 mois",
          "Intégration de l'IA : Optimisation des flux de travail via l'adoption d'outils d'IA générative (Claude), réduisant le temps de développement de 25 %",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "2019 — 2021",
        description: "Responsable de la livraison de solutions mobiles pour des clients de grande envergure dans les secteurs de la santé, des médias et du commerce de détail. J'ai dirigé l'équipe technique à travers des cycles complets de développement logiciel pour des marques comme Metro, Super C et Le Devoir.",
        bullets: [
          "Standardisation technique : Conception d'un framework iOS partagé, optimisant la livraison et la cohérence sur plus de 15 projets clients",
          "Livraisons d'envergure : Leadership technique des applications principales (Metro & Moi, Biodôme de Montréal, AbbVie) de la conception au déploiement",
          "Automatisation : Mise en place et gestion des pipelines CI/CD (MacStadium) pour l'ensemble du portfolio client, industrialisant les processus de mise en production",
          "Mentorat : Accompagnement de développeurs juniors et animation de sessions de partage de connaissances (lunch-and-learns) pour élever le niveau technique global",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Développeur iOS sénior, Architecte",
        dates: "2013 — 2019",
        description: "Architecte responsable de la conception et de l'évolution de solutions mobiles sur mesure pour des clients d'envergure. J'ai piloté l'aspect technique de projets critiques, de la définition des exigences jusqu'à la mise en marché.",
        bullets: [
          "CAE PreStudy : Architecture et développement de bout en bout d'une application native iOS destinée à la formation haute performance des pilotes d'aviation",
          "Payfare (DiDi/Lyft) : Développement des clients mobiles pour une plateforme de paiement en temps réel pour les acteurs des services de mobilité et de transport (économie collaborative)",
          "Solutions multiplateformes : Livraison d'applications variées (santé, analytique de détail, micro-apprentissage) utilisant des technologies natives et hybrides selon les besoins d'affaires",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur iOS",
        dates: "2009 — 2013",
        description: "Pionnier du développement mobile pour la mobilité urbaine (Bixi) au sein d'une équipe alliant logiciel et matériel. Travail sur des systèmes à grande échelle sous des contraintes réelles de connectivité urbaine.",
        bullets: [
          "Déploiement international : Développement des applications Spotcycle et Solstice (vélo-partage), déployées avec succès à Londres et New York",
          "Innovation en Réalité Augmentée (AR) : Conception d'un des premiers systèmes de Réalité Augmentée pour la localisation de vélos en libre-service, combinant flux vidéo et données géospatiales (Core Location)",
          "Optimisation réseau : Résolution de défis complexes de synchronisation de données en mode hors-ligne ou connectivité limitée",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end",
        dates: "2007 — 2009",
        bullets: [
          "Contribution au redressement et à la reconstruction complète de la plateforme Ibiza (Java, Spring, Hibernate) suite à des enjeux clients critiques",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Migration de systèmes mainframe legacy vers des services Java au sein d'une équipe distribuée mondialement (New York, Budapest, Tokyo)",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "2003 — 2005",
        bullets: [
          "Développement de services d'infrastructure et de composants réutilisables pour des plateformes de commerce électronique",
        ],
      },
    ],
  },
  {
    id: "Architect-FR",
    name: "Claude Houle",
    title: "Architecte logiciel & Leader technique",
    email: "claude.houle@gmail.com",
    web: "choule99.github.io/me",
    location: "Montréal, QC",
    sections: {
      profile: "Profil",
      accomplishments: "Réalisations clés",
      skills: "Compétences techniques",
      experience: "Expérience professionnelle",
      education: "Formation Académique",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
      capstone: "Projet de fin d'études : Réalisation technique d'un site Internet (e-commerce) pour une PME.",
    },
    summary: "Architecte logiciel avec plus de 23 ans d'expérience pratique dans la conception et la livraison de systèmes backend, mobiles et web. Leadership éprouvé en architecture de solutions, transformation d'équipes, mentorat et collaboration interfonctionnelle. Combine une vaste expertise technique avec une approche orientée produit pour aligner l'ingénierie avec les objectifs d'affaires.",
    accomplishments: [
      "Transformé une équipe iOS de 8 personnes en une unité hautement performante — taux sans plantage à 99,999 %, déploiements de 1/semaine à 4/jour, vitesse de compilation améliorée de 50 %",
      "Dirigé l'architecture d'une application native visionOS — 1re solution pour travailleurs connectés sur l'App Store visionOS, obtention d'un Apple Vision Pro Dev Kit",
      "Intégré 20 développeurs à l'international — conçu un programme de formation et bâti une culture collaborative à travers les fuseaux horaires, productifs en 3 mois",
      "Conçu la plateforme de formation des pilotes de CAE de bout en bout : backend Spring, frontend Angular et client iOS natif",
      "Livré la reconstruction de la plateforme Ibiza d'Accovia dans les délais et le budget après un redressement client critique — en tant que membre de l'équipe d'architecture",
    ],
    skills: [
      { section: "Architecture & Design" },
      { label: "Architecture", items: ["Solution Architecture", "API Design", "System Integration", "Data Modeling", "Distributed Systems"] },
      { label: "Patterns", items: ["Microservices", "Event-Driven", "CQRS", "Clean Architecture", "SOLID"] },
      { section: "Stack Technique" },
      { label: "Langages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Mobile/Web", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "Android SDK", "Angular"] },
      { section: "Leadership & DevOps" },
      { label: "Leadership", items: ["Mentorat d'équipe", "Code Reviews", "Découverte technique", "Onboarding"] },
      { label: "CI/CD", items: ["GitHub Actions", "Fastlane", "Jenkins", "Docker", "Kubernetes"] },
      { label: "IA Générative", items: ["Claude (accélération code & tests)"] },
      { label: "Méthodes", items: ["Agile (Scrum/Kanban)", "TDD", "Intégration continue"] },
      { label: "Langues", items: ["Français et Anglais (parfaitement bilingue)"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "2021 — Présent",
        description: "Architecte technique d'une plateforme pour travailleurs connectés servant plus de 200 000 utilisateurs actifs quotidiens. Direction de l'évolution architecturale, transformation d'équipe et alignement interfonctionnel sur une base de code de 450K lignes.",
        bullets: [
          "Leadership architectural : Introduction d'outils internes, bibliothèques réutilisables et pratiques standardisées — stabilité portée à 99,999 %",
          "Montée en compétence : Intégration de 20 développeurs à l'international avec programme de formation sur mesure et revues de code inter-fuseaux — opérationnels en 3 mois",
          "Alignement interfonctionnel : Création de ponts entre ingénierie, gestion de produit et design UX ; établissement de flux de collaboration alignant solutions techniques et objectifs d'affaires",
          "Architecture CI/CD : Automatisation complète des déploiements App Store ; cadence portée de 1/semaine à 4/jour, compilation accélérée de 50 %",
          "Qualité logicielle : Couverture de tests portée de 30 % à 60 % en quatre ans via initiative incrémentale parallèle à la modernisation architecturale",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "2019 — 2021",
        description: "Direction de l'architecture technique et du développement d'équipe sur plus de 15 projets clients dans les secteurs de la santé, des médias et du commerce de détail.",
        bullets: [
          "Standardisation technique : Conception d'un framework iOS partagé pour 15+ projets clients — réduction de 50 % de la duplication et de l'effort de développement",
          "Amélioration des processus : Identification des lacunes de communication ; établissement de processus et outils améliorant l'alignement avec produit et UX",
          "Développement d'équipe : Investissement dans le mentorat et sessions de partage de connaissances, développant les juniors en contributeurs autonomes",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "2013 — 2019",
        description: "Architecte de solutions responsable de la conception initiale et de l'évolution des architectures selon les exigences clients d'entreprise. Direction de la découverte technique, analyse des exigences et livraison.",
        bullets: [
          "Architecture de solutions : Direction de l'analyse des exigences, découverte technique ; production des contrats d'API, modèles de données et stratégies d'intégration",
          "CAE PreStudy : Conception de l'architecture de bout en bout — backend Spring, frontend Angular et client iOS pour formation des pilotes d'aviation",
          "Artéfacts d'architecture : Production de documentation couvrant sécurité, approches de mise à l'échelle et topologies de déploiement",
          "Standards d'ingénierie : Définition des standards et mentorat des développeurs sur plusieurs équipes, élevant la qualité globale du code",
          "Acosta SLTouch : Architecture d'un framework mobile hybride pour l'analytique de détail avec BackboneJS et Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "2009 — 2013",
        description: "Pionnier de l'architecture pour la mobilité urbaine (Bixi) au sein d'une équipe alliant logiciel et matériel. Conception de systèmes pour déploiements à l'échelle des villes sous contraintes réelles.",
        bullets: [
          "Architecture système : Démarrage dans l'équipe backend Java ; transition vers iOS avec expertise backend créant un pont entre les couches d'architecture",
          "Solutions de scalabilité : Conception de solutions pour les contraintes de connectivité et performance des déploiements de Londres et New York",
          "Innovation AR : Pionnier du premier système de réalité augmentée pour localiser les vélos (flux caméra + Core Location)",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end — Équipe d'architecture",
        dates: "2007 — 2009",
        bullets: [
          "Architecture de plateforme : Reconstruction de la plateforme de voyage Ibiza avec Java/Spring/Hibernate après redressement client — optimisation performance et orchestration de services",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java (Morgan Stanley)",
        dates: "2005 — 2007",
        bullets: [
          "Architecture de migration : Projet Libra — migration mainframe vers Java sous exigences de conformité financière ; équipe distribuée mondialement",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "2003 — 2005",
        bullets: [
          "Architecture d'infrastructure : Construction des services de base et composants réutilisables pour produits e-commerce",
        ],
      },
    ],
  },
];

// ── Generate PDFs ──

const templatePath = join(__dirname, 'templates', 'cv.typ');
const outputDir = join(ROOT, 'public', 'files');

for (const variant of variants) {
  const dataFile = join(__dirname, 'templates', `cv-${variant.id}.json`);
  const outputFile = join(outputDir, `CV-${variant.id}.pdf`);

  const data = { ...variant };
  delete data.id;
  writeFileSync(dataFile, JSON.stringify(data, null, 2));

  console.log(`Generating CV-${variant.id}.pdf...`);
  try {
    execSync(`typst compile --root "${ROOT}" --input data-file="cv-${variant.id}.json" "${templatePath}" "${outputFile}"`, {
      stdio: 'inherit',
    });
    console.log(`  ✓ ${outputFile}`);
  } catch (err) {
    console.error(`  ✗ Failed to generate CV-${variant.id}.pdf`);
    process.exit(1);
  }
}

console.log(`\nDone! Generated ${variants.length} CV variants.`);
