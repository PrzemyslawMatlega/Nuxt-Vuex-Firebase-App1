<template>
  <form @submit.prevent="onSave">
    <AppFormInput v-model="editedPost.title">Title</AppFormInput>
    <!-- <AppFormInput v-model="editedPost.thumbnail">Thumbnail Link</AppFormInput> -->
    <AppFormInput
      control-type="textarea"
      v-model="editedPost.content">Content</AppFormInput>
     <v-btn color="success" x-large dark type="submit"> Add post!</v-btn>
  </form>
</template>

<script>
import AppFormInput from "@/components/AppFormInput";
import AppButton from "@/components/AppFormInput";

export default {
  components: {
    AppFormInput,
    AppButton
  },
  props: {
    post: {
      type: Object,
      required: false
    }
  },
  data() {
    return {
      editedPost: this.post
        ? { ...this.post }
        : {
            title: "",
            thumbnail: "",
            content: "",
          }
    };
  },
  methods: {
    onSave() {
      // Save the post
      this.$emit('submit', this.editedPost)
    },
  }
};
</script>
