import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

const DefaultBlock = css`
    position: relative;
    display: block;
    width: 100%;
    margin: 32px 0 16px 0;
    padding: 16px 8px 8px 8px;

    :before {
        pointer-events: none;
        user-select: none;
        position: absolute;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 800;
    }

    :first-child {
        margin-top: 16px;
    }

    :last-child {
        margin-bottom: 0;
    }
`;

export const Block = css`
    blockquote {
        ${DefaultBlock}

        border: solid 1px ${({ theme: { colors } }) => colors.gray};
        color: ${({ theme: { colors } }) => colors.gray};

        :before {
            content: '”';
            top: -24px;
            left: 4px;
            font-size: 64px;
            color: ${({ theme: { colors } }) => colors.gray};
        }
    }
    .code {
        ${DefaultBlock}

        padding: 0;
        border: solid 1px ${({ theme: { colors } }) => colors.black};
        color: ${({ theme: { colors } }) => colors.white};
        background-color: ${({ theme: { colors } }) => colors.black};

        pre {
            overflow-x: scroll;
            overflow-y: scroll;
            max-height: 320px;
            margin: 0;
            padding: 16px 8px 8px 8px;
        }

        .codeType {
            pointer-events: none;
            user-select: none;
            position: absolute;
            top: -8px;
            left: 8px;
            padding: 0 4px;
            font-family: 'Courier New', Courier, monospace;
            font-weight: 800;
            font-size: 16px;
            color: ${({ theme: { colors } }) => colors.white};
            background-color: ${({ theme: { colors } }) => colors.gray};
        }
    }
    .warning {
        ${DefaultBlock}

        border: solid 1px red;
        color: red;

        :before {
            content: '!';
            top: -16px;
            left: 12px;
            font-size: 32px;
            color: red;
        }
    }
    .example {
        ${DefaultBlock}

        border: solid 1px green;
        color: green;

        :before {
            content: 'ex.';
            top: -20px;
            left: 10px;
            font-size: 32px;
            color: green;
        }
    }
    .point {
        ${DefaultBlock}

        border: solid 1px blue;
        color: blue;

        :before {
            content: '*';
            top: -22px;
            left: 8px;
            font-size: 48px;
            color: blue;
        }
    }
    .math {
        ${DefaultItem}

        overflow-x: auto;
    }
`;
