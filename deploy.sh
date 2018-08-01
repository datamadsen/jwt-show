#!/bin/bash
yarn
rm -rf dist
./tools/generate-changelog-entries.sh > ./src/models/Changes.js
yarn run build
sudo -u www-data cp dist/* /var/www/jwt.show
