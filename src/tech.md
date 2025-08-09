Here's a curated overview of the technologies I use to ship production software. It highlights deep expertise across Apple platforms (iOS, visionOS, macOS) with Swift/Objective‑C, grounded by prior Java/Kotlin experience and supporting infrastructure. 

## Programming Languages

- *Swift*
- *Objective-C*
- *Java*
- *Kotlin*

### Secondary Languages

Other languages & technologies that I have worked with over the years:

- *C/C++*
- *Python*
- *JavaScript* / *TypeScript*
- *SQL*
- C# / .NET Core

Note: Although I list these technologies, I do not position myself as an expert in them today.

Note: I could add many more to the list, they are just laughingly obsolete by modern standards.

## Operating Systems

- [iOS](https://en.wikipedia.org/wiki/IOS)
- [visionOS](https://en.wikipedia.org/wiki/visionOS)
- [watchOS](https://en.wikipedia.org/wiki/watchOS)
- [tvOS](https://en.wikipedia.org/wiki/tvOS)
- [macOS](https://en.wikipedia.org/wiki/MacOS)
- [Linux](https://en.wikipedia.org/wiki/Linux) ([Debian](https://www.debian.org) and derivatives, like [Ubuntu](https://ubuntu.com/download) and [Mint](https://www.linuxmint.com))
- [Android](https://source.android.com)

Note: I have used Windows professionally as a desktop OS when required, but I prefer Unix-based systems. Ideally macOS because that's where I have optimized my workflows.

Note: I have developed for Android in the past, but my knowledge predates Jetpack Compose. While I can regain proficiency, my current focus is the Apple ecosystem.

## Libraries & Frameworks

A non-exhaustive list of frameworks I'm proficient with and that remain relevant.

### Apple Ecosystem

- *SwiftUI*
- *UIKit*
- *Combine*
- *RxSwift* / *RxCocoa*
- *Core Data*
- *SwiftData*
- *Core Location*
- *MapKit*
- *AVKit*
- *AVFoundation*
- *Core Image*
- *Core Animation*

### Java Ecosystem

- *Spring Framework*
- *Spring Boot*
- *Hibernate*
- *Apache Tomcat*
- *Apache Lucene* 
- *Apache Solr*
- *JBoss*
- *Liquibase*
- *Log4j*
- *Apache Maven*
- *Apache Ant*
- *Apache ActiveMQ*
- *J2EE*
- *JUnit*
- *Mockito*

Note: While I can regain deeper proficiency in the Java ecosystem as needed, my current investment is primarily in iOS and Apple-platform development.

### Android Ecosystem

- *Google Play SDK*
- *Timber*
- *RxJava* / *RxKotlin* / *RxAndroid*
- *Dagger*
- *Gradle*


### RDBMS

- *PostgreSQL*
- *MySQL*
- *MariaDB*
- *SQLite*

## Testing

I'm a firm believer that unit tests are an integral part of a healthy codebase.

- *XCTest*
- *XCUITest*
- *Swift Testing*
- *SwiftyMocky*
- *Snapshot Testing*
- *Nimble*

### Snapshot Tests vs. Xcode Previews

*Xcode Previews* provide immediate, design-time feedback, allowing developers to see changes in real time and minimize the feedback loop. Snapshot tests operate on a longer cycle but are essential for catching visual regressions as the product evolves. I leverage both by using a lightweight approach to convert *SwiftUI* previews into snapshot tests with minimal code, combining rapid iterations with robust regression protection.

### XCUITest

Valuable for validating end-to-end behavior before App Store releases, but inherently more fragile than unit tests. With careful isolation and robust selectors, they help reduce production defects.

### Code Coverage

Coverage is a useful signal—not a goal in itself. Pursuing 100% often has diminishing returns. In my experience, ~75% coverage correlates with strong stability and infrequent severe defects reaching users.

## Patterns & Principles

- *MVVM*
- *MVC*
- *KISS*
- *SRP*
- *Law of Demeter* 

## Tools

- *Git*
- *Apple Xcode*
- *Apple Instruments*
- *Swift Package Manager*
- *CocoaPods*
- *IntelliJ* IDEA (and *Android Studio*)
- *Docker*

Note: I've used many other tools over the years; only the most relevant are listed here.

## AI

I'm excited by AI's potential to transform software engineering. Developers won't disappear—we'll be even more essential to steer AI toward robust, ethical, and maintainable solutions. The discipline is changing rapidly, enabling greater productivity and new kinds of creativity that weren't feasible before.

### AlexCode for Xcode

AlexCode is a companion for Xcode that brings agentic, cursor-like workflows into the IDE. It's been especially helpful for:

- Translating legacy *Objective-C* to modern *Swift*.
- Migrating *XIBs*/*Storyboards* to programmatic Auto Layout or *SwiftUI*.
- Maintaining comprehensive *DocC* documentation across modules.
- Generating unit tests for previously untested code paths.
- Refactoring tightly coupled code into smaller, testable components.

These tasks were historically costly to justify; with AI assistance, they can often be completed in a day.

### Claude Code

Claude Code is my current choice for agentic workflows, with flexible custom commands, MCPs, and sub-agents that enable flows not easily replicated in other IDE integrations. It excels at structured, multi-step problem solving with strong reasoning and code-editing capabilities.
