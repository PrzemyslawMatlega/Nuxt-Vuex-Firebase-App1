<template>
  <div class="container">
    <div class="container__wrapper">{{loadedPost}}</div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  validate({ params, query, store }) {
 
      const found = store.state.allPosts.find(post => post.id == params.id)
      return  found == undefined ? false : true
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
  }
};
</script>