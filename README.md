# Task description

- The Application should  use the GitHub Graphql server to display all the topics related to the term "react".
- Each topic should display how many stargazers they have.
- The Application should show the related topics of the clicked topic.

# Instructions
#### How to start the project
1. install the libraries with `npm install`
2. duplicate and rename the file `example.env` to `.env`
3. generate GitHub token here [https://github.com/settings/tokens](https://github.com/settings/tokens) You should be logged on GitHub
4. replace `[YOUR_GITHUB_TOKEN]` with your GitHub token in the `.env` 
5. run the command `npm run start`
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

#### How to run tests
1. open the terminal
2. run the command: `npm run test`

#### `.env` description
- `REACT_APP_GRAPHQL_SERVER_URL` -> It store the Graphql server url
- `REACT_APP_GITHUB_TOKEN`  -> It store the GitTub token which is needed to consume the Graphql server

## future improvements
- Implement redux to get a better state management
- Refactor the files which use the Topic context to use the store context
- Enable the coverage in the unit test to make sure that we are covering all the cases


> Mauricio Jesus Hernandez Diaz - Encora

