export const GlobalStyles = `
  * {
    box-sizing: border-box;
    word-wrap: break-word;
    word-break: keep-all;
  }

  html {
    min-height: 100%;
    font-size: 62.5%;
    scroll-behavior: smooth;
    -webkit-font-smoothing: antialiased;
  }

  body {
    min-height: 100%;
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 1em;
    line-height: 1.2;
    margin: 0;
    padding: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  p {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    vertical-align: top;

    max-width: 100%;
    height: auto;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  ul,
  ol,
  dl,
  dt,
  dd {
    margin: 0;
    padding: 0;
  }

  ul,
  ol,
  li {
    list-style: none;
  }

  em,
  address {
    font-style: normal;
  }

  figure,
  form {
    margin: 0;
  }

  fieldset {
    vertical-align: top;
    margin: 0;
    padding: 0;
    border: 0 none;
  }

  label {
    cursor: pointer;
  }

  button,
  input,
  select,
  textarea {
    vertical-align: baseline;
    margin: 0;
    outline: 0;
    font-size: 100%;
    line-height: inherit;
  }

  button {
    padding: 0;
    border: 0 none;

    background: transparent;

    cursor: pointer;
    -webkit-appearance: none;

    &:disabled {
      cursor: not-allowed;
    }
  }

  input[type='number'] {
    &::-webkit-inner-spin-button {
      display: none;
    }
  }

  input[type='checkbox'],
  input[type='radio'] {
    vertical-align: middle;
  }

  input[type='search'] {
    -webkit-appearance: none;

    border-radius: 0;
  }

  textarea {
    vertical-align: top;

    resize: vertical;
  }

  input:invalid,
  textarea:invalid {
    background-color: transparent;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    empty-cells: show;
  }

  td {
    vertical-align: middle;
  }

  select {
    vertical-align: middle;
    border-radius: 0;
  }

  hr {
    border-width: 1px 0 0 0;
    border-style: solid;
  }
`;

export default GlobalStyles;
