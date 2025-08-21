Here's a curated overview of the technologies I use to ship production software. 

## Programming Languages

- *Swift* - 2015 to present
- *Objective-C* - 2010 to present
- *Kotlin* - 2017 to present

### Secondary Languages

Other languages & technologies that I have worked with over the years:

- *Java* - 2003 to present
- *C/C++* - 1999 to present
- *Python* - 2014 to 2017
- *JavaScript* - 1999 to present
- *TypeScript* - 2018 to 2022
- *SQL* - 1999 to present
- C# - 2014 to 2016

Note: Although I list these technologies, I do not position myself as an expert in them today.

### Other Languages

I could add many more to the list, most are simply obsolete by modern standards, so I voluntarily do not list them.

## AI

I'm excited by AI's potential to transform software engineering. Developers won't disappear—we'll be even more essential to steer AI toward robust, ethical, and maintainable solutions. The discipline is changing rapidly, enabling greater productivity and new kinds of creativity that weren't feasible before.

### AlexCode for Xcode

[AlexCode](https://www.alexcodes.app) is a companion for Xcode that brings agentic, cursor-like workflows into the IDE. It's been especially helpful for:

- Translating legacy *Objective-C* to modern *Swift*.
- Migrating *XIBs*/*Storyboards* to programmatic Auto Layout or *SwiftUI*.
- Maintaining comprehensive *DocC* documentation across modules.
- Generating unit tests for previously untested code paths.
- Refactoring tightly coupled code into smaller, testable components.

These tasks were historically costly to justify; with AI assistance, they can often be completed in a day.

### Claude Code

[Claude Code](https://www.anthropic.com/claude-code) is my current choice for agentic workflows, with flexible custom commands, MCPs, and sub-agents that enable flows not easily replicated in other IDE integrations.

## Operating Systems

- [iOS](https://en.wikipedia.org/wiki/IOS)
- [visionOS](https://en.wikipedia.org/wiki/visionOS)
- [watchOS](https://en.wikipedia.org/wikiwatchOS)
- [tvOS](https://en.wikipedia.org/wiki/tvOS)
- [macOS](https://en.wikipedia.org/wiki/MacOS)
- [Linux](https://en.wikipedia.org/wiki/Linux) ([Debian](https://www.debian.org) and derivatives, like [Ubuntu](https://ubuntu.com/download) and [Mint](https://www.linuxmint.com))
- [Android](https://source.android.com)

### Windows

I have used Windows professionally as a desktop OS when required, but I prefer Unix-based systems. Ideally *macOS* because that's where I have optimized my workflows.

### Android

I have developed for Android in the past, but my knowledge predates Jetpack Compose. While I can regain proficiency, my current focus is the Apple ecosystem.

## Libraries & Frameworks

A non-exhaustive list of frameworks I'm proficient with and that remain relevant.

### Apple Ecosystem

- *iOS* *SDK*
- *macOS* *SDK*
- *watchOS* *SDK*
- *visionOS* *SDK*
- *SwiftUI*
- *UIKit*
- *Combine*
- *RxSwift* / *RxCocoa*
- *Core Data* (including iCloud Storage)
- *SwiftData*
- *Core Location*
- *MapKit*
- *AVKit*
- *AVFoundation*
- *Core Image*
- *Core Animation*

Note: I prioritize platform-native tools to deliver robust, high-performance experiences for end-users and do not work with cross-platform mobile frameworks such as React Native or Flutter.

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
- *Apache ActiveMQ*
- *J2EE*
- *JUnit*
- *Mockito*

Note: While I can regain deeper proficiency in the *Java* ecosystem as needed, my current investment is primarily in *iOS* and Apple-platform development.

### Android Ecosystem

- *Google Play SDK*
- *Timber*
- *RxJava* 
- *RxKotlin* 
- *RxAndroid*
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

There is no one size fits all answer, because it all depends on the type of application and the industry. Generally speaking, pursuing 100% often has diminishing returns. In my experience, ~75% test coverage usually provides very strong stability at a balanced cost.

## Patterns & Principles

- *MVVM*
- *MVC*
- *KISS*
- *SRP*
- *Law of Demeter* 

## Tools

- *Git*
- *Apple Xcode*
- *Apple Instruments* (for Performance Optimization and Debugging)
- *Apple TestFlight*
- *Swift Package Manager*
- *CocoaPods*
- *IntelliJ* IDEA 
- *Android Studio*
- *Docker*
- [JIRA](https://www.atlassian.com/software/jira)
- [Trello](https://trello.com/home)
- [Zeplin.io](https://zeplin.io)
- [Miro](https://miro.com)
- [Excalidraw](https://excalidraw.com)
- [Figma](https://figma.com) (more specifically Figma DevMode)

Note: I've used many other tools over the years; only the most relevant are listed here.

## Methodology

I have worked with a wide range of delivery methodologies, including Scrum, Kanban, and Waterfall. My key takeaway is that the choice of methodology is a weak predictor of project success.

What consistently correlates with success is a team's ability to continuously inspect its processes and adapt as challenges arise. It takes leadership and courage to grant teams the autonomy to do this, but when they have it, the result is typically faster delivery, higher quality, and stronger outcomes.

