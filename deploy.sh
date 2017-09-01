#!/bin/sh
sudo -u www-data cp *.html /var/www/jwt.show
sudo -u www-data cp *.css /var/www/jwt.show
sudo -u www-data cp -r script /var/www/jwt.show
sudo -u www-data cp -r stats /var/www/jwt.show
