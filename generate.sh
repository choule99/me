#!/bin/bash

# Render Markdown

spec-md -m ./spec-md.json ./src/index.md > ./docs/index.html

# Change the title from "Welcome!" to "Claude Houle"
sed -i '' 's/<title>Digital Resumé<\/title>/<title>Claude Houle<\/title>/' ./docs/index.html
