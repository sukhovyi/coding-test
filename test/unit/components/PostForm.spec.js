import { shallowMount } from '@vue/test-utils';
import PostForm from '../../../src/components/PostForm';

describe('components/PostForm', () => {
  const getComponent = post => shallowMount(PostForm, {
    propsData: {
      post,
    },
  });

  it('should be rendered correctly for new post', () => {
    expect(getComponent({}).element).toMatchSnapshot();
  });

  it('should be rendered correctly for edit post', () => {
    expect(getComponent({
      id: 123,
      title: 'test title',
      body: 'test description',
    }).element).toMatchSnapshot();
  });

  it('should not save invalid post', () => {
    const wrapper = getComponent({});
    wrapper.vm.save();
    expect(wrapper.vm.error).toEqual({
      body: ['Body is a required field'],
      title: ['Title is a required field'],
    });
  });

  it('should save valid post', () => {
    const wrapper = getComponent({
      title: 'test title',
      body: 'test description',
    });

    wrapper.vm.save();
    expect(wrapper.emitted('save')).toEqual([[{
      title: 'test title',
      body: 'test description',
    }]]);
  });
});
