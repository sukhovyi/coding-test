<template>
  <div>
    <div class="row">
      <div class="col-8">
        <h1>
          Manage Posts
        </h1>
      </div>
      <div class="col-2 align-center-end">
        <ui-button type="primary" @click="createPost">
          Create Post
        </ui-button>
      </div>
      <div class="col-10">
        <ui-input
          :value="search"
          :debounce-time="searchDebounce"
          :hints="searchHints"
          @input="onSearchChange"
          placeholder="Search posts..."
        />

        <div v-if="!isLoading">
          <post-list
            :posts="collection.posts"
            @delete="handleDeletePost"
          />
          <div>
            <ui-button
              v-if="!isFirstPage"
              @click="prevPage"
            >
              Previous Page
            </ui-button>
            <ui-button
              v-if="!isLastPage"
              @click="nextPage"
            >
              Next Page
            </ui-button>
          </div>
        </div>
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
    searchHints() {
      return this.isLoading ? ['Loading...'] : [`Posts found: ${this.collection.totalCount}`];
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
      searchDebounce: 2000,
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
    markAsLoading() {
      this.isLoading = true;
    },
    onSearchChange(value) {
      this.search = value;
      this.markAsLoading();
    },
    prevPage() {
      this.paginate.page -= 1;
      this.$apollo.queries.posts.refetch(this.apolloVariables);
      this.markAsLoading();
    },
    nextPage() {
      this.paginate.page += 1;
      this.$apollo.queries.posts.refetch(this.apolloVariables);
      this.markAsLoading();
    },
    createPost() {
      this.$router.push({ name: Pages.CREATE_POST });
    },
    handleDeletePost(postId) {
      this.$confirm({
        title: 'Delete Post',
        message: 'Are you sure you want to delete this post?',
        button: {
          yes: 'Yes, delete',
          no: 'Cancel',
        },
        callback: (confirm) => {
          if (confirm) {
            this.deletePost(postId);
          }
        },
      });
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
