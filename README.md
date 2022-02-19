# Getting Started

## Install dependencies
> To run locally you will first need to install the dependencies
```bash
npm i
```

## Generate a GitHub personal access token

> Follow steps [here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) to generate a personal GitHub token

### Request the following scopes:
- user
- public_repo
- repo
- repo_deployment
- repo:statuss
- read:repo_hook
- read:org
- read:public_key
- read:gpg_key

### Add the token to your environment variables

```bash
touch .env
```

> Add the following line of code to your **.env** file

    REACT_APP_GITHUB_ACCESS_TOKEN="[YOUR-TOKEN-HERE]"  


## Run the Project

In the project directory, you can run:

```bash
npm start
```

Open [Local Development Environment](http://localhost:3000) to view it in your browser.

## Test the Project

```bash
npm test
```

Launches the test runner

## Using the App

> Search for GitHub users top repos in the search bar

> Press enter to see top 5 results ranked by stars

> Press the clear button to clear the search results