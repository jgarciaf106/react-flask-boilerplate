rm -R -f ./migrations &&
pipenv run init &&
psql -U gitpod -c 'DROP DATABASE ods;' || true &&
psql -U gitpod -c 'CREATE DATABASE ods;' &&
psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d ods &&
pipenv run migrate &&
pipenv run upgrade &&
pipenv run start