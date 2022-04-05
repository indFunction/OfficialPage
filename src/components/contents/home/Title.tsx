import NextLink from 'next/link';
import { FC, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { Summary } from 'components/contents/summary/SummaryBlock';
import typePageMeta from 'types/PageMeta';

type PageMetaProps = {
    meta: typePageMeta;
    link?: string;
};

export const Title: FC<PageMetaProps> = ({ meta, link }) => {
    return (
        <Fragment>
            {link && link !== '' ? (
                <NextLink href={link} passHref>
                    <FunctionContainer>
                        <Summary meta={meta} type={1} />
                    </FunctionContainer>
                </NextLink>
            ) : (
                <NoFunctionContainer>
                    <Summary meta={meta} type={1} />
                </NoFunctionContainer>
            )}
        </Fragment>
    );
};

const Container = css`
    margin-bottom: 16px;

    :last-child {
        margin-bottom: 0;
    }

    && {
        h1 {
            font-size: 24px;
        }
    }
`;

const FunctionContainer = styled.a`
    ${Container}

    cursor: pointer;
    display: block;
    opacity: 1;
    transition-property: opacity;
    transition: 0.25s;

    :hover {
        opacity: 0.5;
        transition-property: opacity;
        transition: 0.25s;
    }
`;

const NoFunctionContainer = styled.div`
    ${Container}
`;
