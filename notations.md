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