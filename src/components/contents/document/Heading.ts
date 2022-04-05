import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

export const Heading = css`
    h1 {
        ${DefaultItem}

        margin: 64px 0 16px;
        padding: 0;
        font-weight: 800;
        font-size: 32px;
    }
    h2 {
        ${DefaultItem}

        margin: 64px 0 16px;
        padding: 0;
        font-weight: 800;
        font-size: 28px;
        border-bottom: solid 2px ${({ theme: { colors } }) => colors.gray};
    }
    h3 {
        ${DefaultItem}

        margin: 64px 0 16px;
        padding: 0 0 0 8px;
        font-weight: 800;
        font-size: 24px;
        border-left: solid 8px ${({ theme: { colors } }) => colors.gray};
    }
    h4 {
        margin: 16px 0;
        padding: 0;
        font-weight: 600;
        font-size: 20px;
    }
    h5 {
        margin: 16px 0;
        padding: 0;
        font-weight: 600;
        font-size: 16px;
    }
    h6 {
        margin: 16px 0;
        padding: 0;
        font-weight: 600;
        font-size: 12px;
    }
    .joinHeading {
        margin-top: 16px;
    }
`;
