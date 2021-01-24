<template>
  <div>
    <h1>
      Create Post
    </h1>
    <post-form/>
    <div>
      <ui-button>
        Create Post
      </ui-button>
      <ui-button type="secondary" @click="cancel">
        Cancel
      </ui-button>
    </div>
  </div>
</template>

<script>
import PostForm from '../components/PostForm';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';

export default {
  name: 'CreatePost',
  components: { UiButton, PostForm },
  methods: {
    cancel() {
      this.$router.push({ name: Pages.MANAGE_POSTS });
    },
  },
};
</script>
