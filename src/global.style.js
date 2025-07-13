import { createGlobalStyle } from 'styled-components';
import OrbitronTTF from './assets/fonts/Orbitron/Orbitron-VariableFont_wght.ttf';
import RobotoTTF from './assets/fonts/Roboto/Roboto-Regular.ttf';
import LailaMedTTF from './assets/fonts/Laila/Laila-Medium.ttf';
import UbuntuRegTTF from './assets/fonts/Ubuntu/Ubuntu-Regular.ttf';

import KodeMonoVarTTF from './assets/fonts/Kode_Mono/KodeMono-VariableFont_wght.ttf';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Laila_Med;
    src: url(${LailaMedTTF}) format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoTTF}) format('truetype');
    font-style: normal;
    font-weight: 400;
    font-display: fallback;
  }

  @font-face {
    font-family: Orbitron;
    src: url(${OrbitronTTF}) format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: Ubuntu_Reg;
    src: url(${UbuntuRegTTF}) format('truetype');
    font-display: fallback;
  }

  @font-face {
    font-family: KodeMono_Var;
    src: url(${KodeMonoVarTTF}) format('truetype');
    font-display: fallback;
  }

  :root {
    --ac-sand: 				#F7DE8D;
    --ac-orange:				#FBB040;
    --ac-green: 				#AAC27E;
    --ac-green-opaque: #AAC27E69;
    --ac-blue:					#9FCFCA;
    --ac-brown: 				#594A42;
    --grayd-a-grey:		#aaaaaa;
    --special-green: 	#3fee60;
    --special-blue:		#007bff;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: black;
  }

  button {
    cursor: pointer;
    display: inline-block;
    border: none;
    margin: 0;
    text-decoration: none;
    background: none;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body {
    box-sizing: border-box;
    overflow: auto;
    font-family: 'Roboto', sans-serif;
  }
`;