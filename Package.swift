// swift-tools-version: 6.1

import PackageDescription

let package = Package(
    name: "me",
    products: [
        .library(
            name: "me",
            targets: ["me"]),
    ],
    targets: [
        .target(
            name: "me",
            path: "src"
        ),
    ]
)
