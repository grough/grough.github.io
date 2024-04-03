#!/bin/bash

if [ -z "$WEB_BUILD_DIR" ]; then
  echo "Error: WEB_BUILD_DIR is not set"
  exit 1
fi

if [ -z "$WEB_PUBLISH_DIR" ]; then
  echo "Error: WEB_PUBLISH_DIR is not set"
  exit 1
fi

# Build website files
npm run build

# Delete old published files but don't delete the .git directory
find "$WEB_PUBLISH_DIR" -mindepth 1 -not -name '.git' -not -path '*/.git/*' -exec rm -rf {} +

# Copy new website files to published directory
cp -r "$WEB_BUILD_DIR"/* "$WEB_PUBLISH_DIR"

