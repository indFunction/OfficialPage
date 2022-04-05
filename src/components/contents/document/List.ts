import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

const DefaultList = css`
    ul {
        margin: 4px 0 4px 16px;
    }

    ol {
        margin: 4px 0 4px 16px;
    }

    li {
        margin: 4px 0;

        :first-of-type {
            margin-top: 0;
        }

        :last-of-type {
            margin-bottom: 0;
        }
    }
`;

export const List = css`
    ul {
        ${DefaultItem}
        ${DefaultList}

        list-style-type: none !important;
        margin: 16px 0 16px 16px;
        padding: 0;

        li {
            :before {
                content: '';
                display: inline-block;
                width: 4px;
                height: 4px;
                margin-bottom: 4px;
                margin-left: -12px;
                margin-right: 8px;
                border-radius: 50%;
                background: ${({ theme: { colors } }) => colors.black};
            }
        }
    }
    ol {
        ${DefaultItem}
        ${DefaultList}

        margin: 16px 0 16px 16px;
        padding: 0;

        li {
            :before {
                display: none;
            }
        }
    }
`;
