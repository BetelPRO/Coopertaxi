const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool(); // Lê as variáveis do .env
module.exports = pool;
