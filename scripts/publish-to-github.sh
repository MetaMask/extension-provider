#!/bin/bash
VERSION=$(jq -r '.version' package.json)
npm --no-git-tag-version version "$VERSION-$BUILD_VERSION"
npm publish
