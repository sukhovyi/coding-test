import { shallowMount } from '@vue/test-utils';
import BaseInput from '../../../../src/ui-kit/ui-base-input/BaseInput';
import UiBaseInput from '../../../../src/ui-kit/ui-base-input/UiBaseInput';

describe('ui-kit/ui-kit-base-input', () => {
  it('BaseInput should have correct styling', () => {
    expect(BaseInput).toMatchSnapshot();
  });

  it('UiBaseInput should be rendered correctly', () => {
    const wrapper = shallowMount(UiBaseInput, {
      propsData: {
        label: 'Test Label',
        hints: ['test hint'],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });

  it('UiBaseInput should be rendered correctly when has errors', () => {
    const wrapper = shallowMount(UiBaseInput, {
      propsData: {
        label: 'Test Label',
        errors: ['test error'],
      },
    });

    expect(wrapper.element).toMatchSnapshot();
  });
});
