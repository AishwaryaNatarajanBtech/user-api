# User API

Simple User Management REST API built with TypeScript and Express.

## Tech Stack
- Node.js
- Express
- TypeScript

## Setup

```bash
npm install
npm run dev
```

## Endpoints

### Health Check
GET /health

### Get Users
GET /users

### Create User
POST /users

```json
{
  "name": "A",
  "email": "a@test.com"
}
```
