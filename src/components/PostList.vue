<template>
  <div class="post-list">
    <div v-for="post in posts" :key="post.id" class="row post-list-item">
      <div class="col-8">
        <p>
          {{ post.title }}
        </p>
        <span class="caption">
          by {{ post.user.username }}
        </span>
      </div>
      <div class="col-2">
        <ui-button type="secondary" @click="editPost(post.id)">
          Edit Post
        </ui-button>
        <ui-button type="danger" @click="deletePost(post.id)">
          Delete
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';

export default {
  name: 'PostList',
  components: { UiButton },
  props: {
    posts: {
      type: Array,
    },
  },
  methods: {
    editPost(postId) {
      this.$router.push({
        name: Pages.EDIT_POST,
        params: {
          postId,
        },
      });
    },
    deletePost(postId) {
      this.$emit('delete', postId);
    },
  },
};
</script>
