# Assignment-4 on React + Next.js

## Table of Contents
1. [Technologies Used](#technologies-used)
2. [Setup and Installation](#setup-and-installation)
3. [Project Description](#project-description)
4. [API Endpoint](#api-endpoint)
5. [Frontend Page](#frontend-page)
6. [Unit Tests](#unit-tests)
7. [Error Handling](#error-handling)

## Technologies Used
- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that provides optional static typing, enhancing code quality and maintainability.
- **Node.js**: JavaScript runtime environment used for backend API development.
- **Express.js**: Web framework for Node.js used for creating the backend API.
- **Jest**: JavaScript testing framework for unit and integration tests.
- **React Testing Library**: A library to help test React components by simulating user interactions.
- **CSS Modules / Styled Components**: For styling React components in a modular and reusable way.
- **ESLint**: A tool to enforce coding standards and maintain code quality.

## Setup and Installation

### Clone the repository:
```bash
git clone https://github.com/SamiaAurin/nextjs.git
cd nextjs
```
```bash
npm install
```
Set up environment variables:
Make sure to add any environment-specific variables if required in your .env file (e.g., for connecting to your API).

## Project Description
This project converts a traditional HTML and CSS website into a dynamic, component-based React application using Next.js. The application fetches hotel data from a previously developed backend API using Node.js and Express.js. It supports server-side rendering (SSR) for SEO and performance optimization.

The project aims to demonstrate integration between a React frontend and an Express.js API, ensuring scalability, maintainability, and type safety using TypeScript. Unit tests are written for critical components and API endpoints to ensure the reliability of the application.

## Features
- **Dynamic Hotel Information Retrieval** : Seamlessly fetch and display detailed hotel information through a backend API.
- **Social Media Integration**: Easily share hotel details with others using the integrated social media sharing feature using share button.
- **Interactive Image Gallery** : View gallery images in a responsive and user-friendly modal. Only hotels with more than five images will display the interactive gallery modal, while those 
    with fewer images will not include this feature.

## Project Structure

The project is organized into the following structure:
- nextjs
  - backend (Please again check the README file of backend to get better understanding.)
  - frontend
    - mocks
      - fileMock.js
      - styleMock.js
    - components
      - _tests_
        - Gallery.test.tsx
        - PropertySection.test.tsx
      - Gallery.tsx
      - Navbar.tsx
      - PropertySection.tsx
    - public
      - images
      - Lameridian - Your Hotel Guide.pdf
      - UnitTest.pdf
    - src
      - pages
        - hotel-details
          - [slug]
            - [hotelid].tsx
        - 404.tsx
        - _app.tsx
        - _document.tsx
        - index.tsx
    - styles
      - globals.css
    - .eslintrc.json
    - .gitignore
    -  jest.config.ts
    -  jest.setup.ts
    -  next.config.ts
    -  package-lock.json
    -  package.json
    -  postcss.config.mjs
    -  tailwind.config.ts
    -  tsconfig.json
    -  README.md

### Run the project:
The project consists of two separate folders: backend and frontend.

**Backend Folder**: This folder contains the API developed using Node.js and Express.js, based on the previous assignment. Before running the frontend, ensure you read the README file inside the backend folder for setup instructions and to understand the required configuration for the API.

**Frontend Folder**: This folder contains the Next.js application for the frontend. It communicates with the backend API to fetch dynamic data.

To run the project, follow these steps:

**1. Start the Backend**: Navigate to the backend folder and run the following command to start the API server:

```bash
cd nextjs/backend
npm run dev
```
This will start the backend application at http://localhost:3002.

**2. Start the Frontend**: Navigate to the frontend folder and run the following command to start the frontend server:

```bash
cd nextjs/frontend
npm run dev
```
This will start the frontend application at http://localhost:3000. and it will run the src/pages/index.tsx , a static file which will contain the previous HTML-CSS Assignment's codes.

This will run both the backend and frontend servers concurrently, enabling the frontend to fetch data dynamically from the API.


### API Endpoint

**GET** `/hotel-details/{slug}/{hotel-id}`

This endpoint fetches the details of a hotel based on the provided `slug` and `hotel-id`.

**Example Request**: 
http://localhost:3000/hotel-details/lameridian/1731479032307 
or 
http://localhost:3000/hotel-details/juneau-vacation-home/1731921707038

This will display a frontend page showing the hotel details, such as title, description, images, and amenities, rooms descriptions. The layout and design of the page are based on the structure and style detailed in the **`Lameridian - Your Hotel Guide.pdf`** file, which can be found in the **`frontend` folder**.

### Frontend Page
The **`Lameridian - Your Hotel Guide.pdf`** file, located in the `frontend` folder, provides a visual guide on how the frontend page should look, including:
- How hotel details are presented
- Layout for the images and descriptions
- General styling and structure

### Unit Tests
Please Read **`UnitTest.pdf`** for necessary install dependencies and file configurations.

To run the unit tests for the project, use the following command:

```bash
npm test
```
Run the following command to generate a coverage report: 
```bash
npm run test:coverage 
```
### Error Handling 
**Error Handling**: The project includes error handling for cases such as when the hotel is not found, displaying a custom 404 page with a friendly error message.

