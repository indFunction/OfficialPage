import { FC, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { categoryItems } from 'components/data/CategoryItems';
import typePageMeta from 'types/PageMeta';

type SummaryTagsProps = {
    meta: typePageMeta;
    type: number;
};

export const SummaryTags: FC<SummaryTagsProps> = ({ meta, type }) => {
    let categoryTag;
    if (meta.category) categoryTag = <CategoryTag>{categoryItems.find((item) => item.category === meta.category).name}</CategoryTag>;

    let keywordTags;
    if (meta.keywords)
        keywordTags = (
            <Fragment>
                {meta.keywords.map((tag, index) => (
                    <Fragment key={index}>
                        <KeywordTag>{tag}</KeywordTag>
                    </Fragment>
                ))}
            </Fragment>
        );

    return type == 1 ? (
        <ContainerA>
            {categoryTag}
            {keywordTags}
        </ContainerA>
    ) : (
        <ContainerB>
            {categoryTag}
            {keywordTags}
        </ContainerB>
    );
};

const Container = css`
    display: flex;
    margin: 4px -4px 4px 4px;
`;

const ContainerA = styled.div`
    ${Container}

    flex-shrink: 0;
`;

const ContainerB = styled.div`
    ${Container}

    flex-wrap: wrap;
`;

const Tag = css`
    margin: 2px;
    padding: 2px 4px;
    font-weight: 600;
    font-size: 12px;
    border-radius: 4px;

    :before {
        content: '#';
    }
`;

const CategoryTag = styled.div`
    ${Tag}

    border: solid 1px ${({ theme: { colors } }) => colors.black};
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.black};
`;

const KeywordTag = styled.div`
    ${Tag}

    border: solid 1px ${({ theme: { colors } }) => colors.gray};
    color: ${({ theme: { colors } }) => colors.gray};
    background-color: ${({ theme: { colors } }) => colors.white};
`;
