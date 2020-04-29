import { createGlobalStyle } from 'styled-components';

import githubBackground from '../assets/github-background.svg'

export default createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    outline: 0;
  }

  ::-webkit-scrollbar {
      width: 8px;
  }
  ::-webkit-scrollbar-track {
      background-color: #eaeaea;
  }
  ::-webkit-scrollbar-thumb {
      background-color: #b0b0b0;
      border-radius: 6px;
      cursor: pointer;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #04d361;
  }

  body{
    background: #F0F0F5 url(${githubBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button{
    font: 16px Roboto, sans-serif;
  }

  .container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }

  /* BREAKPOINT 576px */
  @media (min-width: 36em) {
    .container {
      max-width: 540px;
    }
  }

  /* BREAKPOINT 768px */
  @media (min-width: 48em) {
    .container {
      max-width: 720px;
    }
  }

  /* BREAKPOINT 992px */
  @media (min-width: 62em) {
    .container {
      max-width: 960px;
    }
  }

  /* BREAKPOINT 1200px */
  @media (min-width: 75em) {
    .container {
      max-width: 1140px;
    }
  }

`;
