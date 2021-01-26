<template>
  <div>
    <div>
      <ui-input
        v-model="post.title"
        :errors="error.title"
        label="Post Title"
      />
    </div>
    <div>
      <ui-textarea
        v-model="post.body"
        :errors="error.body"
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

const defaultErrorState = {
  title: [],
  body: [],
};

export default {
  name: 'PostForm',
  components: { UiTextarea, UiInput, UiButton },
  props: {
    post: {
      type: Object,
    },
  },
  data() {
    return {
      error: { ...defaultErrorState },
    };
  },
  computed: {
    saveButtonText() {
      return this.post.id ? 'Save Changes' : 'Create Post';
    },
  },
  methods: {
    save() {
      this.validate();
      if (this.error.title.length || this.error.body.length) {
        return;
      }

      this.$emit('save', this.post);
    },
    cancel() {
      this.$emit('cancel');
    },
    validate() {
      /*
        implemented validation in the simplest way,
        can be done better with defining rules for form fields
       */
      this.error = { ...defaultErrorState };

      if (!this.post.title) {
        this.error.title = ['Title is a required field'];
      }

      if (!this.post.body) {
        this.error.body = ['Body is a required field'];
      }
    },
  },
};
</script>
