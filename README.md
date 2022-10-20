# LAP 2 Code-Challenge

# AnonyMouse Tail Tales

## Brief

Create a web app to allow for (optionally) anonymous thought posting.

Base the design aesthetic on a platform such as [Telegraph](https://telegra.ph/).

### Requirements

- The app should have a browser client allowing users to write a post with a title, a pseudonym and a body
- No login should be required to create a post or visit a post
- When a user hits 'publish', the post should be stored in a database and the client redirected to a show path
- The user should be able to access their post using that show path even after a server restart
- Edit and delete functionality is not required

## Installation & Usage

### Installation

- Clone or download the repo.
- Open terminal and navigate to `/server` folder.
- Run `npm install` to install dependencies.

### Usage

- **Make sure you are in `/server` before running `npm` commands**
- Run `npm run start` to launch server.
- Run `npm run dev` to launch development server.
- Run `npm run test` to launch test suite.
- View changes on local port `http://127.0.0.1:5500/client/index.html`
- Create a account and then login
- Create and Store your stories

## Wins & Challenges

### Wins

- - Learnt how to use Login Authentication packages
- - First time using MongoDb
- - Dark Mode & Logout Functionality

### Challenges

- - Setting up Authentication with jwt
- - Connecting frontend and backend

### Links

- Challenge Brief - https://gist.github.com/getfutureproof-admin/8ea762f0fbe7e98ac3c67b78ccbd1330
- Learning Telegraph - https://telegra.ph/How-Does-Telegraph-Work-10-19, https://telegra.ph/How-Does-Telegraph-Work-10-19-2
