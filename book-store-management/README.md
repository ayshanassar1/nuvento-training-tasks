# Book Haven – Book Store Management System

## About the Project

Book Haven is a Book Store Management System developed using React, JSON Server, Axios, and React Bootstrap. It allows users to manage a collection of books through a simple and responsive interface.

## Features

- View all books in the collection.
- Add new books.
- Edit existing book details.
- Delete books with confirmation.
- Search books by title or author.
- Filter books by category.
- Display book cover images.
- Show book prices and availability status.
- Validate form inputs.
- Display success and error messages.
- Save book changes through JSON Server so they persist after refreshing the page.
- Responsive design for different screen sizes.

## Technologies Used

- React
- JavaScript
- Vite
- JSON Server
- Axios
- React Bootstrap
- Bootstrap
- React Icons
- CSS

## Project Structure

```text
book-store-management/
├── public/
├── src/
│   ├── services/
│   │   └── bookService.js
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── db.json
├── package.json
├── package-lock.json
└── README.md
```

## Requirements

Install the following before running the project:

- Node.js
- npm
- Visual Studio Code (recommended)

## Installation and Setup

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd book-store-management
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Backend

Open a terminal in the project folder and run:

```bash
npm run server
```

JSON Server runs at:

`http://localhost:3001`

The books API endpoint is:

`http://localhost:3001/books`

Keep this terminal running.

### 4. Start the Frontend

Open a second terminal in the same project folder and run:

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

`http://localhost:5173`

## Book Data

Book information is stored in `db.json`. Each book includes:

- ID
- Title
- Author
- Price
- Category
- Description
- Availability
- Cover image URL

## CRUD Operations

| Operation | HTTP Method | Purpose |
|---|---|---|
| Read | GET | Display books |
| Create | POST | Add a book |
| Update | PUT | Edit a book |
| Delete | DELETE | Remove a book |

Axios is used to send HTTP requests from the React frontend to the JSON Server backend.

## Validation and Error Handling

The application checks required fields and validates book prices before saving. It also displays success messages after successful operations and error messages when requests fail.

## Author

Developed as a Book Store Management System project.
