const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');

const app = express();
app.use(morgan('tiny'));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  debug(`App listening on ${PORT}`);
});
