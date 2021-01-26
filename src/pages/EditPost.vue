<template>
  <div>
    <h1>
      Edit Post
    </h1>
    <ui-button type="danger" @click="deletePost">
      Delete Post
    </ui-button>

    <post-form
      v-if="post"
      :post="post"
      @save="saveChanges"
      @cancel="cancel"
    />
  </div>
</template>

<script>
import PostForm from '../components/PostForm';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import { GET_POST } from '../apollo/queries';
import { DELETE_POST, UPDATE_POST } from '../apollo/mutations';

export default {
  name: 'EditPost',
  components: { UiButton, PostForm },
  data() {
    return {
      post: null,
    };
  },
  apollo: {
    post: {
      query: GET_POST,
      variables() {
        return {
          id: this.$route.params.postId,
        };
      },
    },
  },
  methods: {
    returnBack() {
      this.$router.push({ name: Pages.MANAGE_POSTS });
    },
    cancel() {
      this.returnBack();
    },
    async deletePost() {
      await this.$apollo.mutate({
        mutation: DELETE_POST,
        variables: {
          id: this.post.id,
        },
      });

      this.returnBack();
    },
    async saveChanges(post) {
      await this.$apollo.mutate({
        mutation: UPDATE_POST,
        variables: {
          id: this.post.id,
          input: {
            title: post.title,
            body: post.body,
          },
        },
      });

      this.returnBack();
    },
  },
};
</script>
