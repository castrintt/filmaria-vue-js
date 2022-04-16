<template>
  <div id="meus-filmes">
    <h1>Meus filmes</h1>
    <span v-if="this.filmes.length <= 0">
      Você não possui nenhum filme savo :(
    </span>
    <ul>
      <li v-for="filme in filmes" :key="filme.id">
        <span>{{ filme.nome }}</span>
        <div>
          <button>
            <router-link :to="`/filme/${filme.id}`">Ver Detalhes</router-link>
          </button>
          <button @click="excluir(filme.id)">Excluir</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MeusFilmes",
  data() {
    return {
      filmes: [],
    };
  },
  created() {
    const minhaLista = localStorage.getItem("myFilme");
    this.filmes = JSON.parse(minhaLista) || [];
   
  },
  methods:{
    excluir(id){
      let filtroFilmes = this.filmes.filter((filme) => {
        return filme.id != id
      })
      return this.filmes = filtroFilmes
    }
  },
  watch:{
    filmes(){
      localStorage.setItem('myFilme',JSON.stringify(this.filmes))
    }
  }
};
</script>

<style escoped>
#meus-filmes {
  display: flex;
  flex-direction: column;
  max-width: 80%;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

ul {
  padding: 0;
  width: 100%;
}

ul li {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto;
  width: 100%;

}

span {
  font-size: 25px;
}

button {
  margin-left: 10px;
  padding: 5px;
  border-radius: 10px;
  outline: none;
  border: none;
  background-color: rgba(128, 128, 128, 0.712);
  cursor: pointer;
  transition: 0.5s;
}
button a {
  text-decoration: none;
  color: black;
}
button:hover {
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  background-color: brown;
}
</style>