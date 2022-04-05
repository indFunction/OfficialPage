import { FC, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { categoryItems } from 'components/data/CategoryItems';
import typePageMeta from 'types/PageMeta';

export const SummaryTags: FC<{ meta: typePageMeta }> = ({ meta }) => {
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

    return (
        <Container>
            {categoryTag}
            {keywordTags}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 4px -4px 4px 4px;
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
