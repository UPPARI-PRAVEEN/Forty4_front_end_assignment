# Forty4 Front End Assignment

This project is a React-based user management application built with Vite, Redux Toolkit, React Router, and Axios. It fetches user data from the DummyJSON API, displays it in a dashboard, allows users to search by username, view detailed information, create new users, and edit existing user records.

## Overview

The application is designed as a simple front-end assignment to demonstrate:
- Component-based React development
- Routing between multiple screens
- Global state management with Redux Toolkit
- API data fetching with Axios
- Form handling for creating and editing user profiles

## Features

- Fetch and display a list of users from the DummyJSON API
- Search users by username in real time
- View each user in a card layout on the dashboard
- Open a detailed view of a selected user
- Create a new user and add it to the local Redux state
- Edit an existing user's information
- Navigate between the dashboard, create/edit page, and details page

## Tech Stack

- React 19
- Vite
- Redux Toolkit
- React Router DOM
- Axios
- CSS


## Main Components

### Dashboard
The dashboard is the main landing page. It:
- Loads user data from the API on first render
- Stores the data in Redux state
- Shows a search input for filtering users by username
- Displays user cards
- Lets the user navigate to the full details page
- Provides a button to create a new user


### Create User
The create/edit screen contains a form for entering user information. It supports:
- Basic information such as first name, last name, username, email, phone, and age
- Address details including street, city, state, postal code, and country
- Geographic coordinates for latitude and longitude
- Saving a new user or updating an existing one

### User Details
The details screen shows all available information for a selected user, including:
- Personal information
- Contact details
- Address information
- Geographic coordinates
- Edit and back navigation buttons

## State Management

The app uses Redux Toolkit for global state.

### Store
The store is configured in:
- src/components/store/store.js

### User Slice
The user slice manages:
- userData: the list of users currently loaded in the app
- setUsers: replaces the user list with freshly fetched data
- addUser: adds a newly created user
- updateUser: updates an existing user in the list

## Routing

The app uses React Router with the following routes:
- / -> Dashboard page
- /create -> Create/Edit user page
- /userDetails -> User details page

## Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the local Vite URL shown in the terminal

## Available Scripts

```bash
npm run dev
```
Starts the development server.

```bash
npm run build
```
Builds the project for production.

```bash
npm run lint
```
Runs ESLint to check the codebase.

```bash
npm run preview
```
Preview the production build locally.

## Functionality Flow

1. When the app starts, it fetches user data from the DummyJSON API.
2. The dashboard displays the users as cards.
3. Typing in the search box filters users by username.
4. Clicking a card opens the detailed view for that user.
5. Clicking the add user button opens a form to create a new profile.
6. Saving the form updates the Redux store and redirects back to the dashboard.
7. Editing a user from the details page pre-fills the form with current values.

## Notes

- New users are stored temporarily in the Redux state and are not persisted to a backend service.
- The project is intended as a front-end  and focuses on Basic UI, routing, and state management.
- Search filtering is based on the username field.
