import { FC } from 'react';
import styled from 'styled-components';
import { Summary } from 'components/contents/summary/SummaryBlock';
import typePageMeta from 'types/PageMeta';

export const Title: FC<{ meta: typePageMeta }> = ({ meta }) => {
    return (
        <Container>
            <Summary meta={meta} type={2} />
        </Container>
    );
};

const Container = styled.div`
    margin-bottom: 64px;
`;
