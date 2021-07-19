include src/.env

setup/db: 
	mysql --user=${DATABASE_USER} --password=${DATABASE_PASSWORD} < setup/database.sql 
	
dangerously_destroy_db:
	mysql --user=${DATABASE_USER} --password=${DATABASE_PASSWORD} < setup/destroy.sql

reset/db:
	make dangerously_destroy_db
	make setup/db

start: 
	cd src &&	php -S ${SERVER_HOST}:${SERVER_PORT}