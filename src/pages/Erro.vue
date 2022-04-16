<template>
  <div id="erro">  
        <div class="mensagem">
          <h1 >Ops... Página não existente!</h1>
        </div>
  </div>
</template>

<script>
export default {
    name:'Erro'
}
</script>

<style scoped>
#erro {
  background-image: url('https://kinsta.com/wp-content/uploads/2021/05/there-has-been-a-critical-error-on-this-website-featured-image.jpeg');
  width: 90vw;
  height: 90vh;
  background-size: cover;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: center;

}
.mensagem{
  background-color: rgba(255, 255, 255, 0.644);
  width: 500px;
  height: 80px;
  z-index: 1;
  text-align: center;
  border-radius: 10px;
}
</style>