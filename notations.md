# Vantagens do GraphQL:

**Recuperação de Dados Precisos:**
Com o GraphQL, os clientes solicitam exatamente os dados de que precisam, evitando a sobrecarga de dados extraídos das APIs, o que é comum no REST.

**Múltiplas Fontes de Dados:**
Permite a obtenção de dados de várias fontes em uma única solicitação, unificando-as em uma única resposta.

**Flexibilidade e Versionamento:**
Evita a necessidade de várias versões de endpoints, permitindo que os clientes solicitem novos campos ou recursos sem a necessidade de alterações nos endpoints.

**Redução de Requisições:**
O GraphQL permite reduzir o número de solicitações de ida e volta para o servidor, já que os clientes podem solicitar vários conjuntos de dados em uma única consulta.

# Desvantagens do GraphQL:

**Curva de Aprendizado e Complexidade:**
Pode ser mais complexo de implementar e entender, especialmente para iniciantes, devido à sua natureza dinâmica e flexível.

**Overfetching e Underfetching:**
Se não for projetado corretamente, pode levar a problemas de sobrecarga (overfetching) ou falta de dados suficientes (underfetching).

-----------------------------------------------------------------------------------------

# Query:
- As queries são usadas para recuperar dados do servidor GraphQL.
- Elas são semelhantes às consultas de leitura (read) em bancos de dados tradicionais.
- Permitem que você especifique exatamente quais campos de dados você deseja recuperar e a estrutura desses dados.
- São executadas de forma paralela (múltiplas queries podem ser resolvidas em uma única requisição) e são idempotentes (não alteram o estado dos dados no servidor).

# Mutation:
- As mutations são usadas para modificar ou criar dados no servidor GraphQL.
- São semelhantes às operações de criação (create), atualização (update) e exclusão (delete) em bancos de dados tradicionais.
- Permitem que você defina operações que alteram o estado dos dados, como criar um novo usuário, atualizar um post, deletar um comentário etc.
- Podem retornar dados após a modificação, se necessário.

-----------------------------------------------------------------------------------------

# knex utilizando para fazer a integração com o banco

Gerar arquivo de configuração
>npx knex init

Gerar migrations
>npx knex migrate:make sua_tabela

Executar as ultimas migrations
>npx knex migrate:latest

Fazer rollback das migrations
>npx knex migrate:rollback

-----------------------------------------------------------------------------------------

Os resolvers recebem 4 parametros para trabalhar

- Obj: primeio parametro, se for a porta de entrada nao va conter nada porém se for chamado por uma função pai, ele vai ter o objeto passado

- Args: aqui vão vir os argumentos do resolver

- Ctx: aqui vem o contexto com algum dado complementar

- Info: funciona de forma semelhante ao Ctx