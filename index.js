
const express = require('express');
bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const mongoose = require('mongoose');
require('./Models/eventModel');
require('./Routes/eventRoute')(app)
const URI = require('./config/db')

mongoose.connect(URI.database, { useUnifiedTopology: true })
.then(() => console.log(`Connected to Database`))
.catch( err => console.log(err));

const Port = process.env.PORT || 4000;
app.listen(Port, () =>  console.log(`Server started on ${Port}`));
