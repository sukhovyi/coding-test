import { PrimaryButton, SecondaryButton, DangerButton, SuccessButton, TertiaryButton } from '../../../../src/ui-kit/ui-button/StyledButtons';

describe('ui-kit/ui-button/StyledButton', () => {
  it('PrimaryButton should have correct styling', () => {
    expect(PrimaryButton).toMatchSnapshot();
  });

  it('SecondaryButton should have correct styling', () => {
    expect(SecondaryButton).toMatchSnapshot();
  });

  it('DangerButton should have correct styling', () => {
    expect(DangerButton).toMatchSnapshot();
  });

  it('SuccessButton should have correct styling', () => {
    expect(SuccessButton).toMatchSnapshot();
  });

  it('TertiaryButton should have correct styling', () => {
    expect(TertiaryButton).toMatchSnapshot();
  });
});
