const db = require('../config/db')

const novoUsuario = {
  nome: 'Victor',
  email: 'victorsm9@hotmail.com',
  senha: '123123'
}

const exercicio = async () => {
  const { qtde } = await db('usuarios').count('* as qtde').first()

  if(qtde === 0)
    await db('usuarios').insert(novoUsuario)

  let { id } = await db('usuarios').select('id').limit(1).first()

  await db('usuarios').where({ id }).update({nome: "Lamara"})

  return await db('usuarios').where({ id })
}

exercicio()
.then(usuario => console.log(usuario))
.finally(() => db.destroy())