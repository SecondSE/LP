import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
 -ms-overflow-style: none; /* IE and Edge */
 scrollbar-width: none; /* Firefox */
}

:root::-webkit-scrollbar {
  display: none;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: #ffff;
}

body {
    background-color: #1D1D1D;
    min-height: 100vh;
}

#__next {
    min-height: 100vh;
}

`;
export default GlobalStyle;
