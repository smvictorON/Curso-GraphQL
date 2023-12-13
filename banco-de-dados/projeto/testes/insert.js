const db = require('../config/db')

// const novoPerfil = {
//   nome: 'visitante',
//   rotulo: 'Visitante'
// }

// //bandeira + alt + n para executar usando o code runner(extensao)
// //bandeira + alt + m para parar usando o code runner(extensao)
// db('perfis').insert(novoPerfil)
// .then(res => console.log(res))
// .catch(err => console.log(err.sqlMessage))
// .finally(() => db.destroy())

const perfilSU = {
  nome: 'root' + Math.random(),
  rotulo: 'Super usuario'
}

//outra forma de fazer o insert
db.insert(perfilSU).into('perfis')
.then(res => console.log(res))
.catch(err => console.log(err.sqlMessage))
.finally(() => db.destroy())