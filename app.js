const express = require('express');
const morgan = require('morgan');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

const globalErrorHandler = require('./controllers/error.controller');

const app = express();

app.use(morgan('dev'));

app.use(express.json());

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

app.use(globalErrorHandler);

module.exports = app;
