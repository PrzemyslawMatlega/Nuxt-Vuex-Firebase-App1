<template>
  <div class="container">
    <div class="container__wrapper">
      <h1>Edit post</h1>
      <AppForm @submit="editPost" :post="loadedPost"></AppForm>
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";
import axios from 'axios'
export default {
  Name: "Edit",
  layout: "default",
  components: {
    AppForm
  },
  validate({ params, query, store }) {
      return store.getters.validatePath(params.id)
  },
  asyncData(context) {
    return axios
      .get(
        `https://appno1-14996.firebaseio.com/posts/${context.params.id}.json`
      )
      .then(res => {
        return {
          loadedPost: res.data
        };
      })
      .catch(e => context.error(e));
  },
  methods:{
      editPost(postData){
        
        this.$store.dispatch('editPost', {...postData, id: this.$route.params.id }).then( resp =>{
          this.$router.push('/')})
      }
  }
};
</script>

<style>
</style>
