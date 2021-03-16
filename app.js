const express = require('express');

const morgan = require('morgan');

require('dotenv').config();

const { userRouter, productRouter } = require('./routes');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.json());

app.use(userRouter);
app.use(productRouter);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
