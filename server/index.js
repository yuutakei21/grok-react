const express = require("express");
const cors = require('cors'); // Import the cors package
const app = express();
const port = 5000;
// Enable CORS for all origins
app.use(cors());

app.post("/api/login", (req, res) => {
  res.send({
    message: "Hello from Express!",
    succes: true,
    token: "sample token",
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
