const express = require('express');

const morgan = require('morgan');

const { userRouter, productRouter } = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(userRouter);
app.use(productRouter);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
