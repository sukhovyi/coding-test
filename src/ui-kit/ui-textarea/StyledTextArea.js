import { styled } from '@egoist/vue-emotion';
import Theme from '../Theme';

const StyledTextArea = styled('textarea')`
  width:100%;
  font-size: ${Theme.fontSize};
  border: 1px solid ${Theme.colors.secondary};
  border-radius: 5px;
  height: 300px;
`;

export default StyledTextArea;
