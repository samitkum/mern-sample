const express = require("express");
const mongoose = require("mongoose");
const db = require("./config/keys").mongoURI;
const PORT = process.env.PORT || 5000;
const tasks = require("./routes/api/Tasks");
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(db, options)
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

const app = express();
app.use(express.json());
app.use("/api/tasks", tasks);
app.listen(PORT, (req, res) => {
  console.log("server connected to port " + PORT);
});
