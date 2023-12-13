const db = require('../config/db')

db('usuarios').where({id: 1}).delete()
.then(res => console.log(res))
.catch(err => console.log(err.sqlMessage))
.finally(() => db.destroy())