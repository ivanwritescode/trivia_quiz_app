# Zeniark Skills Examination Solution

This repository contains my solution for the skills examination for Zeniark Philippines Consulting Corp.

## Project Directory Structure

```
.
├── public
└── src/
    ├── components/
    │   ├── Icons.tsx
    │   └── PageControl.tsx
    ├── pages/
    │   ├── Home.tsx
    │   ├── Quiz.tsx
    │   └── Results.tsx
    ├── store/
    │   └── reducer.ts
    ├── styles/
    │   ├── app.scss
    │   ├── main.scss
    │   └── reset.scss
    ├── UI/
    │   ├── Button.tsx
    │   ├── Card.tsx
    │   ├── CardBody.tsx
    │   ├── CardControl.tsx
    │   ├── CardFooter.tsx
    │   └── CardHeader.tsx
    ├── util/
    │   ├── constants.ts
    │   ├── helpers.ts
    │   ├── interfaces.ts
    │   ├── questions.ts
    │   └── types.ts
    ├── App.tsx
    └── index.tsx
```

## Description

This project is a Trivia Quiz App developed as a solution for the Zeniark ReactJS Coding Challenge. It encompasses multiple directories and files, each responsible for distinct aspects of the application's functionality and structure.

The `components` directory contains components that serve specific purposes within the application, providing a clear separation of concerns and encapsulating their functionality.

The `pages` directory houses the primary components responsible for rendering the three main screens of the application: the Home page, Quiz page, and Results page. Each page component represents a distinct section of the application's user interface.

The `store` directory holds state implementations such as reducers and actions

The `styles` directory contains the SASS/SCSS preprocessor files, leveraging the SASS dependency. The use of SASS eliminates the need for manual compilation, allowing for more efficient and maintainable styling.

The `UI` directory consists of reusable UI components that can be utilized throughout the application. These components have a generic nature, making them suitable for various contexts within the app. By centralizing the UI components in this directory, code reusability and consistency are promoted.

The `util` directory serves as a repository for helper functions, constants, and interfaces that can be reused throughout the application. These utilities provide common functionalities, facilitate code organization, and promote maintainability by encapsulating commonly used logic and data structures.

By structuring the codebase in this manner, the application benefits from improved modularity, code reusability, and organization. This organization scheme enhances the maintainability and scalability of the project by promoting clear separation of concerns and facilitating efficient collaboration among developers.


## Getting Started
```bash
# Clone the repository
git clone https://github.com/ivanwritescode/zeniark-reactjs-coding-challenge.git

# Navigate to the project directory
cd zeniark-reactjs-coding-challenge/web-app 

# Install the dependencies
npm install

# Start the development server
npm start 
```