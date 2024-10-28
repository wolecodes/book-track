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

#### Create Book(s)
- **URL**: `/api/books/`
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
- **URL**: `/api/books/`
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


