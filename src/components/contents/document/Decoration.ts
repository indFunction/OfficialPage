import { css } from 'styled-components';

const Arrow = css`
    content: '';
    display: inline-block;
    width: 0;
    height: 0;
    margin: 0 8px;
    vertical-align: middle;
`;

export const Decoration = css`
    .topArrow {
        ${Arrow}

        border-top: solid 6px ${({ theme: { colors } }) => colors.black};
        border-left: solid 6px transparent;
        border-right: solid 6px transparent;
    }
    .bottomArrow {
        ${Arrow}

        border-bottom: solid 6px ${({ theme: { colors } }) => colors.black};
        border-left: solid 6px transparent;
        border-right: solid 6px transparent;
    }
    .leftArrow {
        ${Arrow}

        border-top: solid 6px transparent;
        border-bottom: solid 6px transparent;
        border-right: solid 6px ${({ theme: { colors } }) => colors.black};
    }
    .rightArrow {
        ${Arrow}

        border-top: solid 6px transparent;
        border-bottom: solid 6px transparent;
        border-left: solid 6px ${({ theme: { colors } }) => colors.black};
    }
`;
