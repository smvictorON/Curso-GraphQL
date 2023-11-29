const { usuarios, perfis } = require('./../data/db')

module.exports = {
  ola(){
    return "retornando string!"
  },
  horaAtualS(){
    return `${new Date}`
  },
  horaAtualD(){
    return new Date
  },
  usuarioLogado(){
    return {
      id: 1,
      nome: "Victor",
      email: "victorsm9@hotmail.com",
      idade: 28,
      salario_real: 11.300,
      vip: true
    }
  },
  produtoEmDestaque(){
    return {
      nome: "Civic Touring 1.5 2017",
      preco: 125.555,
      desconto: 0.05
    }
  },
  numerosMegaSena(){
    // return [7,11,17,23,33,42]
    // Define uma função para ordenação
    const crescente = (a, b) => a - b
    // Retorna um array com numeros de 1-60 ordenados
    return Array(6).fill(0).map(() => parseInt(Math.random() * 60 + 1)).sort(crescente)
  },
  usuarios(){
    return usuarios
  },
  // o primeiro argumento seria o parent caso ele tenha sido chamado por outro resolver
  // o segundo são os argumentos
  usuario(_, args){
    const users = usuarios.filter((item) => item.id == args.id)
    return users ? users[0] : null
  },
  perfis(){
    return perfis
  },
  perfil(_, {id}){
    const filtered = perfis.filter((item) => item.id === id)
    return filtered ? filtered[0] : null
  },
}