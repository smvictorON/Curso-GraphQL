const { perfis, proximoId } = require('../../data/db')

module.exports = {
  novoPerfil(_, {nome}){
    const nomeExistente = perfis.some(p => p.nome === nome)

    if (nomeExistente)
      throw new Error("Perfil já cadastrado!")

      const novo = {
        id: proximoId(),
        nome,
      }

      perfis.push(novo)
      return novo
  },

  excluirPerfil(_, {id}){
    const i = perfis.findIndex(p => p.id === id)

    if (i < 0)
      return null

    const excluidos = perfis.splice(i, 1)

    return excluidos ? excluidos[0] : null
  },

  alterarPerfil(_, args) {
    const i = perfis.findIndex(i => i.id === args.id)

    if (i < 0)
      return null

    const perfil = {
      ...perfis[i],
      ...args
    }

    perfis.splice(i, 1, perfil)
    return perfil
  }
}