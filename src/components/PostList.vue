<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <div>
          {{ post.title }}
        </div>
        <div>
          by {{ post.user.username }}
        </div>
        <div>
          <ui-button type="secondary" @click="editPost(post.id)">
            Edit Post
          </ui-button>
          <ui-button type="danger" @click="deletePost(post.id)">
            Delete
          </ui-button>
        </div>
      </li>
    </ul>
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
