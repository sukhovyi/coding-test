import { PrimaryButton, SecondaryButton, DangerButton, SuccessButton, TertiaryButton } from './StyledButtons';

const ButtonType = Object.freeze({
  PRIMARY: 'primary',
  DANGER: 'danger',
  SUCCESS: 'success',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',

  getButtons() {
    return {
      PrimaryButton,
      SecondaryButton,
      DangerButton,
      SuccessButton,
      TertiaryButton,
    };
  },

  getButtonByType(type) {
    const button = {
      [ButtonType.PRIMARY]: PrimaryButton,
      [ButtonType.DANGER]: DangerButton,
      [ButtonType.SUCCESS]: SuccessButton,
      [ButtonType.SECONDARY]: SecondaryButton,
      [ButtonType.TERTIARY]: TertiaryButton,
    }[type];

    if (!button) {
      throw new Error(`Button with type ${type} does not exist!`);
    }

    return button;
  },
});

export default ButtonType;
