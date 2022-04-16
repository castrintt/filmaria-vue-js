<template>
  <div id="filme">
    <div class="loading" v-show="this.aux">
      <Loading />
    </div>
    <div class="container">
      <h2>
        {{ filmes.nome }}
      </h2>
      <img :src="filmes.foto" :alt="filmes.nome" />
      <h3>Sinopse</h3>
      <p>
        {{ filmes.sinopse }}
      </p>
      <div class="botoes">
        <button>
          <router-link to="/">Home</router-link>
        </button>
        <button @click="salvarFilme">
          Salvar
        </button>
        <button>
          <a :href="`https://youtube.com/results?search_query=${filmes.nome}`" target="_blank">
            Trailer
          </a>
          </button>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Loading.vue";
import api from "../services/api.js";
export default {
  name: "Filme",
  data() {
    return {
      filmes: [],
      aux: true,
      salvos: []
    };
  },
  props: ["id"],
  async created() {
    const response = await api.get(`?api=filmes/${this.id}`);

    this.filmes = response.data;
    this.aux = false;
  },
  components: {
    Loading,
  },
  methods:{
    salvarFilme(){
      const minhaLista = localStorage.getItem('myFilme')
      let filme = JSON.parse(minhaLista) || []
      
      const hasFilme = filme.some((filme) => filme.id === this.filmes.id)
      if(hasFilme){
        alert('Você já tem esse filme salvo!')
        return 
      }

      filme.push(this.filmes)
      localStorage.setItem('myFilme',JSON.stringify(filme))
      alert('Filme salvo com sucesso')
    }
  }
};
</script>

<style scoped>
.loading {
  margin: 0 auto;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  max-width: 100%;
  width: 70%;
  margin: 0 auto;
}

h2 {
  color: #fff;
  margin-bottom: 0px;
  background: brown;
  padding: 15px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.container img {
  width: 100%;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

button {
  margin-right: 5px;
  border-radius: 5px;
  margin-top: 15px;
  cursor: pointer;
  border: 0;
  padding: 12px;
  font-size: 20px;
  transition: all 0.5s;
  outline: none;
}
button:hover {
  background: brown;
  color: #fff;
}

a {
  text-decoration: none;
  color: #000;
  transition: all 0.5s;
}

a:hover {
  color: #fff;
}
</style>