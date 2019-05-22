
const express = require('express');
const Event = require('./routers/events');

 const app = express();


app.use(express.json()); // it is used to parse the body request by the client
app.get(express.urlencoded({ extended: true }));//it is used to take req in the header by the client

app.use('/', Event);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
