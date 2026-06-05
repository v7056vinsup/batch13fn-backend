const express = require("express");
const app = express();
const mongoose = require('mongoose')
const user = require("./Routes/User")
const task = require("./Routes/Task")
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config();
app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("Connected to database");
})
.catch((err) => {
    console.log("Error connecting to database", err);
});

app.use("/user", user);
app.use("/task", task);
