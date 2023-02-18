require("dotenv").config();
const express = require("express");

//express
const app = express();

//port

const port = process.env.PORT || 4000;

// listen for reqs
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
