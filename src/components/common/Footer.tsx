import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

export const Footer: FC = () => {
    return (
        <Container>
            <Copyright>Copyright 2022 独立関数 / indFunction</Copyright>
            <Links>
                <NextLink href='/terms' passHref>
                    <Link>利用規約</Link>
                </NextLink>
                <NextLink href='/contact' passHref>
                    <Link>お問い合わせ</Link>
                </NextLink>
            </Links>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 64px 4px 4px 4px;
    padding: 8px;
`;

const Copyright = styled.div`
    flex-grow: 1;
`;

const Links = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    margin: 0 -8px;
`;

const Link = styled.a`
    user-select: none;
    display: block;
    margin: 0 8px;
    font-weight: 600;
    border-bottom: solid 1px transparent;
    transition: 0.25s;

    :hover {
        border-bottom: solid 1px ${({ theme: { colors } }) => colors.black};
        transition: 0.25s;
    }
`;
