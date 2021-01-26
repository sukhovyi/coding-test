import Theme from '../../../src/ui-kit/Theme';

describe('ui-kit/Theme', () => {
  it('should have correct setup', () => {
    expect(Theme).toMatchSnapshot();
  });
});
