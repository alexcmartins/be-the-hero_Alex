const express = require('express'); //express é um modulo.
const routes = require('./routes'); //routes é um arquivo, por isso tem ./
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * Get: Buscar/Listar uma informação do back-end.
 * Post: Criar uma informação no back-end.
 * Put: Alterar uma informação no back-end.
 * Delete: Deletar uma informação no back-end.
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" e servem para (Filtros, paginação)
 * Route Params: Parâmetros utilizados para identifica recursos
 * Request Body: Corpo da requisição, utilizado para criar e alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server, MariaDB.
 * NoSQL: MongoDB, CouchDB, etc.
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */

app.listen(3333);