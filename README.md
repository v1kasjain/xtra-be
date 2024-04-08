# Basic Conference App

This is a basic conference app built using Node.js with Express framework. The app includes functionality for user authentication, creating meetings, and managing participants. Additionally, it features real-time communication for countdown and raise hand functionality over WebSocket using Socket.IO.

## Installation

1. Clone this repository to your local machine.
2. Install dependencies by running the following command:
`npm install`

## Usage

To start the server, run the following command:
`npm start`

By default, the server runs on port 3000. You can access the app via [http://localhost:3000](http://localhost:3000) in your web browser.

## Dependencies

The app uses the following npm packages:
- `cookie-parser`: "^1.4.6"
- `cors`: "^2.8.5"
- `express`: "^4.19.2"
- `http`: "^0.0.1-security"
- `jsonwebtoken`: "^9.0.2"
- `mongodb`: "^6.5.0"
- `nodemon`: "^3.1.0"
- `socket.io`: "^4.7.5"
- `uuid`: "^9.0.1"

## Routes

- `POST /signup`: Create a new user.
- `POST /login`: Authenticate user login.
- `GET /create-meeting`: Create a new meeting (Requires authentication).
- `POST /create-participant`: Add a participant to a meeting.

## Real-time Communication

The app utilizes WebSocket using Socket.IO for real-time communication. This is used for the countdown and raise hand functionality during conferences.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
