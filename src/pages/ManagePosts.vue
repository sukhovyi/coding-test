<template>
  <div>
    <h1>
      Manage Posts
    </h1>
    <ui-button type="primary" @click="createPost">
      Create Post
    </ui-button>
    <post-list/>
  </div>
</template>

<script>
import PostList from '../components/PostList';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';

export default {
  name: 'ManagePosts',
  components: { UiButton, PostList },
  methods: {
    createPost() {
      this.$router.push({ name: Pages.CREATE_POST });
    },
  },
};
</script>
