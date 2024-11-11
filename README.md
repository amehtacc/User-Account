# User Account

This is a user registration and login system that allows users to register, log in, view, and edit their profile information. It's built using React and utilizes the browser's local storage to save user data.

## Features
- User Registration: New users can register by providing their name, email, username, password, and address details.
- Login: Registered users can log in to access their profile.
- Profile Management: Users can view and edit their profile information (except their username).
- Local Storage: All user data is saved locally in the browser, so it persists even after a page refresh.
- Logout: Users can log out, ending their session and removing login status from local storage.

## Technologies Used
- React: For building UI components and managing state.
- Local Storage: To store user data directly in the browser, making the app persistent across sessions.
- TailwindCSS: For styling the components and layout.

## Getting Started
Follow these instructions to get a copy of the project and running on your local machine for development and testing purposes.

### 1. Prerequisites
Ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### 2. Installation
1. Clone the repository:
```
git clone https://github.com/amehtacc/User-Account
cd User-Account
```
2. Install dependencies:
```
npm install
```
3. To start the application:
```
npm run dev
```
4. Open your browser and go to http://localhost:3000 to view the app.

## Code Walkthrough
### Login Page
The login component includes a form where users enter their username and password. When submitted, the credentials are checked against stored data in local storage. If valid, the user is logged in and redirected to their profile dashboard.

### Registration Page
The registration component collects user data, performs validation, and saves the information to local storage. If a username or email already exists, an error message is displayed.

### Dashboard
Once logged in, the user can view and edit their profile details on the dashboard. Changes are saved to local storage, ensuring data persistence. The dashboard also has a logout button, which clears the login session.

## Contact
For any questions or feedback, feel free to contact me.
