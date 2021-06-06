rm -R -f ./migrations &&
pipenv run init &&
psql -U gitpod -c 'DROP DATABASE ODS;' || true &&
psql -U gitpod -c 'CREATE DATABASE ODS;' &&
psql -U gitpod -c 'CREATE EXTENSION unaccent;' -d ODS &&
pipenv run migrate &&
pipenv run upgrade