import { styled } from '@egoist/vue-emotion';
import Theme from '../Theme';

const StyledInput = styled('input')`
  width:100%;
  border-radius: 5px;
  flex: 1 1 auto;
  font-size: ${Theme.fontSize};
  line-height: 20px;
  padding: 8px 0;
  max-width: 100%;
  min-width: 0;
  width: 100%;
`;

export default StyledInput;
