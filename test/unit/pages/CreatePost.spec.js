import Vue from 'vue';
import { createLocalVue, shallowMount } from '@vue/test-utils';
import CreatePost from '../../../src/pages/CreatePost';
import Pages from '../../../src/router/Pages';

jest.mock('../../../src/apollo/mutations', () => ({
  CREATE_POST: 'CREATE_POST',
}));

describe('pages/CreatePost', () => {
  const localVue = createLocalVue();
  let mutate;
  let success;
  let push;
  let wrapper;

  beforeEach(() => {
    mutate = jest.fn();
    success = jest.fn();
    push = jest.fn();
    wrapper = shallowMount(CreatePost, {
      localVue,
      mocks: {
        $apollo: {
          mutate,
        },
        $toasted: {
          success,
        },
        $router: {
          push,
        },
      },
    });
  });


  it('should be rendered correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('createPost should works correctly', async () => {
    const post = {
      title: 'title',
      body: 'body',
    };
    wrapper.vm.createPost(post);
    await Vue.nextTick();

    expect(mutate).toBeCalledWith({ mutation: 'CREATE_POST', variables: { input: { ...post } } });
    expect(success).toBeCalledWith('Post was successfully created.');
    expect(push).toBeCalledWith({ name: Pages.MANAGE_POSTS });
  });

  it('cancel should works correctly', async () => {
    wrapper.vm.cancel();

    expect(push).toBeCalledWith({ name: Pages.MANAGE_POSTS });
  });

  it('returnBack should works correctly', async () => {
    wrapper.vm.returnBack();

    expect(push).toBeCalledWith({ name: Pages.MANAGE_POSTS });
  });
});
