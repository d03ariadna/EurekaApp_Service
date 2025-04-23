# EurekaApp_Service

Backend for the Eureka App, a platform for managing flashcards and categories. This service is built using Node.js, Express, TypeScript, and MongoDB.

## Features

- **Flashcards Management**: Create, retrieve, and organize flashcards.
- **Category Management**: Create and manage categories for flashcards.
- **RESTful API**: Provides endpoints for interacting with flashcards and categories.
- **MongoDB Integration**: Uses MongoDB as the database for storing data.
- **Environment Configuration**: Supports `.env` files for environment-specific configurations.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for creating RESTful APIs.
- **TypeScript**: Adds static typing to JavaScript for better development experience.
- **Mongoose**: ODM for MongoDB.
- **dotenv**: For managing environment variables.
- **cors**: Middleware for enabling Cross-Origin Resource Sharing.

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd EurekaApp_Service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following variables:
   ```bash
   PORT=4000
   MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-url>/<database-name>
   ```

4. Build the Typescript code:
   ```bash
   npm run buils
   ```

## Usage

#### Development mode:
Run the server in development mode with hot-reloading:
   ```bash
   npm run dev
   ```

#### Production mode:
Start the server in production mode:
   ```bash
   npm start
   ```

## API Endpoints

### Flashcards
- `GET /flashcards`: Retrieve all flashcards.
- `POST /flashcards`: Create a new flashcard.
- `GET /flashcards/:id`: Retrieve a flashcard by ID.
- `GET /flashcards/category/:categoryId`: Retrieve flashcards by category.

### Categories
- `GET /category`: Retrieve all categories.
- `POST /category`: Create a new category.

## Project Structure

```
EurekaApp_Service/
├── src/
│   ├── app.ts                # Express app setup
│   ├── server.ts             # Server entry point
│   ├── controllers/          # API controllers
│   ├── routes/               # API routes
│   ├── models/               # Mongoose models
│   ├── interfaces/           # TypeScript interfaces
├── .env                      # Environment variables
├── .gitignore                # Ignored files for Git
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
└── README.md                 # Project documentation
```

## Scripts

- `npm run dev`: Start the server in development mode.
- `npm run build`: Compile TypeScript to JavaScript.
- `npm start`: Start the server in production mode.

## License

This project is licensed under the ISC License.

## Author

Developed by [Your Name].