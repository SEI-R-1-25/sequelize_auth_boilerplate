# Express Sequelize Auth Boilerplate

### Getting Started

- npm install
- npm run dev

## Overview

Comments have provided for the middleware and the controllers. Feel free to tinker with the code and explore.

## Requests

- `POST`: `http://localhost:3001/api/auth/register`

```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

- `POST`: `http://localhost:3001/api/auth/login`

```json
{
  "email": "string",
  "password": "string"
}
```

- `GET`: `http://localhost:3001/api/auth/session`

  add an authorization header to the request, it should be a bearer type, formatted like this:

  ```
   Authorization: Bearer <SOME TOKEN>
  ```
