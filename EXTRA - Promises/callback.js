const http = require('http')

const getTurma = (letra, cb) => {
  const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

  http.get(url, res => {
    let resultado = ''

    res.on('data', dados => {
      resultado += dados
    })

    res.on('end', () => {
      cb(JSON.parse(resultado))
    })
  })
}

let nomes = []
getTurma("A", alunos => {
  nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
  console.log("🚀 ~ file: callback.js:23 ~ nomes:", nomes)
  getTurma("B", alunos => {
    nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
    console.log("🚀 ~ file: callback.js:23 ~ nomes:", nomes)
    getTurma("C", alunos => {
      nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
      console.log("🚀 ~ file: callback.js:23 ~ nomes:", nomes)
    })
  })
})
