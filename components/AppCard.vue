<template>
  <div class="singlePost">
    <v-card class="mx-auto" max-width="300">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{singlePost.title}}</v-card-title>
      </v-img>

      <v-card-text class="text--primary">

        <div>{{ singlePost.content}}</div>
      </v-card-text>

      <v-card-actions>
        <!-- <v-btn color="orange" text>Share</v-btn> -->

        <nuxt-link tag="div" :to="`/posts/${singlePost.id}`">
          <v-btn color="orange" text>Explore</v-btn>
        </nuxt-link>
         <nuxt-link tag="div" :to="`/posts/${singlePost.id}/edit`">
          <v-btn color="orange" text>Edit Me</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
    props:{
        singlePost:{
            type: Object,
            required: true,

        }
    }
}
</script>

<style lang="scss">
    .singlePost{
        margin: 1rem;
    }
</style>