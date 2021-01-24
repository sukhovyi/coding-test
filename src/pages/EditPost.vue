<template>
  <div>
    <h1>
      Edit Post
    </h1>
    <div>
      <ui-button>
        Save Changes
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
  name: 'EditPost',
  components: { UiButton, PostForm },
  methods: {
    cancel() {
      this.$router.push({ name: Pages.MANAGE_POSTS });
    },
  },
};
</script>
