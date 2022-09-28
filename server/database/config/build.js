const { readFileSync } = require("fs");
const { join } = require("path");
const connection = require("./connection");

const build = () => {
  const sql = readFileSync(join(__dirname, ".", "build.sql"));
  console.log('Build');
  return connection.query(sql.toString());
};

build()
module.exports = build;
