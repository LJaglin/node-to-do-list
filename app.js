const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

//routes
const tasksRoute = require('./routes/tasks');

const port = 3000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

//using imported routes
app.use(tasksRoute);

// start server
app.listen(port, () => {
  console.log(`Start listening on port: ${port}`);
});
