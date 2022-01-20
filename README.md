# Feedback Portal UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run load-test`

Starts a mock load test that

- starts at 1 arrival rate for 30 seconds
- ramps up to 5 arrival rate for 180 seconds
- ramps down to 1 arrival rate for 30 seconds

### `npm run spike-test`

Starts a spike test that

- starts at 1 arrival rate for 10 seconds
- ramps up to 20 arrival rate for 60 seconds
- ramps down to 1 arrival rate for 10 seconds

### `run local build`

npm i
npm run start

### `run production build`

npm run build
npm install -g serve
serve -s build
