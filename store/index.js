import axios from "axios";

export const state = () => ({
  allPosts: [],
})

export const getters = {
  loadPost: state => {
    return state.allPosts
  },
  validatePath: state => pathId => {
    const found = state.allPosts.find(post => post.id == pathId)
    return found == undefined ? false : true
  }
}

export const mutations = {
  setPosts(state, posts) {
    state.allPosts = posts;
  },
  addNewPost(state, postData) {
    state.allPosts.push(postData)
  },
  editPost(state, editedPost){
    const postIndex = state.allPosts.findIndex(
      post => post.id === editedPost.id
    );
    state.allPosts[postIndex] = editedPost
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
  editPost(vuexContext, editedPost) {
   return axios.put(`https://appno1-14996.firebaseio.com/posts/${editedPost.id}.json`, editedPost)
      .then(res => {
        vuexContext.commit('editPost', editedPost)
      })
      .catch(e => console.log(e))
  }
}
