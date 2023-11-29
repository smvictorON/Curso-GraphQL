const { perfis } = require('./../data/db')

module.exports = {
  // Podemos usar essa abordagem de resolver caso o campo do seu type tenha um nome que
  // seja diferente do recebido do banco como o exemplo de salario, ou até manipular o valor
  salario(usuario){
    return usuario.salario_real
  },
  perfil(usuario){
    const filtered = perfis.filter(item => item.id === usuario.perfil_id)
    return filtered ? filtered[0] : null
  }
}