<template>
  <div class="post-list">
    <ui-row v-for="post in posts" :key="post.id" class="post-list-item">
      <ui-col cols="8">
        <p>
          {{ post.title }}
        </p>
        <span class="caption">
          by {{ post.user.username }}
        </span>
      </ui-col>
      <ui-col cols="2">
        <ui-button type="secondary" @click="editPost(post.id)">
          Edit Post
        </ui-button>
        <ui-button type="danger" @click="deletePost(post.id)">
          Delete
        </ui-button>
      </ui-col>
    </ui-row>
  </div>
</template>

<script>
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import UiRow from '../ui-kit/ui-row/UiRow';
import UiCol from '../ui-kit/ui-col/UiCol';

export default {
  name: 'PostList',
  components: { UiCol, UiRow, UiButton },
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
