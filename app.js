const express = require('express');

const port = 3000;

const app = express();

// start server
app.listen(port, () => {
  console.log(`Start listening on port: ${port}`);
});
