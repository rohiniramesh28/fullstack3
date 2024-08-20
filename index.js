const express = require('express');
const bodyParser = require('body-parser'); // Correct import

const app = express();
const port = 5000;

// Use body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the "static" directory
app.use(express.static("static"));

// Define a route for the home page
app.get("/", (req, res) => {
    res.render("forms"); // Render the 'forms.ejs' template
});

// Start the server
app.listen(port, () => {
    console.log(`Server is started on port ${port}..`);
});
