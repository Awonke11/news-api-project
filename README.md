# news-api-project
This is a project made with [Vite](https://vitejs.dev/guide/) and [React](https://react.dev/). For the news the project utilizes the [News API](https://newsapi.org/). The purpose of this project is to explore how to work with API's and how to enable user interactivity.
🚀 This project is 100% **mobile responsive**.

## Libraries used
- For the loader: [React Spinners](https://mhnpd.github.io/react-loader-spinner/)
- For the Icons: [React Icons](https://react-icons.github.io/react-icons/)

## Getting started
- First you will need an account with the [News API](https://newsapi.org/);
- After getting the account, you need to ```fork``` or ```clone``` this repo.
- After that, open your terminal on the project directory and run the following command:
```terminal
npm install
or
yarn install
```
- Since we are using the [News API](https://newsapi.org/) you will need your own api key:
  - Navigate to the [News API](https://newsapi.org/) and get your apiKey.
  - Create a ```.env``` file and add the following code:
    ```env
    VITE_REACT_APP_API_KEY=apiKey
    ```
  - In the place of the "apiKey", replace it with your API key.
- Then to run the project and display it on your browser, you use the following command:
```terminal
npm run dev
or
yarn run dev
```
- This will open the local version of the website at http://localhost:5173/

## Contribute
😊 If you have additional features that you would like to add, feel free to push to the ```master``` branch.

## Deploy
- I recommend deploying your project with [Vercel](https://vercel.com/)
- Make sure that your [News API](https://newsapi.org/) is not on **Developer plan** so that your application can fetch the news data during production otherwise, you will get an error during production.
- I am on **Developer plan** hence I have not deployed this application, why? This project is for practice purposes.
