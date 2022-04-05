import { css } from 'styled-components';

export const TextDecoration = css`
    b {
        font-weight: 800;
    }
    i {
        font-weight: 500;
    }
    s {
        color: ${({ theme: { colors } }) => colors.gray};
    }
    a {
        font-weight: 600;
        color: ${({ theme: { colors } }) => colors.accent};
        border-bottom: solid 1px transparent;
        transition: 0.25s;

        :hover {
            border-bottom: solid 1px ${({ theme: { colors } }) => colors.accent};
            transition: 0.25s;
        }
    }
    q {
        font-weight: 600;
        color: ${({ theme: { colors } }) => colors.gray};

        :before {
            content: '“';
            margin-right: 2px;
            font-weight: 800;
            color: ${({ theme: { colors } }) => colors.gray};
        }
        :after {
            content: '”';
            margin-left: 2px;
            font-weight: 800;
            color: ${({ theme: { colors } }) => colors.gray};
        }
    }
    code {
        padding: 2px;
        font-size: 14px;
        color: ${({ theme: { colors } }) => colors.white};
        background-color: ${({ theme: { colors } }) => colors.black};
    }

    .fs32 {
        font-size: 32px;
    }
    .fs24 {
        font-size: 24px;
    }
    .fs16 {
        font-size: 16px;
    }
    .fs12 {
        font-size: 12px;
    }
    .fs8 {
        font-size: 8px;
    }
`;
