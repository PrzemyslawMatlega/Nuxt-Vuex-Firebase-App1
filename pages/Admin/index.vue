<template>
  <div class="container">
    <div class="container__wrapper">
      <h1>Add new post</h1>
      <AppForm @submit="addNewPost"></AppForm>
    </div>
  </div>
</template>

<script>
import AppForm from "@/components/AppForm";

export default {
  Name: "Admin",
  layout: "default",
  components: {
    AppForm
  },
  methods:{
    addNewPost(postData){
        this.$store.dispatch('addNewPost', postData)
    },
  }
};
</script>

<style>
</style>
