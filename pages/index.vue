<template>
  <div class="container">
      <div class="container__wrapper">
        <h1>All posts:</h1>

      </div>
  </div>
</template>

<script>

export default {
  name:'Home',
  components: {
   
  },
  layout: 'default',

}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;

    h1{
      margin-bottom: 2rem;
    }

  }
  
}

</style>
