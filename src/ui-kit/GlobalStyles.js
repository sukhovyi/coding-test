import { createGlobalStyle } from '@egoist/vue-emotion';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: 16px;
  }
  h1 {
    font-size: 36px;
    font-weight: lighter;
  }
  h2 {
    font-size: 32px;
    font-weight: lighter;
  }
  h3 {
    font-size: 28px;
    font-weight: lighter;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export default GlobalStyle;
