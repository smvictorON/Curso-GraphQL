<template>
  <v-container fluid>
    <v-layout>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Filtrar Perfil</h1>
          <v-divider class="mb-3" />
          <div v-if="erros">
            <Erros :erros="erros" />
          </div>
          <v-text-field label="ID" v-model.number="filtro.id" />
          <v-text-field label="Nome" v-model="filtro.nome" />

          <h1 class="mt-4 headline">Alterar Perfil</h1>
          <v-divider class="mb-3" />
          <v-text-field label="Nome" v-model="perfil.nome" />
          <v-text-field label="Rótulo" v-model="perfil.rotulo" />

          <v-btn color="primary" class="ml-0 mt-3" @click="alterarPerfil">
            Alterar Perfil
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout column class="ma-3">
          <h1 class="headline">Resultado</h1>
          <v-divider />
          <template v-if="dados">
            <v-text-field label="ID" readonly v-model="dados.id" />
            <v-text-field label="Nome" readonly v-model="dados.nome" />
            <v-text-field label="Rótulo" readonly v-model="dados.rotulo" />
          </template>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Erros from '../comum/Erros'
import gql from 'graphql-tag'

export default {
  components: { Erros },
  data() {
    return {
      filtro: {},
      perfil: {},
      dados: null,
      erros: null
    }
  },
  methods: {
    alterarPerfil() {
      console.log('alterarPerfil')

      if (this.filtro.id == '')
        this.filtro.id = undefined

      this.$api.mutate({
        mutation: gql`
          mutation(
            $idFiltro: Int
            $nomeFiltro: String
            $nome: String
            $rotulo: String
          ) {
            alterarPerfil(
              filtro:{
                id: $idFiltro
                nome: $nomeFiltro
              }
              dados:{
                nome: $nome
                rotulo: $rotulo
              }
            ){
              id nome rotulo
            }
          }
        `,
        variables: {
          idFiltro: this.filtro.id,
          nomeFiltro: this.filtro.nome,
          nome: this.perfil.nome,
          rotulo: this.perfil.rotulo
        }
      }).then(res => {
        this.dados = res.data.alterarPerfil
        this.perfil = {}
        this.filtro = {}
        this.erros = null
      }).catch(e => {
        this.erros = e
      })
    },
    obterPerfis() {
      console.log('obterPerfis')

      this.$api.query({
        query: gql`{perfis {id rotulo}}`
      }).then(res => {
        this.perfis = res.data.perfis
        this.erros = null
      }).catch(e => {
        this.erros = e
      })
    }
  }
}
</script>

<style></style>
