const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

// Podemos acessar o Playground na rota localhost para fazer as consultas
const server = new ApolloServer({
  typeDefs: importSchema('./schema/index.graphql'),
  resolvers
})

server.listen().then(({url}) => {
  console.log(`Executando em: ${url}`)
})