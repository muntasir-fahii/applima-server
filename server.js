require("dotenv").config();
const express = require("express");
const cors = require("cors");
//express
const app = express();
const mongoose = require("mongoose");
const projectRoutes = require("./routes/projectRoute");

//port
const port = process.env.PORT || 4000;

//middlewares
app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/projects", projectRoutes);

//mongoDb
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    // listen for reqs
    app.listen(port, () => {
      console.log(`connected to mongo and listening on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
