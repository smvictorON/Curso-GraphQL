// Update with your config settings.

module.exports = {
  client: 'mysql',
  connection: {
    database: 'exercicios',
    user: 'root',
    password: 'ilewml'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
