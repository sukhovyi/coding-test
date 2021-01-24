<template>
  <div>
    <div>
      <ui-input
        v-model="post.title"
        label="Post Title"
      />
    </div>
    <div>
      <ui-textarea
        v-model="post.body"
        label="Post description"
      />
    </div>
    <div>
      <ui-button @click="save">
        {{ saveButtonText }}
      </ui-button>
      <ui-button type="secondary" @click="cancel">
        Cancel
      </ui-button>
    </div>
  </div>
</template>

<script>
import UiButton from '../ui-kit/ui-button/UiButton';
import UiInput from '../ui-kit/ui-input/UiInput';
import UiTextarea from '../ui-kit/ui-textarea/UiTextarea';

export default {
  name: 'PostForm',
  components: { UiTextarea, UiInput, UiButton },
  props: {
    post: {
      type: Object,
    },
  },
  computed: {
    saveButtonText() {
      return this.post.id ? 'Save Changes' : 'Create Post';
    },
  },
  methods: {
    save() {
      this.$emit('save', this.post);
    },
    cancel() {
      this.$emit('cancel');
    },
  },
};
</script>
