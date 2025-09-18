const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;
const mongoose = require('mongoose');
require('dotenv').config();

const mongoDBLink = process.env.MONGO_URL

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
    res.send('Server is running');
})


mongoose.connect(mongoDBLink, { dbName: "youtube_clone", useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port} this is a youtube clone project`);
    })
}).catch((err) => {
    console.log(err.message);
    console.log("Error while connecting to mongoDB");
})
