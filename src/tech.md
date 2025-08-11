Here’s a curated overview of the technologies I use to ship production software. It highlights deep expertise across Apple platforms (iOS, visionOS, macOS) with Swift/Objective‑C, grounded by prior Java/Kotlin experience and supporting infrastructure. To keep the terminology digestible, each section includes short, high‑level descriptions and notes on where my practical depth lies.

## Programming Languages

- Swift — Apple’s modern, safe, and performant language for iOS, macOS, watchOS, tvOS, and visionOS.
- Objective-C — Apple's Legacy language for developing on Apple's platforms.
- Java
- Kotlin — A concise, modern JVM language used primarily for Android and server-side development.

### Secondary Languages

Other languages & technologies that I have worked with over the years:

- C/C++
- Python
- JavaScript / TypeScript
- SQL

Note: Although I list these technologies, I do not position myself as an expert in them today.

## Operating Systems

- iOS
- visionOS
- watchOS
- tvOS
- macOS
- Linux (Debian and derivatives, like Ubuntu and Mint)
- Android

Note: I have used Windows professionally as a desktop OS when required, but I prefer Unix-based systems—ideally macOS—for productivity and workflow familiarity.

Note: I have developed for Android in the past, but my knowledge predates Jetpack Compose. While I can regain proficiency, my current focus is the Apple ecosystem.

## Libraries & Frameworks

A non-exhaustive list of frameworks I’m proficient with and that remains relevant.

### Apple Ecosystem

- SwiftUI — Declarative UI framework for building interfaces across Apple platforms.
- UIKit — Imperative UI framework for iOS; extensive experience with programmatic Auto Layout.
- Combine — Reactive framework for handling asynchronous events and data streams.
- RxSwift / RxCocoa — Reactive programming library for composing asynchronous and event-based code.
- Core Data — Object graph and persistence framework for data modelling and storage.
- SwiftData — Modern, Swift-first persistence layers built on Core Data concepts.
- Core Location — Location and geofencing services for device positioning.
- MapKit — Native mapping and annotations for location-aware apps.
- AVKit — High-level media playback UI components.
- AVFoundation — Low-level audio/video processing, capture, and composition.
- Core Image — GPU-accelerated image processing and filters.
- Core Animation — High-performance animations and compositing.

### Java Ecosystem

- Spring Framework / Spring Boot — Enterprise application framework and opinionated bootstrapping for microservices.
- Hibernate — ORM for mapping Java objects to relational databases.
- Apache Tomcat — Lightweight servlet container for Java web applications.
- Apache Lucene — Full-text search library for indexing and retrieval.
- JBoss (WildFly) — Java EE application server for enterprise deployments.
- Liquibase — Database schema change management and versioning.
- Log4j — Logging framework for configurable, granular application logs.
- Apache Maven — Build automation and dependency management.
- Apache Ant — Scriptable build tool for Java projects.
- Apache ActiveMQ — Message broker for asynchronous messaging patterns.
- J2EE (JDBC, JTA, EJBs) — Enterprise standards for persistence, transactions, and components.
- JUnit — Unit testing framework for Java.
- Mockito — Mocking framework for isolated unit tests.

Note: While I can regain deeper proficiency in the Java ecosystem as needed, my current investment is primarily in iOS and Apple-platform development.

### Android Ecosystem

- Google Play SDK — SDK for integrating Google Play Services (APIs, authentication, maps, messaging).
- Timber — Lightweight Android logging framework with simplified tag generation and configurable output.
- RxJava / RxKotlin / RxAndroid — Reactive programming libraries for asynchronous and event-based code (Android/JVM).
- Dagger — Compile-time dependency injection framework for Android/Java, improving testability and maintainability.


### RDBMS

Foundational database administration and usage:

- PostgreSQL — Advanced open-source relational database with strong SQL and extensions.
- MySQL — Widely used open-source relational database for web and application workloads.
- MariaDB — Community-driven fork of MySQL with performance and compatibility focus.

## Testing

I’m a firm believer that unit tests are an integral part of a healthy codebase.

- XCTest — Native unit testing framework for Swift and Objective-C.
- XCUITest — UI testing for end-to-end user flows in Apple-platform apps.
- Swift Testing — Modern, Swift-first testing framework for improved ergonomics and structure.
- SwiftyMocky — Code generation for protocol-based mocks in Swift.
- Snapshot Testing — Visual regression testing by comparing rendered UI snapshots.
- Nimble — Expressive matcher framework for readable test assertions.

### Snapshot Tests vs. Xcode Previews

Xcode Previews provide immediate, design-time feedback, allowing developers to see changes in real time and minimize the feedback loop. Snapshot tests operate on a longer cycle but are essential for catching visual regressions as the product evolves. I leverage both by using a lightweight approach to convert SwiftUI previews into snapshot tests with minimal code, combining rapid iterations with robust regression protection.

### XCUITest

Valuable for validating end-to-end behaviour before App Store releases, but inherently more fragile than unit tests. With careful isolation and robust selectors, they help reduce production defects.

### Code Coverage

Coverage is a useful signal—not a goal in itself. Pursuing 100% often has diminishing returns. In my experience, ~75% coverage correlates with strong stability and infrequent severe defects reaching users.

## Patterns & Principles

- MVVM (Model–View–ViewModel) — Separates presentation logic from views for testability and clarity.
- MVC (Model–View–Controller) — Traditional separation of concerns for UI applications.
- KISS (Keep It Simple, Stupid) — Favour simplicity to reduce complexity and defects.
- Single Responsibility Principle — Each module should have one reason to change.
- Law of Demeter — Promote low coupling by minimizing knowledge of internal object structures.

## Tools

- Git — Distributed version control and collaboration.
- Apple Xcode — Primary IDE for Apple-platform development.
- Apple Instruments — Performance profiling, memory analysis, and energy diagnostics.
- Swift Package Manager — Dependency management and modularization for Swift.
- CocoaPods — Dependency manager for iOS/macOS projects.
- Java/Kotlin Ecosystem
- IntelliJ IDEA (and Android Studio) — IDEs for JVM and Android development.
- Maven — Declarative build and dependency management.
- Gradle — Flexible build automation with Groovy/Kotlin DSLs.
- Docker — A popular containerization tool for creating and deploying software in a scalable and standardized way.

Note: I’ve used many other tools over the years; only the most relevant are listed here.

## AI

I’m excited by AI’s potential to transform software engineering. Developers won’t disappear—we’ll be even more essential to steer AI toward robust, ethical, and maintainable solutions. The discipline is changing rapidly, enabling greater productivity and new kinds of creativity that weren’t feasible before.

### AlexCode

AlexCode is a companion for Xcode that brings agentic, cursor-like workflows into the IDE. It’s been especially helpful for:

- Translating legacy Objective-C to modern Swift.
- Migrating XIBs/Storyboards to programmatic Auto Layout or SwiftUI.
- Maintaining comprehensive DocC documentation across modules.
- Generating unit tests for previously untested code paths.
- Refactoring tightly coupled code into smaller, testable components.

These tasks were historically costly to justify; with AI assistance, they can often be completed in a day.

### Claude Code

Claude Code is my current choice for agentic workflows, with flexible custom commands, MCPs, and sub-agents that enable flows not easily replicated in other IDE integrations. It excels at structured, multi-step problem solving with strong reasoning and code-editing capabilities.
