import ButtonType from '../../../../src/ui-kit/ui-button/ButtonType';
import {
  DangerButton,
  PrimaryButton, SecondaryButton,
  SuccessButton,
  TertiaryButton,
} from '../../../../src/ui-kit/ui-button/StyledButtons';

describe('ui-kit/ui-button/ButtonType', () => {
  it('should have correct setup', () => {
    expect(ButtonType).toMatchSnapshot();
  });

  it('getButtonByType should return correct button by type', () => {
    expect(ButtonType.getButtonByType(ButtonType.DANGER)).toBe(DangerButton);
    expect(ButtonType.getButtonByType(ButtonType.SUCCESS)).toBe(SuccessButton);
    expect(ButtonType.getButtonByType(ButtonType.TERTIARY)).toBe(TertiaryButton);
    expect(ButtonType.getButtonByType(ButtonType.PRIMARY)).toBe(PrimaryButton);
    expect(ButtonType.getButtonByType(ButtonType.SECONDARY)).toBe(SecondaryButton);
  });

  it('getButtonByType should trow an error', () => {
    try {
      expect(ButtonType.getButtonByType('test-type')).toBe(PrimaryButton);
    } catch (e) {
      expect(e.message).toBe('Button with type test-type does not exist!');
    }
  });

  it('getButtons should return correct result', () => {
    expect(ButtonType.getButtons()).toEqual({
      PrimaryButton,
      SecondaryButton,
      DangerButton,
      SuccessButton,
      TertiaryButton,
    });
  });
});
