#!/bin/bash

# check brew
brew bundle check

# remove old folders
rm -rf docs

# rsync the content in the dist folder
mkdir docs
rsync -r --include '*/' --include '*.html' --exclude '*' --exclude "dist" --prune-empty-dirs . docs/
rsync -r --include '*/' --include '*.png' --exclude '*' --exclude "dist" --prune-empty-dirs . docs/
rm ./docs/html_prefix.html
rm ./docs/html_suffix.html

# reduce images using pngquant
echo "Compressing PNGs to be smaller. This may take a while"
for i in dist/**/*.png ; do
  mv "$i" "$i.tmp"
  pngquant "$i.tmp" --out "$i"
done
echo "PNG compression done!"
