# Doubt Share Platform Documentation

## Overview

The Doubt Share Platform is an interactive solution designed to facilitate the sharing and resolving of academic doubts among students and tutors. It features user authentication, doubt posting, tutor availability indication, real-time chat, and a responsive design.

## Getting Started

### Prerequisites

- Node.js
- npm or Yarn
- MongoDB

### Installation

1. Clone the repository:

```shell
git clone git@github.com:AvinashChandavar7/doubt_share_platforms.git
```

2. Install dependencies for the backend:

```shell
cd backend
npm install
```

3. Install dependencies for the frontend:

```shell
cd frontend
npm install
```

4. Start the backend server:

```shell
npm run dev
```

5. Start the frontend application:

```shell
npm run dev
```

## Features

### User Authentication

- Sign-In: Users can sign in to their accounts.
- Sign-Up: New users can register for an account.

### Doubt Posting

- Users can post their academic questions or doubts for discussion.

### Tutor Availability

- Tutors can indicate their availability to assist students.

### Real-Time Chat

- Users can discuss doubts and solutions in real-time.

## Technical Stack

- Frontend: React.js, Tailwind CSS, Vite
- Backend: Node.js, Express.js
- Database: MongoDB

# Frontend Documentation for Doubt Share Platform

## Overview

The frontend of the Doubt Share Platform is a React-based application that provides a user interface for interacting with the platform's features, including user authentication, doubt posting, and real-time communication.

## Getting Started

### Prerequisites

- Node.js installed
- npm or Yarn installed

### Installation

Navigate to the frontend directory and install dependencies:

```shell
cd frontend
npm install
```

### Running the Application

Start the application with:

```shell
npm run dev
```

## Directory Structure

- `src/`: The source directory containing all frontend code.
  - `components/`: Contains all React components used across the application.
  - `context/`: Holds React context definitions for global state management.
  - `_root/`: Contains the root-level components and pages.
  - `_auth/`: Holds authentication-related components and forms.
  - `lib/`: Contains libraries and hooks for data fetching, utilities, and validation.
  - `constants/`: Contains constant values used throughout the application.
  - `config/`: Holds configuration files, including API endpoints.
  - `App.jsx`: The main React component that defines the application's routing structure.
  - `main.jsx`: The entry point of the React application that sets up the context providers.
  - `globals.css`: Contains global CSS styles.

## Components

### UI Components

- `button.jsx`: Defines the Button component used across the application.
- `input.jsx`: Defines the Input component for form inputs.
- `textarea.jsx`: Defines the Textarea component for multi-line text inputs.
- `select.jsx`: Defines the Select component for dropdown selections.
- `form.jsx`: Contains form-related components such as `FormLabel` and `FormControl`.

### Shared Components

- `Loader.jsx`: Defines the Loader component to indicate loading states.
- `Topbar.jsx`: Defines the Topbar component for navigation and user actions.
- `LeftSidebar.jsx`: Defines the LeftSidebar component for main navigation.

### Form Components

- `SignInForm.jsx`: Contains the sign-in form and logic.
- `SignUpForm.jsx`: Contains the sign-up form and validation logic.

## Pages

- `Home.jsx`: Defines the homepage of the application.
- `Profile.jsx`: Defines the user profile page.
- `Dashboard.jsx`: Contains the dashboard page with recent doubts and subjects.
- `Doubts.jsx`: Contains the page listing all doubts.
- `DoubtDetails.jsx`: Contains the page for viewing the details of a single doubt.
- `ChatRoom.jsx`: Defines the page for real-time chat.

## Context

- `AuthContext.jsx`: Manages the authentication state of the user across the application.

## Hooks

- `useToast.js`: Custom hook for showing toast notifications.

## Configuration

- `index.js`: Exports the main API endpoint configuration.

## Styles

- `App.css`: Contains additional global styles for the application.

---

# Backend Documentation

## Overview

The backend of the Doubt Share Platform is built with Node.js and Express.js. It handles user authentication, manages tutor availability, processes doubt requests, and interacts with a MongoDB database.

## Getting Started

### Prerequisites

- Node.js installed
- MongoDB instance running

### Environment Variables

Create a `.env` file in the root of the backend directory with the following environment variables:

```js
PORT=8000
MONGODB_URL=mongodb://localhost:27017
DB_NAME=doubtshare
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
ACCESS_TOKEN_EXPIRY=15m
REFRESH_TOKEN_EXPIRY=7d
CORS_ORIGIN=http://localhost:3000
```

### Installation

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

### Running the Server

Start the server with:

```bash
npm run dev
```

## Directory Structure

- `src/`: The source directory containing all application logic.
  - `controllers/`: Contains controller functions for different data models.
  - `db/`: Handles the connection to the MongoDB database.
  - `middlewares/`: Contains middleware functions, including authentication.
  - `models/`: Defines the Mongoose schemas and models for the application data.
  - `routes/`: Defines the Express routes for API endpoints.
  - `utils/`: Contains utility functions and classes for handling asynchronous operations, API responses, and errors.
  - `config/`: Holds configuration files, including passport strategies for authentication.
  - `constants/`: Contains constant values used throughout the application.
  - `index.js`: The entry point of the backend server.
  - `app.js`: Sets up the Express application with middleware and routes.

## API Endpoints

### User Routes

- `POST /api/v1/users/register`: Registers a new user.
- `POST /api/v1/users/login`: Logs in a user.
- `GET /api/v1/users/current-user`: Retrieves the currently authenticated user.

### Tutor Availability Routes

- `POST /api/v1/tutorAvailability/update-tutor-ping`: Updates the availability status of a tutor.
- `GET /api/v1/tutorAvailability/count-available-tutors`: Counts the number of available tutors.

### Doubt Request Routes

- `POST /api/v1/doubtRequest/create-doubt`: Creates a new doubt request.
- `GET /api/v1/doubtRequest/get-doubts-history`: Retrieves the history of doubts for a student.
- `GET /api/v1/doubtRequest/get-all-doubts`: Retrieves all doubts.
- `GET /api/v1/doubtRequest/get-doubt-by-id/:doubtId`: Retrieves a doubt by its ID.
- `PATCH /api/v1/doubtRequest/update-doubt-status/:doubtId`: Updates the status of a doubt.
- `PATCH /api/v1/doubtRequest/delete-doubt/:doubtId`: Deletes a doubt by its ID.

## Models

### User Model

Represents users in the system, including both students and tutors. It includes fields like `username`, `email`, `password`, and `userType`.

### Doubt Request Model

Represents doubt requests created by students. It includes fields like `studentId`, `tutorId`, `subject`, `description`, `language`, and `status`.

## Middleware

- `auth.js`: Passport middleware for authenticating JWT tokens.

## Configuration

- `passports.js`: Configures passport strategies for handling JSON Web Tokens (JWT).

## Utilities

- `asyncHandler.js`: Utility function for handling asynchronous route handlers.
- `ApiResponse.js`: Utility class for standardizing API responses.
- `ApiError.js`: Utility class for standardizing API errors.

## Database Connection

- `connectDB.js`: Handles the connection to the MongoDB database.

## Controllers

- `user.controller.js`: Contains functions for user-related operations.
- `tutorAvailability.controller.js`: Contains functions for handling tutor availability.
- `doubtRequest.controller.js`: Contains functions for managing doubt requests.
