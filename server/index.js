const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./authRouter.js");
const tasksRouter = require("./tasksRouter.js");
const cors = require('cors');

const PORT = 5000;
const DB_URL = 'mongodb+srv://user:123user@cluster0.y5wqq.mongodb.net/auth?retryWrites=true&w=majority'

const app = express();

app.use(express.json())
app.use(cors())
app.use('/auth', authRouter)
app.use('/tasks', tasksRouter)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology: true, useNewUrlParser: true})
        app.listen(PORT, () => console.log('server started on port 5000'))
    } catch(e) {
        console.log(e)
    }
}
startApp()

