<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1>
          Edit Post
        </h1>
      </div>
      <div class="col-2 align-center-end">
        <ui-button type="danger" @click="handleDeletePost">
          Delete Post
        </ui-button>
      </div>
      <div class="col-10">
        <post-form
          v-if="post"
          :post="post"
          @save="saveChanges"
          @cancel="cancel"
        />
      </div>
    </div>
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
    handleDeletePost() {
      this.$confirm({
        title: 'Delete Post',
        message: 'Are you sure you want to delete this post?',
        button: {
          yes: 'Yes, delete',
          no: 'Cancel',
        },
        callback: (confirm) => {
          if (confirm) {
            this.deletePost();
          }
        },
      });
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
