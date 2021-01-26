<template>
  <ui-row>
    <ui-col>
      <h1>
        Create Post
      </h1>
    </ui-col>
    <ui-col>
      <post-form
        :post="post"
        @save="createPost"
        @cancel="cancel"
      />
    </ui-col>
  </ui-row>
</template>

<script>
import PostForm from '../components/PostForm';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import UiInput from '../ui-kit/ui-input/UiInput';
import { CREATE_POST } from '../apollo/mutations';
import UiRow from '../ui-kit/ui-row/UiRow';
import UiCol from '../ui-kit/ui-col/UiCol';

export default {
  name: 'CreatePost',
  components: { UiCol, UiRow, UiInput, UiButton, PostForm },
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
