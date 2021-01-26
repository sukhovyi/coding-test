import { shallowMount } from '@vue/test-utils';
import UiButton from '../../../../src/ui-kit/ui-button/UiButton';
import ButtonType from '../../../../src/ui-kit/ui-button/ButtonType';

describe('ui-kit/ui-button/UiButton', () => {
  const wrapper = shallowMount(UiButton, {
    propsData: {
      type: ButtonType.SUCCESS,
    },
  });

  it('should be rendered correctly', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('triggers a click', async () => {
    await wrapper.trigger('click');
    expect(wrapper.emitted().click).toBeTruthy();
  });
});
