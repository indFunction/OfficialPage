import { FC } from 'react';
import styled from 'styled-components';
import typePageMeta from 'types/PageMeta';
import { fixDate } from 'utils/FixDate';

export const SummaryDate: FC<{ meta: typePageMeta }> = ({ meta }) => {
    const date: string[] = meta.date ? fixDate(meta.date) : [];

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
