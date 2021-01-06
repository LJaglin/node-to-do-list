const express = require('express');

//routes
const itemsRoute = require('./routes/items');

const port = 3000;

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

//using imported routes
app.use(itemsRoute);

// start server
app.listen(port, () => {
  console.log(`Start listening on port: ${port}`);
});
