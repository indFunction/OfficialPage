import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

export const Paragraph = css`
    p {
        ${DefaultItem}

        margin: 16px 0;
        padding: 0;
    }

    .gothic {
        font-family: sans-serif;
    }

    .serif {
        font-family: serif;
    }
`;
