<template>
  <div>
    <h1>
      Manage Posts
    </h1>
    <ui-button type="primary" @click="createPost">
      Create Post
    </ui-button>
    <ui-input
      :value="search"
      @change="onSearchChange"
      label="Search"
    />

    <span v-if="isLoading">
      Loading...
    </span>
    <div v-else>
      <p>
        Posts found: {{ collection.totalCount }}
      </p>
      <post-list
        :posts="collection.posts"
        @delete="deletePost"
      />
      <div>
        <ui-button
          v-if="!isFirstPage"
          @click="prevPage"
        >
          prev page
        </ui-button>
        <ui-button
          v-if="!isLastPage"
          @click="nextPage"
        >
          next page
        </ui-button>
      </div>
    </div>
  </div>
</template>

<script>
import PostList from '../components/PostList';
import UiButton from '../ui-kit/ui-button/UiButton';
import Pages from '../router/Pages';
import { GET_POST_LIST } from '../apollo/queries';
import { DELETE_POST } from '../apollo/mutations';
import UiInput from '../ui-kit/ui-input/UiInput';

export default {
  name: 'ManagePosts',
  components: { UiInput, UiButton, PostList },
  computed: {
    apolloVariables() {
      return {
        options: {
          paginate: this.paginate,
          search: {
            q: this.search,
          },
        },
      };
    },
    isFirstPage() {
      return this.paginate.page === 1;
    },
    isLastPage() {
      return this.paginate.page >= this.collection.totalCount / this.paginate.limit;
    },
  },
  data() {
    return {
      collection: {
        posts: [],
        totalCount: null,
      },
      query: GET_POST_LIST,
      paginate: {
        page: 1,
        limit: 20,
      },
      search: '',
      isLoading: true,
    };
  },
  apollo: {
    posts: {
      query: GET_POST_LIST,
      variables() {
        return this.apolloVariables;
      },
      update(data) {
        this.isLoading = false;
        this.collection.posts = data.posts.data;
        this.collection.totalCount = data.posts.meta.totalCount;
      },
    },
  },
  methods: {
    onSearchChange(value) {
      // eslint-disable-next-line no-console
      console.log('onSearchChange');
      this.search = value;
    },
    prevPage() {
      this.paginate.page -= 1;
      this.$apollo.queries.posts.refetch(this.apolloVariables);
    },
    nextPage() {
      this.paginate.page += 1;
      this.$apollo.queries.posts.refetch(this.apolloVariables);
    },
    createPost() {
      this.$router.push({ name: Pages.CREATE_POST });
    },
    async deletePost(postId) {
      await this.$apollo.mutate({
        mutation: DELETE_POST,
        variables: {
          id: postId,
        },
        update: () => {
          this.collection.posts = this.collection.posts.filter(post => post.id !== postId);
          this.collection.totalCount -= 1;
        },
      });
    },
  },
};
</script>
