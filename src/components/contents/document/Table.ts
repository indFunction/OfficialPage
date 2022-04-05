import { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

export const Table = css`
    table {
        ${DefaultItem}

        border-collapse: collapse;
        margin: 16px 0;
        color: ${({ theme: { colors } }) => colors.black};

        thead {
            border-bottom: double 3px ${({ theme: { colors } }) => colors.black};
        }

        th {
            margin: 0;
            padding: 4px;
            text-align: left;
            vertical-align: top;
            font-weight: 600;
            border: solid 1px ${({ theme: { colors } }) => colors.black};
        }

        td {
            margin: 0;
            padding: 4px;
            text-align: left;
            vertical-align: top;
            font-weight: 500;
            border: solid 1px ${({ theme: { colors } }) => colors.black};
        }

        .nowrap {
            white-space: nowrap;
        }

        .textLeft {
            text-align: left;
        }

        .textCenter {
            text-align: center;
        }

        .textRight {
            text-align: right;
        }

        .verticalTop {
            vertical-align: top;
        }

        .verticalMiddle {
            vertical-align: middle;
        }

        .verticalBottom {
            vertical-align: bottom;
        }
    }
`;
