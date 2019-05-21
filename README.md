# NY Times Articles

NY Times Most Popular Articles - React App

## Documentation

[NY Times API Documentation](https://developer.nytimes.com/docs/most-popular-product/1/overview)

## Description

Build a simple app with React to hit the NY Times Most Popular Articles API and show a list of articles, that shows details when items on the list are tapped (a typical master/ detail app).

## Installation

Use _npm_ to install the dependencies inside the root directory.

```bash
npm install
```

## Usage

Follow the instructions here to create an account, in order to generate an API Key:

[NY Times API - Get Started](https://developer.nytimes.com/get-started)

Paste the generated API Key inside `api.js`: `API_KEY='your-api-key'`

To start the app:

Run:

```bash
npm start
```

It will automatically open the following URL inside your browser: `http://localhost:8080/`

## Build the app

```bash
npm run build
```

This will create a production version of the app.

`MacOS`: To test the production build, navigate to `./dist` folder and run:

```bash
python -m SimpleHTTPServer 8080
```

Open `http://127.0.0.1:8000` in browser.

## Test the app

Run the following commands to run the unit tests and generate coverage reports:

```bash
npm run test
```

To update the snapshots, run:

```bash
npm run test -- -u
```

To generate test coverage reports, run:

```bash
npm run test:coverage
```

## License

[MIT](https://github.com/LexIliev/ny-times-articles/blob/master/LICENSE)
