import axios from "axios";

export const state = () => ({
  allPosts: [],
})

export const getters ={
    loadPost(state){
        return state.allPosts
    }
}

export const mutations = {
  setPosts(state, posts) {
    state.allPosts = posts;
  },
  addNewPost(state, postData) {
    state.allPosts.push(postData)
  }
}

export const actions = {
  nuxtServerInit(vuexContext, context) {
    return axios
      .get('https://appno1-14996.firebaseio.com/posts.json')
      .then(res => {
        const postsArray = [];
        for (const key in res.data) {
          postsArray.push({
            ...res.data[key],
            id: key
          });
        }
        vuexContext.commit("setPosts", postsArray);
      })
      .catch(e => context.error(e));
  },

  addNewPost(vuexContext, postData) {
    axios.post('https://appno1-14996.firebaseio.com/posts.json', postData)
      .then(result => {
        vuexContext.commit('addNewPost', {
          ...postData,
          id: result.data.name
        })
      })

  },
}