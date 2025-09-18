const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', (req, res, next) => {
    res.send('Server is running');
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port} this is a youtube clone project`);
})