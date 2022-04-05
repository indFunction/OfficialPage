import NextLink from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

export const Header: FC = () => {
    return (
        <NextLink href='/' passHref>
            <Container>
                <Icon src='/icon.png' alt='Icon' />
                <Title>独立定義虚構関数</Title>
            </Container>
        </NextLink>
    );
};

const Container = styled.a`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin: 4px;
    padding: 8px 0;
`;

const Icon = styled.img`
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    margin: 0 8px;
    font-size: 8px;
`;

const Title = styled.div`
    margin: 0 8px;
    font-weight: 500;
    font-size: 36px;
`;
