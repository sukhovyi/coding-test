import { createGlobalStyle } from '@egoist/vue-emotion';
import Theme from './Theme';

// to be truth I do not like vue-emotion, fo react it looks much better

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

  .align-center-end {
    display: inline-grid;
    align-items: center;
    justify-content: end;
  }

  .post-list {
    margin-top: 20px;
  }

  .post-list-item {
    border: 1px solid ${Theme.colors.secondary};
    margin-bottom: 10px;
    border-radius: 10px;
  }

  .error {
    color: ${Theme.colors.danger}!important;
  }

  .ui-kit-toast {
    border-radius: 10px !important;
    font-size: 16px !important;
  }
  .ui-kit-toast.ui-kit-toast.success {
    background: ${Theme.colors.success};
  }
  .ui-kit-toast.ui-kit-toast.alert {
    background: ${Theme.colors.danger};
  }
`;

export default GlobalStyle;
