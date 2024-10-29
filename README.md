# Library System API

## Description

A simple library management system APi for managing books and track availability of books to streamline the process.

## Technologies Used

- **Typescript**: Programming Language
- **Node.JS**: Runtime Environment
- **Express**: Web Application Framework
- **Prisma**: Object Relational Mapper (ORM)
- **SQLite**: Database

## Features

- Create one or more book(s) -> `/`
- Retrieve all books or book by id -> `/` | `/:id`
- Update and delete book by id -> `/:id` | `/:id`

## Prerequisites

- Node.JS LTS
- npm

## Installation

1. Clone the repository.
2. Navigate to the project directory: `cd ./book-track`
3. Install dependencies: `npm install`

## Usage

### Local environment Usage

1. Build the project: `npm run build`
2. Start the server: `npm start`
3. Access and test endpoints in [SwaggerDoc](https://book-track.onrender.com/api-docs/)

## API Endpoints

### Books Management

###### Deploy link

https://book-track.onrender.com

#### Create Book(s)

- **URL**: `/api/v1/books/`
- **Method**: `POST`
- **Description**: Create one or multiple books
- **Request Body**:
  ```json
  {
    "title": "string",
    "author": "string",
    "genre": "string",
    "publicationDate": "string",
    "status": "string",
    "edition": "string",
    "summary": "string"
  }
  ```

#### Get All Books

- **URL**: `/api/v1/books/`
- **Method**: `GET`
- **Description**: Retrieve all books
- **Query Parameters**:
  - `limit` (optional): Number of books to return
  - `page` (optional): Page number for pagination

#### Get Book by ID

- **URL**: `/api/v1/books/{id}`
- **Method**: `GET`
- **Description**: Retrieve a specific book by ID
- **URL Parameters**:
  - `id`: Book ID

#### Update Book

- **URL**: `/api/v1/books/{id}`
- **Method**: `PUT`
- **Description**: Update a book's information
- **URL Parameters**:
  - `id`: Book ID
- **Request Body**:
  ```json
  {
    "title": "string",
    "author": "string",
    "genre": "string",
    "publicationDate": "string",
    "status": "string",
    "edition": "string",
    "summary": "string"
  }
  ```

#### Delete Book

- **URL**: `/api/v1/books/{id}`
- **Method**: `DELETE`
- **Description**: Delete a book
- **URL Parameters**:
  - `id`: Book ID

### API Documentation

- **Swagger UI**: [https://book-track.onrender.com/api-docs/](https://book-track.onrender.com/api-docs/)

## API Testing with Postman

### Postman Collection

You can test the API endpoints using our Postman collection:

[<img src="https://run.pstmn.io/button.svg" alt="Run In Postman" style="width: 128px; height: 32px;">](https://web.postman.co/workspace/0fab1573-d740-4a24-8503-686c65fb1173/documentation/37881924-f67c83b6-ffba-4bb0-a46c-5a319f38d2cc)

The collection includes all API endpoints:

#### Books

- `POST /api/books` - Create a book(s)
- `GET /api/books` - Get all books
- `GET /api/books/{id}` - Get a book by ID
- `PUT /api/books/{id}` - Update a book
- `DELETE /api/books/{id}` - Delete a book
