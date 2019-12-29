<template>
  <div class="container">
      <div class="container__wrapper">
        <h1>All posts:</h1>
        <div class="container__grid" >
            <AppCard
            v-for="singlePost in loadPost"
            :key="singlePost.id"
            :singlePost="singlePost"
            />
        </div>
        
      </div>
  </div>
</template>

<script>
import AppCard from '@/components/AppCard'
export default {

  name:'Home',
  layout: 'default',
  components: {
    AppCard
  },
  computed:{
    loadPost() {
      return this.$store.getters.loadPost
    }
  }

}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  margin-top: 5rem;
  max-width: 1100px !important;

  &__wrapper{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    h1{
      margin-bottom: 2rem;
    }

  }

  &__grid{
    display: flex;
    flex-wrap: wrap;

  }
  
}

</style>
