#!/bin/bash
# Pahts are relative to "root", where we would normally run `yarn run deploy`.
yarn
rm -rf dist
./tools/generate-changelog-entries.sh > ./src/models/Changes.js
yarn run build
sudo -u www-data rm -rf /var/www/jwt.show/*
sudo -u www-data cp dist/* /var/www/jwt.show
