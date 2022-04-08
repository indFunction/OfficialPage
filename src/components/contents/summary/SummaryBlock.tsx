import { FC } from 'react';
import styled from 'styled-components';
import { SummaryDate } from 'components/contents/summary/SummaryDate';
import { SummaryTags } from 'components/contents/summary/SummaryTags';
import typePageMeta from 'types/PageMeta';

type SummaryProps = {
    meta: typePageMeta;
    type: number;
};

type IconProps = {
    thumbnail: string;
};

export const Summary: FC<SummaryProps> = ({ meta, type }) => {
    let titleOtherTop;
    if (type === 1 && meta.date && meta.keywords)
        titleOtherTop = (
            <TitleOtherTop>
                <SummaryDate meta={meta} />
                <SummaryTags meta={meta} type={type} />
            </TitleOtherTop>
        );

    let titleOtherBottom;
    if (type === 2 && meta.date && meta.keywords)
        titleOtherBottom = (
            <TitleOtherBottom>
                <SummaryDate meta={meta} />
                <SummaryTags meta={meta} type={type} />
            </TitleOtherBottom>
        );

    return (
        <Container>
            {titleOtherTop}
            <Split>
                <SplitChildA>
                    <Icon src={meta.thumbnail ? meta.thumbnail : '/icon.png'} alt='Thumbnail' thumbnail={meta.thumbnail} />
                </SplitChildA>
                <SplitChildB>
                    <TitleName>{meta.title}</TitleName>
                    <TitleDescription>{meta.description}</TitleDescription>
                </SplitChildB>
            </Split>
            {titleOtherBottom}
        </Container>
    );
};

const Container = styled.div`
    padding: 8px;
    border: solid 1px ${({ theme: { colors } }) => colors.black};
`;

const Split = styled.div`
    display: flex;
`;

const SplitChildA = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SplitChildB = styled.div``;

const Icon = styled.img<IconProps>`
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    margin: 0 8px;
    font-size: 8px;
    opacity: ${({ thumbnail }) => (thumbnail ? 1 : 0.5)};
`;

const TitleName = styled.h1`
    && {
        margin: 4px 4px 4px 6px;
        padding: 0;
        font-weight: 800;
        font-size: 32px;

        :first-child {
            margin-top: 4px;
        }
    }
`;

const TitleDescription = styled.div`
    margin: 4px 4px 4px 8px;
    font-weight: 300;
    font-size: 16px;
`;

const TitleOtherTop = styled.div`
    overflow-x: hidden;
    display: flex;
`;

const TitleOtherBottom = styled.div``;
