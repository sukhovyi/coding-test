import { styled } from '@egoist/vue-emotion';
import Theme from '../Theme';

const ErrorMessage = styled('span')`
  color: ${Theme.colors.danger};
`;

export default ErrorMessage;
