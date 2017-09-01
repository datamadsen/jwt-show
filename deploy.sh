#!/bin/sh
./generate-changelog.sh
sudo -u www-data cp *.html /var/www/jwt.show
sudo -u www-data cp -r styles /var/www/jwt.show
sudo -u www-data cp -r changelog /var/www/jwt.show
sudo -u www-data cp -r script /var/www/jwt.show
sudo -u www-data cp -r stats /var/www/jwt.show
