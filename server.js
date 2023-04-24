require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');

db.authenticate()
  .then(() => console.log('Data base Authenticated'))
  .catch(() => console.log(error));

db.sync()
  .then(() => console.log('Data Synced'))
  .catch(() => console.log(error));

const port = +process.env.PORT || 3004;

app.listen(port, () => {
  console.log(`App on port ${port}`);
});
