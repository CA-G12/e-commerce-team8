const { Pool } = require("pg");

require('dotenv').config();

const {DEV_DATABASE_URL, DATABASE_URL, TEST_DATABASE_URL, NODE_ENV}= process.env;

let DB_URL;

if(NODE_ENV === 'production') DB_URL = DATABASE_URL;
else if(NODE_ENV === 'development') DB_URL = DEV_DATABASE_URL;
else if (NODE_ENV === 'test') DB_URL = TEST_DATABASE_URL
else throw Error('DB URL doesn\'t exist')

const connection = new Pool({
  connectionString: DB_URL,
  ssl: NODE_ENV !== 'production' ? false : { rejectUnauthorized: false },
});

module.exports = connection;