<template>
  <ui-row>
    <ui-col cols="8">
      <h1>
        Edit Post
      </h1>
    </ui-col>
    <ui-col cols="2" class="align-center-end">
      <ui-button type="danger" @click="handleDeletePost">
        Delete Post
      </ui-button>
    </ui-col>
    <ui-col>
      <post-form
        v-if="post"
        :post="post"
        @save="saveChanges"
        @cancel="cancel"
      />
    </ui-col>
  </ui-row>
</template>

<script>
import PostForm from '../components/PostForm';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import { GET_POST } from '../apollo/queries';
import { DELETE_POST, UPDATE_POST } from '../apollo/mutations';
import UiRow from '../ui-kit/ui-row/UiRow';
import UiCol from '../ui-kit/ui-col/UiCol';

export default {
  name: 'EditPost',
  components: { UiCol, UiRow, UiButton, PostForm },
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
