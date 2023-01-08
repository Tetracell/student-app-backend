// Start the server and listen for incoming requests through our api

// Import the application
const app = require("./app");

// Have the app listen
const PORT = 9000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
