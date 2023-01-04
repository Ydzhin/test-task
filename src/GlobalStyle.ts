import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    display: flex;
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #F5F9FF;
  }
  
  body::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  body::-webkit-scrollbar-track {
      background-color: #fff;
  }

  body::-webkit-scrollbar-thumb {
      background-color: #babac0;
      border-radius: 16px;
      border: 4px solid #fff;
  }

  body::-webkit-scrollbar-button {
      display:none;
  }

  #root {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-family: 'Rubik', sans-serif;
  }

`

export default GlobalStyle
