// Create web server
// Create a route to handle POST requests to /comments
// Create a route to handle GET requests to /comments

const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());

const comments = [];

app.post('/comments', (req, res) => {
    comments.push(req.body);
    res.status(201).send(req.body);
});

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Test the routes using curl or Postman
// curl -X POST -H "Content-Type: application/json" -d '{"text":"Hello World"}' http://localhost:4000/comments
// curl http://localhost:4000/comments