# NODE.JS APPS

This repo contains simple node.js applications that I built during my studies in the Complete Node.js Developer course delivered by Andrew Mead. 

- **Chat app** - Chat application built with Express.js. The app relies on Socket.io to enable real-time, bidirectional, and event-based communication.
- **Task manager API** - Fully functional API to create and manage tasks in a secure way. The app uses express.js, mongoose, mongodb, jsonwebtoken, multer and sharp.
- **Weather app** - Web application for getting current weather data based on location. The app leverages express.js, hbs, and request along with the external mapbox and weatherstack APIs.
- **Notes app** - CLI application for writing and managing notes via terminal commands. It utilizes yargs for argument parsing and chalk for styling terminal outputs.


# Technologies

- Node.js: 14.4.0
- Express.js: 4.16.4
- Socket.io: 3.0.5
- MongoDB: 3.6.3
- Mongoose: 5.11.9
- Multer: 1.4.2
- Sharp: 0.27.0
- Hbs: 4.1.1
- Request: 2.88.2
- Chalk: 2.4.1
- Validator: 13.5.2
- Yargs: 16.2.0
- Nodemon: 2.0.6
- Bad-words: 3.0.4

# Installation

- Fork and git clone repo. 

# Usage

- Chat app
    - Go to https://chat-app-dp-node.herokuapp.com/
    - Provide username / chat room name and click "Join"

    OR

    - Cd into chat-app folder
    - Run 'npm run dev'

- Task manager API
    - Go to https://task-manager-api-dp.herokuapp.com/ to read the API documentation
    - Use [Postman](https://www.postman.com/) to interact with the API

- Weather app
    - Go to https://weather-app-dp.herokuapp.com/ 

    OR

    - Cd into web-server folder
    - Run 'npm run dev'

- Notes app
    - Cd into notes-app folder
    - Use 'node app.js add --title="[your note title]" --body="[your note body]"' to add a note
    - Use 'node app.js list' to list your notes
    - Use 'node app.js read  --title="[your note title]"' to read a specific note
    - Use 'node app.js remove  --title="[your note title]"' to remove a specific note
