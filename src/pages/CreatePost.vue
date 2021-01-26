<template>
  <div class="row">
    <div class="col-10">
      <h1>
        Create Post
      </h1>
    </div>
    <div class="col-10">
      <post-form
        :post="post"
        @save="createPost"
        @cancel="cancel"
      />
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import UiInput from '../ui-kit/ui-input/UiInput';
import { CREATE_POST } from '../apollo/mutations';

export default {
  name: 'CreatePost',
  components: { UiInput, UiButton, PostForm },
  data() {
    return {
      post: {
        title: null,
        body: null,
      },
    };
  },
  methods: {
    async createPost(post) {
      await this.$apollo.mutate({
        mutation: CREATE_POST,
        variables: {
          input: {
            title: post.title,
            body: post.body,
          },
        },
      });
      this.returnBack();
    },
    cancel() {
      this.returnBack();
    },
    returnBack() {
      this.$router.push({ name: Pages.MANAGE_POSTS });
    },
  },
};
</script>
