const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');
const globalErrorHandler = require('./controllers/error.controller');

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);

app.all('*', (req, res, next) => {
  return next(
    new AppError(`Can not find ${req.originalUrl} on this server!!`, 404)
  );
});

app.use(globalErrorHandler);

module.exports = app;
