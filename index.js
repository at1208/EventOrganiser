
const express = require('express');
const Event = require('./routers/events');

 const app = express();


app.use(express.json()); //It parses incoming requests with JSON payloads and is based on body-parser.
app.get(express.urlencoded({ extended: true }));// It parses incoming requests with urlencoded payloads and is based on body-parser.

app.use('/', Event);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
