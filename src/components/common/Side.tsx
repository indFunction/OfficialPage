import NextLink from 'next/link';
import { FC, Fragment } from 'react';
import styled, { css } from 'styled-components';
import { categoryItems } from 'components/data/CategoryItems';
import { linkItems } from 'components/data/LinkItems';

type SideProps = {
    menu?: boolean;
};

export const Side: FC<{ menu?: boolean }> = ({ menu }) => {
    return (
        <Base>
            <Container menu={menu}>
                <Items>
                    <Head>カテゴリー</Head>
                    {categoryItems.map((item, index) => (
                        <Fragment key={index}>
                            <NextLink href={`/${item.category}`} passHref>
                                <Link>{item.name}</Link>
                            </NextLink>
                        </Fragment>
                    ))}
                </Items>
                <Items>
                    <Head>リンク</Head>
                    {linkItems.map((item, index) => (
                        <Fragment key={index}>
                            <Link href={item.url} target='_blank' rel='noreferrer'>
                                {item.name}
                            </Link>
                        </Fragment>
                    ))}
                </Items>
            </Container>
        </Base>
    );
};

const Base = styled.div`
    position: relative;
    min-width: 240px;
    margin: 4px;
    padding: 8px;

    @media screen and (max-width: 688px) {
        position: sticky;
        min-width: 0;
        top: -4px;
        right: 0;
        width: 0;
        height: 0;
        margin: 0;
        padding: 0;
    }

    @media print {
        display: none;
    }
`;

const Container = styled.div<SideProps>`
    overflow-y: hidden;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    padding: 8px 12px;
    border-left: solid 1px ${({ theme: { colors } }) => colors.black};
    background-color: ${({ theme: { colors } }) => colors.white};
    transition-property: width;
    transition: 0.25s;

    @media screen and (max-width: 688px) {
        overflow-y: scroll;
        right: ${({ menu }) => (menu ? '-4px' : '-244px')};
        width: 240px;
        height: 100vh;
    }
`;

const Items = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Head = styled.div`
    width: 100%;
    margin-bottom: 8px;
    font-weight: 600;
    font-size: 12px;
    border-bottom: dotted 1px ${({ theme: { colors } }) => colors.black};
`;

const Item = css`
    cursor: pointer;
    user-select: none;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    min-height: 32px;
    margin: 4px 0;
    padding: 4px 4px 4px 0;
    text-align: left;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.black};
    background-color: transparent;
    transition-property: color, background-color;
    transition: 0.25s;

    :before {
        content: '';
        display: block;
        width: 0;
        height: 0;
        margin: 0 8px 0 0;
        border-top: solid 12px ${({ theme: { colors } }) => colors.black};
        border-bottom: solid 12px ${({ theme: { colors } }) => colors.black};
        border-right: solid 6px ${({ theme: { colors } }) => colors.black};
        transition-property: margin;
        transition: 0.25s;
    }

    :hover {
        color: ${({ theme: { colors } }) => colors.white};
        background-color: ${({ theme: { colors } }) => colors.black};
        transition-property: color, background-color;
        transition: 0.25s;
    }

    :hover:before {
        margin: 0 8px 0 8px;
        border-top: solid 6px transparent;
        border-bottom: solid 6px transparent;
        border-right: solid 12px ${({ theme: { colors } }) => colors.white};
        transition-property: margin, border;
        transition: 0.25s;
    }

    :active {
        color: ${({ theme: { colors } }) => colors.gray};
        transition-property: color;
        transition: 0.05s;
    }

    :active:before {
        margin: 0 8px 0 8px;
        border-top: solid 0 transparent;
        border-bottom: solid 0 transparent;
        border-right: solid 12px ${({ theme: { colors } }) => colors.gray};
        transition-property: margin, border;
        transition: 0.05s;
    }
`;

/*

const Button = styled.button`
    ${Item};
`;

*/

const Link = styled.a`
    ${Item};
`;
