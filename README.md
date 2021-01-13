# Node.js Express Note Taker Application [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This is an Express-driven application built as a project for my fullstack coding bootcamp. It allows to the user to create, view, and delete notes from the web application. This application uses express, node.js, and API functionality to allow the data to persist with the user beyond one browser session. This application can be found deployed at [Heroku](https://dashboard.heroku.com/apps/warm-tundra-71017).

## Table of Contents

[User Story & Acceptance Criteria](#user-story-acceptance-criteria) 

[Installing/Dependencies](#installingdependencies)  

[Usage Information](#usage-information)

[Walkthrough](#walkthrough)  

[Contributing to this project](#contributing-to-this-project)  

[Questions?](#questions)  

[License](#license)

## User Story & Acceptance Criteria
#### User Story
I was given the following user story to guide my development:

```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles
```

#### Acceptance Criteria
As a part of this project, I was also provided with the following standards that my project should meet:

Application should allow users to create and save notes.

Application should allow users to view previously saved notes.

Application should allow users to delete previously saved notes.


## Installing/Dependencies
```npm i express```

Adding a "start" script to the package.json file: "start": "node server.js"

## Usage Information
Clone this project, install the required dependencies, run 'node server.js' in your terminal, and utilize the browser to interact with the App.

OR launch the app through the heroku link found [here](https://warm-tundra-71017.herokuapp.com/).

## Walkthrough

### How Its Working

The main function of this application comes from three folders and one file on the root level of the application. The first folder, db, contains the db.json file that functions as the application's own API, allowing notes to be deleted, added, stored, and viewed to the user upon their command. The second folder is Public, which contains the main CSS, JS, and HTML files (those that were provided to us by the assignment). The third folder is Routing, which contains the Express routes I wrote for both the API requests as well as the HTML page changes. The fourth root level functionality comes from the server.js file, which sets up the server to work with localhost or Heroku, as well as requiring the Routing paths built in the self-titled folder.


 #### How to Use It
 
![Gif Walkthrough of Application](https://media.giphy.com/media/O3D1vaPYA8Gta7cx6q/giphy.gif).

To begin using the application, click the "get started" button on the homepage. From there, view currently existing notes or create a new one! To create a new note, if one is previously selected, de-select a note by clicking anywhere else on the screen, and then begin filling out the form shown! Your notes will list on the left-hand side, where you can either click the name to view them, or click the red trashcan to delete them! Upon refreshing, this application will retain your notes.

## Contributing to this project
Pull requests are welcome! Find my contact information below to reach out about collaborating with me.

## Questions?
[Laura Baumann](https://github.com/thelbaumann) -- You can reach me anytime for questions or collaboration at l.bmann@yahoo.com.
## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
