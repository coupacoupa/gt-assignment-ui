# Feedback Portal UI

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run local

Requires backend to be running:
https://github.com/coupacoupa/gt-assignment-api

Runs on port 3000

In the project directory, you can run:

### `run local build`

```bash
npm i
npm run start
```

### `run production build`

```bash
npm run build
npm install -g serve
serve -s build
```

# User Flow

Description on how to use applications

## Submit Submission

Using /submit route

- Fill in form
- Submit form

## View Submissions

As there is no authentication in place, Login fakes a login by saving email and contact to state

Using /status route

- Login
- View submissions
- Click on drop down list to view feedback

## Run performance test

In the project directory, you can run:

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
