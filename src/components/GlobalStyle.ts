import { createGlobalStyle } from 'styled-components';
import { Theme } from 'components/Theme';

export const GlobalStyle = createGlobalStyle<{ theme: typeof Theme }>`
    html,
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }
    html {
        font-weight: 500;
        font-size: 16px;
    }
    body {
        overflow-y: scroll;
        color: ${({ theme: { colors } }) => colors.black};
        background-color: ${({ theme: { colors } }) => colors.white};
    }

    * {
        box-sizing: border-box;
    }

    a {
        text-decoration: none;
        color: inherit;
        background-color: inherit;
    }

    button {
        cursor: pointer;
        user-select: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;
        padding: 0;
        text-decoration: none;
        text-align: center;
        font-family: inherit;
        font-weight: inherit;
        font-size: inherit;
        border: none;
        outline: none;
        appearance: none;
        color: inherit;
        background-color: transparent;
    }
`;
