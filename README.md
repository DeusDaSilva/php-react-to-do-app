# php-react-to-do-app

## Setup

Hello,

welcome to the todo-App of Marcel Silvanus!

This app was written in React and php.
As a database this app is using mysql.

Prerequisites:

- npm
  - 6.13.7
- php
  - 7.2.34. I am not guaranteeing that it works in other versions.
- makefile
- mysql
  - 8.0.25
- composer

### Install backend:

- Move into backend

```bash
cd backend
```

- Create .env file:

```bash
cp .env.example .env
```

- Fill your .env file with your information
- Install packages with composer

```bash
composer install
```

- Have mysql running locally
- Create DB user with sufficient rights
- Setup the database

```bash
make setup/db
```

- Run this sql command to ensure the inserts work

```sql
SET @@GLOBAL.sql_mode= 'NO_ENGINE_SUBSTITUTION';
```

- If you have any trouble, viewing the database with the user

```sql
GRANT ALL PRIVILEGES ON todo_db.* TO 'todo_user'@'localhost';
```

- Start the server!

```bash
make start
```

### Install frontend

- Install packages

```bash
npm install
```

- Run the app!

```bash
npm run start
```

### Have fun!

All of the backend is self-written except packages.

All of the frontend is self-written except packages and the style-system (located unter './frontend/src/theme')

I am happy to talk about my decisions in an interview.
