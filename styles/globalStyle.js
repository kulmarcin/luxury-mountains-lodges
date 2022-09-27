import { createGlobalStyle } from 'styled-components';

import theme from './theme';

const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: Spectral;
        src: url('/fonts/Spectral-Regular.ttf');
    }

    @font-face {
        font-family: Spectral Bold;
        src: url('/fonts/Spectral-SemiBold.ttf');
    }

    @font-face {
        font-family: Spectral Light;
        src: url('/fonts/Spectral-ExtraLight.ttf');
    }

    html {
        box-sizing: border-box;
    }

    html,
    body {
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
    }

    body {
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        font-family: ${fonts.primary};
        font-size: ${fontSizes.base};
        background-color: ${colors.beige};
        color: ${colors.fontPrimary};
    }

    a {
        display: inline-block;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    p {
        margin: 0;
    }


`;

export default GlobalStyle;
