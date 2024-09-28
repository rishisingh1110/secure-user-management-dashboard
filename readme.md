# Secure User Management Dashboard

## Project Overview
The **Secure User Management Dashboard** is a web application built using modern technologies that provide user authentication and data management features. The dashboard includes sign-in and sign-up functionalities and a protected area displaying a list of users. The application emphasizes security and user experience.

## Features Implemented
1. **User Authentication**
   - **Sign In**: Users can log in using their email and password.
   - **Sign Up**: New users can create an account with an email and password.

2. **Protected Routes**
   - The dashboard is protected and can only be accessed by authenticated users. If a user tries to access the dashboard without being logged in, they are redirected to the sign-in page.

3. **User Dashboard**
   - Authenticated users can view a list of users fetched from the [ReqRes API](https://reqres.in/api/users).

4. **Redux for State Management**
   - Redux is used to manage user authentication state across the application, ensuring a single source of truth for the authentication status.

5. **Reusable Components**
   - Common UI elements like forms and buttons are implemented as reusable components to promote consistency and reduce code duplication.

6. **Styled with Tailwind CSS**
   - The application is styled using Tailwind CSS, allowing for a responsive and visually appealing layout.

7. **Unit Testing**
   - Critical parts of the application, such as authentication logic and HTTP service interactions, are covered with unit tests using a Test-Driven Development (TDD) approach.

## Technologies Used
- **React**: A JavaScript library for building user interfaces, used to create a dynamic and responsive frontend.
- **TypeScript**: A superset of JavaScript that adds static typing, improving code quality and maintainability.
- **Vite**: A fast build tool that offers a smooth development experience, including hot module replacement.
- **Redux**: A predictable state container for JavaScript apps, used for managing application state.
- **Tailwind CSS**: A utility-first CSS framework that allows for rapid UI development with a focus on responsiveness and customization.
- **ReqRes API**: A mock REST API used for user authentication and data retrieval, enabling easy testing without backend dependencies.
- **React Router**: A routing library for React that enables navigation between different views and handling of protected routes.
- **Jest**: A testing framework used for writing and running unit tests for the application.

## Snapshots
Here are some snapshots of the application:

1. ![Snapshot 1](https://i.ibb.co/Q9BP7v9/Screenshot-205.png)
2. ![Snapshot 2](https://i.ibb.co/pwDJfTg/Screenshot-204.png)
3. ![Snapshot 3](https://i.ibb.co/VBXMK3R/Screenshot-203.png)



## Login Credentials
- **Email**: eve.holt@reqres.in
- **Password**: cityslicka

## Setup
- Clone in your local
- do 'npm i' in root directory
- do 'npm run dev' to run the project
- to run test, do 'npm run test'

## Conclusion
The **Secure User Management Dashboard** is a comprehensive application that demonstrates best practices in modern web development. By leveraging the latest technologies, it provides a user-friendly experience while ensuring security through proper authentication mechanisms.
