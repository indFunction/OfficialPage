import { FC } from 'react';
import styled from 'styled-components';
import typePageMeta from 'types/PageMeta';

function fixDate(val: undefined | number, min: number, max: number, digit: number) {
    if (val === undefined) return '';

    if (val >= min && val <= max) {
        return zeroPadding(val, digit);
    } else if (val < min) {
        return zeroPadding(min, digit);
    } else {
        return zeroPadding(max, digit);
    }
}

function zeroPadding(val: number, digit: number) {
    return String(val).padStart(digit, '0');
}

export const SummaryDate: FC<{ meta: typePageMeta }> = ({ meta }) => {
    const date: string[] = meta.date ? [fixDate(meta.date[0], 1970, 2037, 4), fixDate(meta.date[1], 1, 12, 2), fixDate(meta.date[2], 1, 31, 2)] : [];

    let display;
    if (date[0] && date[1] && date[2])
        display = (
            <Date>
                {date[0]}年{date[1]}月{date[2]}日
            </Date>
        );

    return <Container>{display}</Container>;
};

const Container = styled.div`
    flex-shrink: 0;
`;

const Date = styled.div`
    margin: 6px 4px 6px 8px;
    padding-left: 8px;
    font-weight: 600;
    font-size: 16px;
    border-left: solid 8px ${({ theme: { colors } }) => colors.gray};
    color: ${({ theme: { colors } }) => colors.gray};
`;
