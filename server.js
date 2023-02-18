require("dotenv").config();
const express = require("express");

//express
const app = express();
const projectRoutes = require("./routes/projectRoute");

//port
const port = process.env.PORT || 4000;

//middlewares
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

// listen for reqs
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
