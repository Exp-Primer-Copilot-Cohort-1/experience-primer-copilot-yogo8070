// Create web server
// Create a new web server using the express module
const express = require("express");
const app = express();
const port = 3000;
// Create an array of comments
const comments = [
  { name: "Alex", comment: "I love this!" },
  { name: "Joe", comment: "Good job" },
  { name: "Jane", comment: "Nice work" },
];
// Create a route to get all comments
app.get("/comments", (req, res) => {
  res.json(comments);
});
// Start the web server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
