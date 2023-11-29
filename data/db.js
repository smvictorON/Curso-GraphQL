const usuarios = [
  {
    id: 1,
    nome: "Victor",
    idade: 28,
    perfil_id: 2,
    status: "ATIVO"
  },
  {
    id: 2,
    nome: "Lamara",
    idade: 35,
    perfil_id: 1,
    status: "INATIVO"
  },
  {
    id: 3,
    nome: "Fi",
    idade: 5,
    perfil_id: 1,
    status: "BLOQUEADO"
  }
]

const perfis = [
  { id: 1, nome: "comum"},
  { id: 2, nome: "adm"},
]

module.exports = { usuarios, perfis }