import { styled } from '@egoist/vue-emotion';
import Theme from '../Theme';

const Button = styled('button')`
  font-size: 14px;
  font-weight: bold;
  border: none;
  padding: 10px;
  border-radius: 5px;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${Theme.colors.primary};
  color: #FFFFFF;
`;

export const DangerButton = styled(Button)`
  background-color: ${Theme.colors.danger};
  color: #FFFFFF;
`;

export const SuccessButton = styled(Button)`
  background-color: ${Theme.colors.success};
  color: #FFFFFF;
`;

export const SecondaryButton = styled(Button)`
  background-color: ${Theme.colors.secondary};
`;

export const TertiaryButton = styled(Button)`
  background-color: ${Theme.colors.tertiary};
`;
