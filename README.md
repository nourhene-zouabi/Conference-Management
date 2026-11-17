# Conference Management

A web application developed with **Angular 21** as part of **Prosit 1 and Prosit 2**.

The project focuses on conference management, component organization, data binding, Angular directives, pipes, and communication between components.

## Project Overview

Conference Management is an Angular application that allows users to browse upcoming conferences, search for conferences, view their details, and register for available events.

The application is organized into reusable Angular components to ensure modularity and maintainability.

## Features

- **Modular interface:** Header, navigation bar, user profile, friends list, notifications, and footer.
- **Conference listing:** Display upcoming conferences with their information.
- **Search:** Find conferences by title.
- **Conference details:** Display information about the selected conference.
- **Registration:** Register for a conference and update the participant count.
- **Available places:** Display the remaining places and indicate availability using button colors.
- **Dynamic interface:** Automatically update conference information when data changes.

## Technologies Used

- Angular 21
- TypeScript
- HTML5
- CSS3
- Angular Signals
- Angular Pipes
- Angular Control Flow (`@if`, `@for`, `@empty`)

## Project Structure

```text
Conference-Management/
│
├── public/
│
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── conference-details/
│   │   │   ├── conference-list/
│   │   │   ├── footer/
│   │   │   ├── friends-list/
│   │   │   ├── header/
│   │   │   ├── navbar/
│   │   │   ├── notification-list/
│   │   │   └── profile-user/
│   │   │
│   │   ├── models/
│   │   │   └── conference.ts
│   │   │
│   │   ├── app.config.ts
│   │   ├── app.css
│   │   ├── app.html
│   │   ├── app.routes.ts
│   │   ├── app.spec.ts
│   │   └── app.ts
│   │
│   ├── index.html
│   ├── main.ts
│   └── styles.css
│
├── public/
├── angular.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json
```

## Prosits Covered

### Prosit 1 – Components, Data Binding, Directives and Pipes

- Creation and organization of reusable components.
- Implementation of the conference list.
- Use of Angular Signals for reactive data management.
- Implementation of search functionality.
- Use of Angular Pipes for uppercase titles and date formatting.
- Dynamic styling based on conference availability.
- Registration functionality with participant count updates.

### Prosit 2 – Communication Between Components

- Communication between parent and child components.
- Use of Angular `input()` to transfer data.
- Selection of a conference from the list.
- Automatic display of the selected conference details.
- Synchronization of participant information between the list and details components.

## Installation and Execution

### Prerequisites

- Node.js
- npm
- Angular CLI 21

### 1. Clone the repository

```bash
git clone https://github.com/nourhene-zouabi/Conference-Management.git
```

### 2. Navigate to the project

```bash
cd Conference-Management
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
ng serve
```

Open your browser and navigate to:

http://localhost:4200/

The application automatically reloads when source files are modified.

## Build

To build the project:

```bash
ng build
```

The generated build files are stored in the `dist/` directory.

## Author

Developed as part of the Angular practical work (Prosit 1 and Prosit 2).