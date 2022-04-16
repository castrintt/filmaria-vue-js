<template>
 <header id="header">
   <router-link to="/" class="primeiro__link" exact>Filmaria</router-link>
   <button>
     <router-link to="/salvos" exact class="meus-filmes">SALVOS</router-link>
   </button>
 </header>
</template>

<script>
export default {
  name:'Header'
}
</script>

<style scoped>
.meus-filmes{
  text-decoration: none;
  color: black;
  font-weight: bold;
}
#header{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  background-color: brown ;

}

a {
  text-decoration: none;
  color: white;
}

.primeiro__link{
  font-size: 30px;
}

button{
  cursor: pointer;
  border: 0;
  background-color: #fff;
  padding: 5px 15px;
  outline: none;
  border-radius: 10px;
}
</style>