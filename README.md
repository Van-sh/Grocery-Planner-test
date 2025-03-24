# Getting Started with Create React App

[![Build Project](https://github.com/SakshiShreya/Grocery-Planner/actions/workflows/main.yml/badge.svg)](https://github.com/SakshiShreya/Grocery-Planner/actions/workflows/main.yml)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Environment Variables

This project uses environment variables to configure certain aspects of the app. Use `.env1` and `.env.development1` files to create `.env` and `.env.development` files respectively. You need to create the secret variables in the `.env.development` file for development purpose.

### Available Environment Files

- **.env**: Contains variables for the production environment.
- **.env.development**: Contains variables for the development environment.

### How to Use

Ensure you have the appropriate environment variables set up in the `.env` and `.env.development` files. For example:

#### List of environment variable(s) used in this project

- `VITE_API_URL`

### How Environment Variables Work in Create React App

- **Development**: When running `npm start`, the environment variables from `.env.development` are loaded.
- **Production**: When running `npm run build`, the environment variables from `.env` are used.

> **Note:** All environment variables in Create React App must be prefixed with `VITE_` to be accessible within the application.

## Icons

Icons are from [Hero Icons](https://heroicons.com/)
