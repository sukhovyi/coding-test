import { createGlobalStyle } from '@egoist/vue-emotion';
import Theme from './Theme';

const GlobalStyle = createGlobalStyle`
  body {
    font-size: ${Theme.fontSize};
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
  textarea:focus, input:focus{
    outline: none;
  }

  .container {
    max-width: 1200px;
    margin: auto;
  }

  .caption {
    font-size: 14px;
    color: ${Theme.colors.tertiary};
  }

  .col-10 {
    flex: 0 0 100%;
    max-width: 100%;
  }

  .col-7 {
    flex: 0 0 70%;
    max-width: 70%;
  }

  .col-8 {
    flex: 0 0 80%;
    max-width: 80%;
  }
  .col-3 {
    flex: 0 0 30%;
    max-width: 30%;
  }

  .col-2 {
    flex: 0 0 20%;
    max-width: 20%;
  }

  .align-center-end {
    display: inline-grid;
    align-items: center;
    justify-content: end;
  }

  .post-list {
    margin-top: 20px;
  }

  .post-list-item {
    border: 1px solid #E7E7E7;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

export default GlobalStyle;
