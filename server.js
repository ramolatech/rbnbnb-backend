const express = require("express");
const cors = require('cors');
const dbConfig = require("./config/datatbase.config");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
//middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//connecting to the datatbase

mongoose.connect(
  dbConfig.url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (error, db) => {
    if (error) {
      console.log("error occured", error);
      process.exit();
    } else {
      console.log("connected to DB");
      console.log(`Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`)
    }
  }
);

app.get("/", (req, res) => {
  res.json({ message: "welocome in here" });
});
require('./app/routes/sign-up.js')(app);
require('./app/routes/host-register.js')(app);
require('./app/routes/sign-in.js')(app);

app.listen(3001, () => {
  console.log(`server is running on port 3000`);
});
