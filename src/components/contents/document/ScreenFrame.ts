import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

export const ScreenFrame = css`
    .screenFrame {
        ${DefaultItem}

        position: relative;
        width: 100%;
        height: 0;
        margin: 16px 0;
        padding-bottom: 56.25%;

        iframe {
            object-fit: cover;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            margin: 0;
            border: none;
        }
    }
`;
