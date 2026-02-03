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
    summary: "Software developer with 21+ years of experience across backend systems, mobile platforms, and web applications. Proven ability to architect and deliver production software spanning the full stack — from Spring Boot backends and Angular frontends to native iOS and Android clients — with a focus on quality, mentorship, and continuous improvement.",
    accomplishments: [
      "Led a production iOS app serving 200,000+ DAU with 99.999% crash-free rate across a 450K-line Swift codebase",
      "Architected full-stack solutions at Spiria spanning Spring backends, Angular frontends, and native iOS — including CAE's aviation pilot training platform",
      "Integrated CI/CD pipeline improving build speeds by 50% and increasing deployments from 1/week to 4/day through full App Store automation",
      "Doubled test coverage (30% → 60%) over four years through disciplined, incremental growth alongside codebase modernization",
    ],
    skills: [
      { label: "Languages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Frontend", items: ["Angular", "SwiftUI", "UIKit"] },
      { label: "Mobile", items: ["iOS SDK", "visionOS SDK", "Android SDK", "Combine"] },
      { label: "DevOps", items: ["CI/CD Pipelines", "GitHub Actions", "Fastlane", "Sentry", "LaunchDarkly"] },
      { label: "Testing", items: ["JUnit", "Mockito", "XCTest", "Swift Testing", "Jest"] },
      { label: "Practices", items: ["REST API Design", "MVVM", "SOLID", "Software Architecture", "Claude Code"] },
      { label: "Additional", items: ["Objective-C", "JavaScript", "Oracle", "DB2"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Present",
        description: "Connected worker platform with 200,000+ DAU helping manufacturers improve productivity and knowledge sharing on the factory floor.",
        bullets: [
          "Inherited a fragile 450K-line codebase with frequent crashes; introduced internal tools, reusable libraries, and standardized practices that raised the crash-free rate to 99.999%",
          "Faced slow, manual releases; built a CI/CD pipeline on MacStadium that improved build speeds by 50% and increased deployments from 1/week to 4/day",
          "Needed to scale the team fast; onboarded 20 Sri Lankan developers with a custom training curriculum, making them productive within 3 months",
          "Tackled low test coverage (30%); drove incremental testing alongside refactors, reaching 60% coverage over four years",
          "Adopted AI-assisted tools (Claude, Warp.dev) into the iOS team workflow, reducing coding time by 10%",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "Nov 2019 — Oct 2021",
        description: "Mobile development studio developing and maintaining applications for clients across retail, healthcare, media, and mobility.",
        bullets: [
          "Managed 15+ concurrent client projects with duplicated effort across teams; designed a shared iOS framework of documented, unit-tested components that reduced duplication and improved time-to-market",
          "Led the iOS team through full project lifecycles — planning, development, code review, and release — for Metro & Moi, Super C, FoodBasics, AbbVie, Le Devoir, Biodome de Montreal, Christies, TaxiCoop, and others",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "Nov 2013 — Nov 2019",
        description: "Custom software agency — led solution architecture across multi-platform client engagements.",
        bullets: [
          "Owned solution architecture for client engagements; translated business requirements into API contracts, data models, and integration strategies that guided development teams",
          "CAE PreStudy: designed end-to-end architecture spanning Spring backend, Angular frontend, and native iOS for an aviation pilot training platform",
          "Acosta SLTouch: built a hybrid mobile app and framework for retail analytics using BackboneJS/MarionetteJS and Node.js",
          "Skillable: delivered a Progressive Web App for micro-learning using Angular and TypeScript",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "Oct 2009 — Oct 2013",
        description: "Software and hardware for bike-sharing and automated parking systems, including solar-powered POS stations and backend platforms.",
        bullets: [
          "Started on the backend Java team for the Solstice bike-sharing suite; transitioned to iOS, bringing backend expertise that bridged system layers",
          "Developed the Spotcycle and Solstice iOS apps, supporting city-wide deployments in London and New York City",
          "Pioneered the first-ever Augmented Reality bike-sharing finder by combining live camera feed with Core Location data",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Joined the core Architecture Team on the Ibiza Project after a critical client recovery; helped rebuild the platform from the ground up with Java, Spring, and Hibernate, delivering on time and on budget",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Assigned to Morgan Stanley's Libra project to migrate legacy mainframe systems to Java services on Linux with DB2; worked within a globally distributed team across New York, Budapest, Tokyo, and Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "May 2003 — Oct 2005",
        bullets: [
          "Joined the Software Infrastructure team; built core services, reusable components, and data access layers adopted by multiple e-commerce product teams",
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
    summary: "iOS developer with 15+ years on Apple platforms and 21+ years total in software development. From stabilizing a 450,000-line Swift codebase at 99.999% crash-free to shipping a day-one visionOS App Store launch, I build mobile products that deliver measurable gains in reliability, release cadence, and user adoption.",
    accomplishments: [
      "Stabilized a 450,000-line Swift codebase serving 200,000+ DAU — drove crash-free rate to 99.999% and release cadence from 1/week to 4/day",
      "Built and shipped a visionOS-native app; secured a Vision Pro Dev Kit for Poka following an Apple review — launched as the 1st Connected Worker Solution on the visionOS App Store",
      "Automated App Store deployments end-to-end, increasing release cadence from 1/week to 4/day and CI build speeds by 50%",
      "Onboarded 20 Sri Lankan developers with a custom training curriculum — team productive within 3 months",
      "Built a shared iOS component library at Appcom that standardized patterns across 15+ client projects and accelerated delivery",
    ],
    skills: [
      { label: "Languages", items: ["Swift", "Kotlin", "Java", "TypeScript", "SQL"] },
      { label: "Apple", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "UIKit", "Combine", "Core Data", "SwiftData", "Core Location", "AVFoundation"] },
      { label: "Testing", items: ["XCTest", "XCUITest", "Swift Testing", "Snapshot Testing"] },
      { label: "DevOps", items: ["Fastlane", "GitHub Actions", "Swift Package Manager", "TestFlight", "Sentry", "LaunchDarkly"] },
      { label: "Practices", items: ["MVVM", "SOLID", "REST API Design", "Mobile UX Design", "Software Architecture", "Claude Code"] },
      { label: "Additional", items: ["Objective-C", "RxSwift", "watchOS SDK", "macOS SDK", "Instruments"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Present",
        description: "Connected worker platform — 200,000+ DAU, 450,000 lines of Swift + 55,000 lines legacy Obj-C, 99.999% crash-free.",
        bullets: [
          "Built and shipped a visionOS-native app; presented it to Apple, secured a Vision Pro Dev Kit for Poka, and launched the 1st Connected Worker Solution on the visionOS App Store",
          "Inherited a fragile codebase with frequent crashes; implemented refactoring practices and quality processes that raised the crash-free rate to 99.999%",
          "Faced slow, manual releases; built a CI/CD pipeline on MacStadium that improved build speeds by 50% and increased deployments from 1/week to 4/day",
          "Tackled low test coverage (30%); led an incremental testing initiative alongside refactors to SwiftUI, Combine, and modern architectures, reaching 60% over four years",
          "Needed to scale the team fast; onboarded 20 Sri Lankan developers with a custom training curriculum, making them productive within 3 months",
          "Adopted AI-assisted tools (Claude, Warp.dev) into the iOS team workflow, reducing coding time by 10%",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "Nov 2019 — Oct 2021",
        description: "Mobile development studio — led iOS team across 15+ client projects in retail, healthcare, media, and mobility.",
        bullets: [
          "Found duplicated effort across 15+ client projects; designed a shared iOS framework of documented, unit-tested components that standardized patterns and accelerated delivery",
          "Led the mobile team through full project lifecycles for Metro & Moi, Super C, FoodBasics, AbbVie, Le Devoir, Biodome de Montreal, Christies, TaxiCoop, and others",
          "Owned CI/CD pipelines on MacStadium; automated App Store deployments and release processes across all client apps",
          "Mentored junior developers through 1:1 sessions and organized lunch-and-learns to foster continuous learning",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Senior iOS Developer, Architect",
        dates: "Nov 2013 — Nov 2019",
        description: "Custom software agency — responsible for creating initial architecture and evolving it with client requirements.",
        bullets: [
          "CAE PreStudy: took the project from requirements through delivery, building a native iOS app for aviation pilot training end-to-end",
          "Payfare (DiDi/Lyft): developed iOS and Android clients for an early payment platform serving gig economy drivers",
          "BookJane: built an iOS app for healthcare workforce management",
          "Acosta SLTouch, Skillable: delivered hybrid and PWA solutions across the full stack for retail analytics and micro-learning",
        ],
      },
      {
        company: "8D Technologies",
        title: "iOS Developer",
        dates: "Oct 2009 — Oct 2013",
        description: "Software and hardware for bike-sharing systems — pioneering mobile development for urban mobility.",
        bullets: [
          "Developed the Spotcycle and Solstice iOS apps for bike-sharing, supporting city-wide deployments in London and New York City",
          "Pioneered the first-ever Augmented Reality bike-sharing finder by combining live camera feed with Core Location data",
          "Solved for unreliable connectivity across entire cities — early mobile engineering under real-world constraints",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Joined the Architecture Team on the Ibiza Project after a critical client recovery; helped rebuild the platform from the ground up with Java, Spring, and Hibernate, delivering on time and on budget",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Assigned to Morgan Stanley's Libra project to migrate legacy mainframe systems to Java services; worked within a globally distributed team across New York, Budapest, Tokyo, and Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "May 2003 — Oct 2005",
        bullets: [
          "Joined the Software Infrastructure team; built core services and reusable components adopted by multiple e-commerce product teams",
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
    summary: "Software architect with 21+ years of hands-on experience designing and delivering systems across backend, mobile, and web. Proven leadership in solution architecture, team transformation, mentorship, and cross-functional collaboration. Combines deep technical breadth with a product-minded approach to align engineering with business outcomes.",
    accomplishments: [
      "Transformed an 8-person iOS team into a high-performing unit — crash-free rate to 99.999%, deployments from 1/week to 4/day, build speeds improved 50%",
      "Onboarded and integrated 20 Sri Lankan developers — designed training curriculum and built collaborative culture across time zones, productive within 3 months",
      "Architected CAE's pilot training platform end-to-end: Spring backend, Angular frontend, and native iOS client",
      "Delivered the Accovia Ibiza platform rebuild on time and on budget after a critical client recovery — as a member of the core Architecture Team",
    ],
    skills: [
      { label: "Architecture", items: ["Solution Architecture", "API Design", "System Integration", "Data Modeling", "Distributed Systems"] },
      { label: "Leadership", items: ["Team Mentorship", "Code Reviews", "Technical Discovery", "Cross-functional Collaboration", "Onboarding"] },
      { label: "Languages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Mobile/Web", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "UIKit", "Android SDK", "Angular"] },
      { label: "DevOps", items: ["CI/CD Pipelines", "GitHub Actions", "Fastlane", "Sentry", "LaunchDarkly", "Claude Code"] },
      { label: "Additional", items: ["Objective-C", "Oracle", "DB2"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Present",
        description: "Connected worker platform — 200,000+ DAU, 450,000-line Swift codebase, 99.999% crash-free.",
        bullets: [
          "Inherited a fragile codebase with frequent crashes; introduced internal tools, reusable libraries, and standardized practices that raised the crash-free rate to 99.999%",
          "Needed to scale the team fast; onboarded 20 Sri Lankan developers with a custom training curriculum and cross-timezone code reviews, making them productive within 3 months",
          "Bridged gaps between engineering, Product Management, and UX Design; established collaboration workflows that aligned technical solutions with business goals",
          "Faced slow, manual releases; automated App Store deployments end-to-end, increasing cadence from 1/week to 4/day and improving CI build speeds by 50%",
          "Tackled low test coverage (30%); drove incremental testing alongside architectural modernization, reaching 60% over four years",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "Nov 2019 — Oct 2021",
        description: "Mobile development studio — led iOS team across 15+ client projects.",
        bullets: [
          "Found duplicated effort across 15+ client projects; designed a shared iOS framework that standardized patterns, reduced duplication, and improved time-to-market",
          "Identified communication gaps between teams; established processes and collaboration tools that improved alignment with product management and UX design",
          "Invested in team growth through mentorship and knowledge-sharing sessions, developing junior engineers into independent contributors",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "Nov 2013 — Nov 2019",
        description: "Custom software agency — responsible for initial architecture and evolving it with client requirements.",
        bullets: [
          "Owned solution architecture for client engagements; led requirements analysis, technical discovery, and produced API contracts, data models, and integration strategies that guided development teams",
          "CAE PreStudy: designed end-to-end architecture spanning Spring backend, Angular frontend, and iOS client for an aviation pilot training platform",
          "Produced architecture artifacts covering security considerations, scalability approaches, and deployment topologies for each engagement",
          "Defined engineering standards and mentored developers across multiple project teams, raising overall code quality",
          "Acosta SLTouch: architected a hybrid mobile framework for retail analytics using BackboneJS and Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "Oct 2009 — Oct 2013",
        description: "Software and hardware for bike-sharing and automated parking — pioneering urban mobility solutions.",
        bullets: [
          "Started on the backend Java team for the Solstice bike-sharing suite; transitioned to iOS, bringing backend expertise that bridged system architecture across layers",
          "Faced challenging connectivity and performance constraints; engineered solutions for city-wide deployments in London and New York City",
          "Pioneered the first-ever Augmented Reality bike-sharing finder by combining live camera feed with Core Location data",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer — Architecture Team",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Joined the core Architecture Team on the Ibiza Project after a critical client recovery; helped rebuild the platform from the ground up with Java, Spring, and Hibernate, delivering on time and on budget",
          "Contributed to performance optimization and service orchestration across the backend layer",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Assigned to the Libra project to migrate legacy mainframe systems to Java services on Linux within stringent financial compliance requirements; coordinated within a globally distributed team across New York, Budapest, Tokyo, and Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer",
        dates: "May 2003 — Oct 2005",
        bullets: [
          "Joined the Software Infrastructure team; built core services and reusable components adopted by multiple e-commerce product teams",
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
    summary: "Backend developer with 21+ years of experience building enterprise Java systems, microservices architectures, and high-throughput data platforms. Deep expertise in Spring ecosystem, database optimization, and distributed systems. Proven track record delivering mission-critical backends for financial services, travel, and manufacturing — with a focus on reliability, scalability, and team leadership.",
    accomplishments: [
      "Architected and delivered the Ibiza travel platform rebuild at Accovia — Java/Spring/Hibernate backend serving major travel operators, delivered on time after critical client recovery",
      "Built backend services for 8D Technologies' Solstice platform — Java system processing real-time events from Bixi bike-sharing kiosks deployed across cities worldwide",
      "Designed backend architecture for CAE's pilot training platform at Spiria — Spring Boot APIs, data modeling, and integration strategies supporting aviation compliance requirements",
      "Built core infrastructure services at Mediagrif adopted across multiple e-commerce product teams — reusable data access layers, service components, and API patterns",
    ],
    skills: [
      { label: "Languages", items: ["Java", "Kotlin", "SQL", "TypeScript", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Spring Security", "Hibernate/JPA", "REST APIs", "Microservices", "Node.js"] },
      { label: "Data", items: ["PostgreSQL", "MySQL", "Oracle", "DB2", "Redis", "ActiveMQ"] },
      { label: "DevOps", items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitLab CI", "GitHub Actions"] },
      { label: "Architecture", items: ["Domain-Driven Design", "CQRS", "Event Sourcing", "API Design", "System Integration"] },
      { label: "Testing", items: ["JUnit", "Mockito", "Integration Testing", "TDD", "Contract Testing"] },
      { label: "Practices", items: ["SOLID", "Clean Architecture", "Code Reviews", "Technical Documentation", "Claude Code"] },
      { label: "Additional", items: ["Swift", "Angular", "iOS SDK", "z/OS", "Mainframe Migration"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architect, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Present",
        description: "Connected worker platform with 200,000+ DAU — architecting backend integrations and API contracts for mobile clients.",
        bullets: [
          "Designed API contracts and data synchronization strategies between mobile clients and backend services, ensuring reliability at scale",
          "Established engineering standards and code review practices across the development team, improving code quality and consistency",
          "Collaborated with backend teams on service architecture decisions, bringing mobile perspective to API design discussions",
          "Onboarded 20 developers with a custom training curriculum covering architecture patterns and best practices, productive within 3 months",
        ],
      },
      {
        company: "Appcom",
        title: "Lead Mobile Developer",
        dates: "Nov 2019 — Oct 2021",
        description: "Mobile development studio — led technical architecture and API integration across 15+ client projects.",
        bullets: [
          "Designed shared component libraries and architectural patterns adopted across multiple project teams",
          "Led API integration efforts with various backend systems, establishing patterns for error handling, caching, and offline support",
          "Mentored developers through code reviews and knowledge-sharing sessions on architecture and design patterns",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Software Architect, Senior Developer",
        dates: "Nov 2013 — Nov 2019",
        description: "Custom software agency — led solution architecture for enterprise client engagements.",
        bullets: [
          "Owned solution architecture for client engagements; translated business requirements into API contracts, data models, and integration strategies that guided development teams",
          "CAE PreStudy: designed backend architecture with Spring Boot, RESTful APIs, and data persistence layer for an aviation pilot training platform",
          "Acosta SLTouch: architected Node.js backend services and data aggregation pipelines for retail analytics platform",
          "Skillable: delivered backend services for a Progressive Web App micro-learning platform using TypeScript and Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Back-End Java Developer → iOS Developer",
        dates: "Oct 2009 — Oct 2013",
        description: "Software and hardware for bike-sharing and automated parking — backend systems supporting city-wide deployments.",
        bullets: [
          "Built backend Java services for the Solstice bike-sharing suite — transaction processing, station management, and real-time availability APIs",
          "Designed data pipelines handling high-volume telemetry from solar-powered POS stations across London and New York City deployments",
          "Transitioned to iOS development, bringing backend architecture expertise that bridged system layers and improved API design",
        ],
      },
      {
        company: "Accovia",
        title: "Back-End Java Developer — Architecture Team",
        dates: "Oct 2007 — Oct 2009",
        description: "Travel industry platform — core member of the architecture team on a critical platform rebuild.",
        bullets: [
          "Joined the core Architecture Team on the Ibiza Project after a critical client recovery; helped rebuild the travel platform from the ground up with Java, Spring, and Hibernate",
          "Designed service layer architecture, data access patterns, and transaction management strategies for high-throughput booking operations",
          "Delivered the platform on time and on budget, restoring client confidence and establishing foundation for future growth",
        ],
      },
      {
        company: "Compuware Montreal",
        title: "Java Consultant — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        description: "Enterprise Java consultant — assigned to a major financial services modernization project.",
        bullets: [
          "Assigned to Morgan Stanley's Libra project to migrate legacy mainframe systems to Java services on Linux with DB2",
          "Developed Java services within stringent financial compliance requirements and enterprise security standards",
          "Coordinated within a globally distributed team across New York, Budapest, Tokyo, and Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Java Developer — Infrastructure Team",
        dates: "May 2003 — Oct 2005",
        description: "E-commerce platform company — member of the core infrastructure team.",
        bullets: [
          "Built core backend services, reusable data access layers, and service components adopted by multiple e-commerce product teams",
          "Designed and implemented shared infrastructure patterns that standardized database access and transaction handling across the organization",
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
      education: "Formation",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "Sept 2000 — Mai 2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
    },
    summary: "Développeur backend avec plus de 21 ans d'expérience dans la construction de systèmes Java d'entreprise, d'architectures microservices et de plateformes de données à haut débit. Expertise approfondie de l'écosystème Spring, de l'optimisation de bases de données et des systèmes distribués. Bilan éprouvé dans la livraison de backends critiques pour les services financiers, le voyage et la fabrication — avec un accent sur la fiabilité, la mise à l'échelle et le leadership d'équipe.",
    accomplishments: [
      "Conçu et livré la reconstruction de la plateforme de voyage Ibiza chez Accovia — backend Java/Spring/Hibernate servant les principaux opérateurs de voyage, livré à temps après un redressement client critique",
      "Construit les services backend de la plateforme Solstice de 8D Technologies — système Java traitant les événements en temps réel des kiosques de vélo-partage Bixi déployés dans des villes à travers le monde",
      "Conçu l'architecture backend de la plateforme de formation des pilotes de CAE chez Spiria — APIs Spring Boot, modélisation de données et stratégies d'intégration supportant les exigences de conformité aéronautique",
      "Construit les services d'infrastructure de base chez Mediagrif adoptés par plusieurs équipes de produits e-commerce — couches d'accès aux données réutilisables, composants de service et patterns d'API",
    ],
    skills: [
      { label: "Langages", items: ["Java", "Kotlin", "SQL", "TypeScript", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Spring Security", "Hibernate/JPA", "REST APIs", "Microservices", "Node.js"] },
      { label: "Données", items: ["PostgreSQL", "MySQL", "Oracle", "DB2", "Redis", "ActiveMQ"] },
      { label: "DevOps", items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Jenkins", "GitLab CI", "GitHub Actions"] },
      { label: "Architecture", items: ["Domain-Driven Design", "CQRS", "Event Sourcing", "API Design", "System Integration"] },
      { label: "Tests", items: ["JUnit", "Mockito", "Integration Testing", "TDD", "Contract Testing"] },
      { label: "Pratiques", items: ["SOLID", "Clean Architecture", "Code Reviews", "Technical Documentation", "Claude Code"] },
      { label: "Additionnel", items: ["Swift", "Angular", "iOS SDK", "z/OS", "Migration Mainframe"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Présent",
        description: "Plateforme pour travailleurs connectés avec plus de 200 000 utilisateurs actifs quotidiens — conception des intégrations backend et des contrats d'API pour les clients mobiles.",
        bullets: [
          "Conçu les contrats d'API et les stratégies de synchronisation des données entre les clients mobiles et les services backend, assurant la fiabilité à grande échelle",
          "Établi les standards d'ingénierie et les pratiques de revue de code au sein de l'équipe de développement, améliorant la qualité et la cohérence du code",
          "Collaboré avec les équipes backend sur les décisions d'architecture de services, apportant la perspective mobile aux discussions de conception d'API",
          "Intégré 20 développeurs avec un programme de formation sur mesure couvrant les patterns d'architecture et les meilleures pratiques, productifs en 3 mois",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "Nov 2019 — Oct 2021",
        description: "Studio de développement mobile — direction de l'architecture technique et de l'intégration API sur plus de 15 projets clients.",
        bullets: [
          "Conçu des bibliothèques de composants partagés et des patterns architecturaux adoptés par plusieurs équipes de projet",
          "Dirigé les efforts d'intégration API avec divers systèmes backend, établissant des patterns pour la gestion des erreurs, la mise en cache et le support hors ligne",
          "Mentoré les développeurs par des revues de code et des sessions de partage de connaissances sur l'architecture et les patterns de conception",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "Nov 2013 — Nov 2019",
        description: "Agence de logiciels sur mesure — direction de l'architecture de solutions pour des engagements clients d'entreprise.",
        bullets: [
          "Responsable de l'architecture de solutions pour les engagements clients ; traduit les exigences d'affaires en contrats d'API, modèles de données et stratégies d'intégration guidant les équipes de développement",
          "CAE PreStudy : conçu l'architecture backend avec Spring Boot, APIs RESTful et couche de persistance des données pour une plateforme de formation des pilotes d'aviation",
          "Acosta SLTouch : conçu l'architecture des services backend Node.js et des pipelines d'agrégation de données pour une plateforme d'analytique de vente au détail",
          "Skillable : livré les services backend pour une plateforme de micro-apprentissage Progressive Web App avec TypeScript et Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "Oct 2009 — Oct 2013",
        description: "Logiciels et matériel pour le vélo-partage et le stationnement automatisé — systèmes backend supportant des déploiements à l'échelle de la ville.",
        bullets: [
          "Construit les services backend Java pour la suite de vélo-partage Solstice — traitement des transactions, gestion des stations et APIs de disponibilité en temps réel",
          "Conçu les pipelines de données gérant la télémétrie à haut volume des stations de point de vente solaires à travers les déploiements de Londres et New York",
          "Transitionné vers le développement iOS, apportant une expertise en architecture backend qui a fait le pont entre les couches du système et amélioré la conception des API",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end — Équipe d'architecture",
        dates: "Oct 2007 — Oct 2009",
        description: "Plateforme de l'industrie du voyage — membre clé de l'équipe d'architecture sur une reconstruction critique de plateforme.",
        bullets: [
          "Intégré l'équipe d'architecture du projet Ibiza après un redressement client critique ; contribué à reconstruire la plateforme de voyage de zéro avec Java, Spring et Hibernate",
          "Conçu l'architecture de la couche de services, les patterns d'accès aux données et les stratégies de gestion des transactions pour les opérations de réservation à haut débit",
          "Livré la plateforme dans les délais et le budget, restaurant la confiance du client et établissant les fondations pour la croissance future",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        description: "Consultant Java d'entreprise — affecté à un projet majeur de modernisation des services financiers.",
        bullets: [
          "Affecté au projet Libra de Morgan Stanley pour migrer des systèmes mainframe legacy vers des services Java sur Linux avec DB2",
          "Développé des services Java dans le respect d'exigences strictes de conformité financière et de standards de sécurité d'entreprise",
          "Coordonné au sein d'une équipe distribuée à travers New York, Budapest, Tokyo et Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java — Équipe d'infrastructure",
        dates: "Mai 2003 — Oct 2005",
        description: "Entreprise de plateforme e-commerce — membre de l'équipe d'infrastructure de base.",
        bullets: [
          "Construit les services backend de base, les couches d'accès aux données réutilisables et les composants de service adoptés par plusieurs équipes de produits e-commerce",
          "Conçu et implémenté des patterns d'infrastructure partagés qui ont standardisé l'accès aux bases de données et la gestion des transactions à travers l'organisation",
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
      education: "Formation",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "Sept 2000 — Mai 2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
    },
    summary: "Développeur logiciel avec plus de 21 ans d'expérience en systèmes backend, plateformes mobiles et applications web. Capacité éprouvée à concevoir et livrer des logiciels de production couvrant l'ensemble de la pile technologique — des backends Spring Boot et frontends Angular aux clients natifs iOS et Android — avec un accent sur la qualité, le mentorat et l'amélioration continue.",
    accomplishments: [
      "Dirigé une application iOS en production servant plus de 200 000 utilisateurs actifs quotidiens avec un taux sans plantage de 99,999 % sur une base de code Swift de 450K lignes",
      "Conçu des solutions full-stack chez Spiria couvrant des backends Spring, des frontends Angular et du iOS natif — incluant la plateforme de formation des pilotes d'aviation de CAE",
      "Intégré un pipeline CI/CD améliorant la vitesse de compilation de 50 % et augmentant les déploiements de 1/semaine à 4/jour grâce à l'automatisation complète de l'App Store",
      "Doublé la couverture de tests (30 % → 60 %) sur quatre ans grâce à une croissance disciplinée et incrémentale parallèlement à la modernisation de la base de code",
    ],
    skills: [
      { label: "Langages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Frontend", items: ["Angular", "SwiftUI", "UIKit"] },
      { label: "Mobile", items: ["iOS SDK", "visionOS SDK", "Android SDK", "Combine"] },
      { label: "DevOps", items: ["CI/CD Pipelines", "GitHub Actions", "Fastlane", "Sentry", "LaunchDarkly"] },
      { label: "Tests", items: ["JUnit", "Mockito", "XCTest", "Swift Testing", "Jest"] },
      { label: "Pratiques", items: ["REST API Design", "MVVM", "SOLID", "Software Architecture", "Claude Code"] },
      { label: "Additionnel", items: ["Objective-C", "JavaScript", "Oracle", "DB2"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Présent",
        description: "Plateforme pour travailleurs connectés avec plus de 200 000 utilisateurs actifs quotidiens aidant les manufacturiers à améliorer la productivité et le partage des connaissances en usine.",
        bullets: [
          "Hérité d'une base de code fragile de 450K lignes avec des plantages fréquents ; introduit des outils internes, des bibliothèques réutilisables et des pratiques standardisées qui ont porté le taux sans plantage à 99,999 %",
          "Face à des mises en production lentes et manuelles ; construit un pipeline CI/CD sur MacStadium qui a amélioré la vitesse de compilation de 50 % et augmenté les déploiements de 1/semaine à 4/jour",
          "Besoin de faire croître l'équipe rapidement ; intégré 20 développeurs sri-lankais avec un programme de formation sur mesure, les rendant productifs en 3 mois",
          "Confronté à une faible couverture de tests (30 %) ; mené une initiative de tests incrémentale parallèlement aux refactorisations, atteignant 60 % en quatre ans",
          "Adopté des outils assistés par IA (Claude, Warp.dev) dans le flux de travail de l'équipe iOS, réduisant le temps de développement de 10 %",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "Nov 2019 — Oct 2021",
        description: "Studio de développement mobile développant et maintenant des applications pour des clients dans le commerce de détail, la santé, les médias et la mobilité.",
        bullets: [
          "Géré plus de 15 projets clients simultanés avec des efforts dupliqués entre les équipes ; conçu un framework iOS partagé de composants documentés et testés qui a réduit la duplication et amélioré le délai de mise en marché",
          "Dirigé l'équipe iOS à travers des cycles de vie complets — planification, développement, revue de code et mise en production — pour Metro & Moi, Super C, FoodBasics, AbbVie, Le Devoir, Biodôme de Montréal, Christies, TaxiCoop et autres",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "Nov 2013 — Nov 2019",
        description: "Agence de logiciels sur mesure — direction de l'architecture de solutions pour des engagements clients multi-plateformes.",
        bullets: [
          "Responsable de l'architecture de solutions pour les engagements clients ; traduit les exigences d'affaires en contrats d'API, modèles de données et stratégies d'intégration guidant les équipes de développement",
          "CAE PreStudy : conçu l'architecture de bout en bout couvrant un backend Spring, un frontend Angular et une application iOS native pour une plateforme de formation des pilotes d'aviation",
          "Acosta SLTouch : construit une application mobile hybride et un framework pour l'analytique de vente au détail avec BackboneJS/MarionetteJS et Node.js",
          "Skillable : livré une Progressive Web App pour le micro-apprentissage avec Angular et TypeScript",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "Oct 2009 — Oct 2013",
        description: "Logiciels et matériel pour le vélo-partage et les systèmes de stationnement automatisés, incluant des stations de point de vente solaires et des plateformes backend.",
        bullets: [
          "Commencé dans l'équipe backend Java pour la suite de vélo-partage Solstice ; transitionné vers iOS, apportant une expertise backend qui a fait le pont entre les couches du système",
          "Développé les applications iOS Spotcycle et Solstice, supportant des déploiements à l'échelle de la ville à Londres et New York",
          "Pionnier du tout premier système de réalité augmentée pour trouver des vélos en libre-service en combinant le flux caméra en direct avec les données Core Location",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Intégré l'équipe d'architecture du projet Ibiza après un redressement client critique ; contribué à reconstruire la plateforme de zéro avec Java, Spring et Hibernate, livrant dans les délais et le budget",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Affecté au projet Libra de Morgan Stanley pour migrer des systèmes mainframe legacy vers des services Java sur Linux avec DB2 ; travaillé au sein d'une équipe distribuée à travers New York, Budapest, Tokyo et Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "Mai 2003 — Oct 2005",
        bullets: [
          "Intégré l'équipe d'infrastructure logicielle ; construit des services de base, des composants réutilisables et des couches d'accès aux données adoptés par plusieurs équipes de produits e-commerce",
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
      education: "Formation",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "Sept 2000 — Mai 2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
    },
    summary: "Développeur iOS avec plus de 15 ans sur les plateformes Apple et plus de 21 ans d'expérience totale en développement logiciel. De la stabilisation d'une base de code Swift de 450 000 lignes à 99,999 % sans plantage au lancement dès le jour un sur l'App Store visionOS, je construis des produits mobiles qui livrent des gains mesurables en fiabilité, cadence de publication et adoption utilisateur.",
    accomplishments: [
      "Stabilisé une base de code Swift de 450 000 lignes servant plus de 200 000 utilisateurs actifs quotidiens — porté le taux sans plantage à 99,999 % et la cadence de publication de 1/semaine à 4/jour",
      "Construit et livré une application native visionOS ; obtenu un Vision Pro Dev Kit pour Poka suite à une revue Apple — lancée comme la 1re solution pour travailleurs connectés sur l'App Store visionOS",
      "Automatisé les déploiements App Store de bout en bout, augmentant la cadence de publication de 1/semaine à 4/jour et la vitesse de compilation CI de 50 %",
      "Intégré 20 développeurs sri-lankais avec un programme de formation sur mesure — équipe productive en 3 mois",
      "Construit une bibliothèque de composants iOS partagée chez Appcom qui a standardisé les pratiques sur plus de 15 projets clients et accéléré les livraisons",
    ],
    skills: [
      { label: "Langages", items: ["Swift", "Kotlin", "Java", "TypeScript", "SQL"] },
      { label: "Apple", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "UIKit", "Combine", "Core Data", "SwiftData", "Core Location", "AVFoundation"] },
      { label: "Tests", items: ["XCTest", "XCUITest", "Swift Testing", "Snapshot Testing"] },
      { label: "DevOps", items: ["Fastlane", "GitHub Actions", "Swift Package Manager", "TestFlight", "Sentry", "LaunchDarkly"] },
      { label: "Pratiques", items: ["MVVM", "SOLID", "REST API Design", "Mobile UX Design", "Software Architecture", "Claude Code"] },
      { label: "Additionnel", items: ["Objective-C", "RxSwift", "watchOS SDK", "macOS SDK", "Instruments"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Présent",
        description: "Plateforme pour travailleurs connectés — plus de 200 000 utilisateurs actifs quotidiens, 450 000 lignes de Swift + 55 000 lignes legacy Obj-C, 99,999 % sans plantage.",
        bullets: [
          "Construit et livré une application native visionOS ; présentée à Apple, obtenu un Vision Pro Dev Kit pour Poka, et lancé la 1re solution pour travailleurs connectés sur l'App Store visionOS",
          "Hérité d'une base de code fragile avec des plantages fréquents ; mis en place des pratiques de refactorisation et des processus qualité qui ont porté le taux sans plantage à 99,999 %",
          "Face à des mises en production lentes et manuelles ; construit un pipeline CI/CD sur MacStadium qui a amélioré la vitesse de compilation de 50 % et augmenté les déploiements de 1/semaine à 4/jour",
          "Confronté à une faible couverture de tests (30 %) ; mené une initiative de tests incrémentale parallèlement aux refactorisations vers SwiftUI, Combine et des architectures modernes, atteignant 60 % en quatre ans",
          "Besoin de faire croître l'équipe rapidement ; intégré 20 développeurs sri-lankais avec un programme de formation sur mesure, les rendant productifs en 3 mois",
          "Adopté des outils assistés par IA (Claude, Warp.dev) dans le flux de travail de l'équipe iOS, réduisant le temps de développement de 10 %",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "Nov 2019 — Oct 2021",
        description: "Studio de développement mobile — direction de l'équipe iOS sur plus de 15 projets clients dans le commerce de détail, la santé, les médias et la mobilité.",
        bullets: [
          "Constaté des efforts dupliqués sur plus de 15 projets clients ; conçu un framework iOS partagé de composants documentés et testés qui a standardisé les pratiques et accéléré les livraisons",
          "Dirigé l'équipe mobile à travers des cycles de vie complets pour Metro & Moi, Super C, FoodBasics, AbbVie, Le Devoir, Biodôme de Montréal, Christies, TaxiCoop et autres",
          "Responsable des pipelines CI/CD sur MacStadium ; automatisé les déploiements App Store et les processus de mise en production pour toutes les applications clients",
          "Mentoré les développeurs juniors par des sessions individuelles et organisé des lunch-and-learns pour favoriser l'apprentissage continu",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Développeur iOS sénior, Architecte",
        dates: "Nov 2013 — Nov 2019",
        description: "Agence de logiciels sur mesure — responsable de la création de l'architecture initiale et de son évolution selon les exigences clients.",
        bullets: [
          "CAE PreStudy : pris le projet des exigences jusqu'à la livraison, construisant une application iOS native pour la formation des pilotes d'aviation de bout en bout",
          "Payfare (DiDi/Lyft) : développé les clients iOS et Android pour une plateforme de paiement anticipé servant les chauffeurs de l'économie à la demande",
          "BookJane : construit une application iOS pour la gestion de la main-d'œuvre en santé",
          "Acosta SLTouch, Skillable : livré des solutions hybrides et PWA sur l'ensemble de la pile pour l'analytique de vente au détail et le micro-apprentissage",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur iOS",
        dates: "Oct 2009 — Oct 2013",
        description: "Logiciels et matériel pour le vélo-partage — développement mobile pionnier pour la mobilité urbaine.",
        bullets: [
          "Développé les applications iOS Spotcycle et Solstice pour le vélo-partage, supportant des déploiements à l'échelle de la ville à Londres et New York",
          "Pionnier du tout premier système de réalité augmentée pour trouver des vélos en libre-service en combinant le flux caméra en direct avec les données Core Location",
          "Résolu les problèmes de connectivité peu fiable à travers des villes entières — ingénierie mobile pionnière sous des contraintes réelles",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Intégré l'équipe d'architecture du projet Ibiza après un redressement client critique ; contribué à reconstruire la plateforme de zéro avec Java, Spring et Hibernate, livrant dans les délais et le budget",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Affecté au projet Libra de Morgan Stanley pour migrer des systèmes mainframe legacy vers des services Java ; travaillé au sein d'une équipe distribuée à travers New York, Budapest, Tokyo et Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "Mai 2003 — Oct 2005",
        bullets: [
          "Intégré l'équipe d'infrastructure logicielle ; construit des services de base et des composants réutilisables adoptés par plusieurs équipes de produits e-commerce",
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
      education: "Formation",
    },
    education: {
      degree: "Techniques de l'informatique",
      school: "Cégep Édouard-Montpetit, Longueuil, QC",
      dates: "Sept 2000 — Mai 2003",
      description: "Diplôme d'études collégiales (DEC) de trois ans couvrant le C, C++, Java, SQL, Linux et l'informatique appliquée.",
    },
    summary: "Architecte logiciel avec plus de 21 ans d'expérience pratique dans la conception et la livraison de systèmes backend, mobiles et web. Leadership éprouvé en architecture de solutions, transformation d'équipes, mentorat et collaboration interfonctionnelle. Combine une vaste expertise technique avec une approche orientée produit pour aligner l'ingénierie avec les objectifs d'affaires.",
    accomplishments: [
      "Transformé une équipe iOS de 8 personnes en une unité hautement performante — taux sans plantage à 99,999 %, déploiements de 1/semaine à 4/jour, vitesse de compilation améliorée de 50 %",
      "Intégré 20 développeurs sri-lankais — conçu un programme de formation et bâti une culture collaborative à travers les fuseaux horaires, productifs en 3 mois",
      "Conçu la plateforme de formation des pilotes de CAE de bout en bout : backend Spring, frontend Angular et client iOS natif",
      "Livré la reconstruction de la plateforme Ibiza d'Accovia dans les délais et le budget après un redressement client critique — en tant que membre de l'équipe d'architecture",
    ],
    skills: [
      { label: "Architecture", items: ["Solution Architecture", "API Design", "System Integration", "Data Modeling", "Distributed Systems"] },
      { label: "Leadership", items: ["Team Mentorship", "Code Reviews", "Technical Discovery", "Cross-functional Collaboration", "Onboarding"] },
      { label: "Langages", items: ["Java", "Swift", "Kotlin", "TypeScript", "SQL", "Python"] },
      { label: "Backend", items: ["Spring Boot", "Hibernate", "Node.js", "PostgreSQL", "MySQL", "Docker"] },
      { label: "Mobile/Web", items: ["iOS SDK", "visionOS SDK", "SwiftUI", "UIKit", "Android SDK", "Angular"] },
      { label: "DevOps", items: ["CI/CD Pipelines", "GitHub Actions", "Fastlane", "Sentry", "LaunchDarkly", "Claude Code"] },
      { label: "Additionnel", items: ["Objective-C", "Oracle", "DB2"] },
    ],
    experience: [
      {
        company: "Poka Inc.",
        title: "Architecte, Lead iOS, Lead VisionOS",
        dates: "Oct 2021 — Présent",
        description: "Plateforme pour travailleurs connectés — plus de 200 000 utilisateurs actifs quotidiens, base de code Swift de 450 000 lignes, 99,999 % sans plantage.",
        bullets: [
          "Hérité d'une base de code fragile avec des plantages fréquents ; introduit des outils internes, des bibliothèques réutilisables et des pratiques standardisées qui ont porté le taux sans plantage à 99,999 %",
          "Besoin de faire croître l'équipe rapidement ; intégré 20 développeurs sri-lankais avec un programme de formation sur mesure et des revues de code inter-fuseaux horaires, les rendant productifs en 3 mois",
          "Comblé les écarts entre l'ingénierie, la gestion de produit et le design UX ; établi des flux de collaboration alignant les solutions techniques avec les objectifs d'affaires",
          "Face à des mises en production lentes et manuelles ; automatisé les déploiements App Store de bout en bout, augmentant la cadence de 1/semaine à 4/jour et améliorant la vitesse de compilation CI de 50 %",
          "Confronté à une faible couverture de tests (30 %) ; mené une initiative de tests incrémentale parallèlement à la modernisation architecturale, atteignant 60 % en quatre ans",
        ],
      },
      {
        company: "Appcom",
        title: "Lead développeur mobile",
        dates: "Nov 2019 — Oct 2021",
        description: "Studio de développement mobile — direction de l'équipe iOS sur plus de 15 projets clients.",
        bullets: [
          "Constaté des efforts dupliqués sur plus de 15 projets clients ; conçu un framework iOS partagé qui a standardisé les pratiques, réduit la duplication et amélioré le délai de mise en marché",
          "Identifié des lacunes de communication entre les équipes ; établi des processus et outils de collaboration qui ont amélioré l'alignement avec la gestion de produit et le design UX",
          "Investi dans la croissance de l'équipe par le mentorat et des sessions de partage de connaissances, développant les ingénieurs juniors en contributeurs autonomes",
        ],
      },
      {
        company: "Spiria Digital",
        title: "Architecte logiciel, Développeur sénior",
        dates: "Nov 2013 — Nov 2019",
        description: "Agence de logiciels sur mesure — responsable de l'architecture initiale et de son évolution selon les exigences clients.",
        bullets: [
          "Responsable de l'architecture de solutions pour les engagements clients ; mené l'analyse des exigences, la découverte technique, et produit des contrats d'API, modèles de données et stratégies d'intégration guidant les équipes de développement",
          "CAE PreStudy : conçu l'architecture de bout en bout couvrant un backend Spring, un frontend Angular et un client iOS pour une plateforme de formation des pilotes d'aviation",
          "Produit des artéfacts d'architecture couvrant les considérations de sécurité, les approches de mise à l'échelle et les topologies de déploiement pour chaque engagement",
          "Défini les standards d'ingénierie et mentoré les développeurs sur plusieurs équipes de projet, élevant la qualité globale du code",
          "Acosta SLTouch : conçu l'architecture d'un framework mobile hybride pour l'analytique de vente au détail avec BackboneJS et Node.js",
        ],
      },
      {
        company: "8D Technologies",
        title: "Développeur Java back-end → Développeur iOS",
        dates: "Oct 2009 — Oct 2013",
        description: "Logiciels et matériel pour le vélo-partage et le stationnement automatisé — solutions pionnières pour la mobilité urbaine.",
        bullets: [
          "Commencé dans l'équipe backend Java pour la suite de vélo-partage Solstice ; transitionné vers iOS, apportant une expertise backend qui a fait le pont entre les couches d'architecture du système",
          "Confronté à des contraintes de connectivité et de performance ; conçu des solutions pour des déploiements à l'échelle de la ville à Londres et New York",
          "Pionnier du tout premier système de réalité augmentée pour trouver des vélos en libre-service en combinant le flux caméra en direct avec les données Core Location",
        ],
      },
      {
        company: "Accovia",
        title: "Développeur Java back-end — Équipe d'architecture",
        dates: "Oct 2007 — Oct 2009",
        bullets: [
          "Intégré l'équipe d'architecture du projet Ibiza après un redressement client critique ; contribué à reconstruire la plateforme de zéro avec Java, Spring et Hibernate, livrant dans les délais et le budget",
          "Contribué à l'optimisation de la performance et à l'orchestration des services sur la couche backend",
        ],
      },
      {
        company: "Compuware Montréal",
        title: "Consultant Java — Morgan Stanley",
        dates: "Oct 2005 — Oct 2007",
        bullets: [
          "Affecté au projet Libra pour migrer des systèmes mainframe legacy vers des services Java sur Linux dans le respect d'exigences strictes de conformité financière ; coordonné au sein d'une équipe distribuée à travers New York, Budapest, Tokyo et Vancouver",
        ],
      },
      {
        company: "Mediagrif",
        title: "Développeur Java",
        dates: "Mai 2003 — Oct 2005",
        bullets: [
          "Intégré l'équipe d'infrastructure logicielle ; construit des services de base et des composants réutilisables adoptés par plusieurs équipes de produits e-commerce",
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
    execSync(`typst compile --root "${ROOT}" --input data-file="cv-${variant.id}.json" --input photo="../../docs/img/profile.jpg" "${templatePath}" "${outputFile}"`, {
      stdio: 'inherit',
    });
    console.log(`  ✓ ${outputFile}`);
  } catch (err) {
    console.error(`  ✗ Failed to generate CV-${variant.id}.pdf`);
    process.exit(1);
  }
}

console.log(`\nDone! Generated ${variants.length} CV variants.`);
