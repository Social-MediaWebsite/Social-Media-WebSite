const express = require("express");
const userRouter = require('./routes/users.routes')
const cors = require('cors')
// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// const db = require('./database-mysql');
// const db = require('./database-mongo');
const db = require('./database-mysql');
const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/../client/dist"));
app.use(cors())

app.use("/api/socialMedia", userRouter);

app.listen(PORT, function () {
  console.log("listening on port 3000!");
});
