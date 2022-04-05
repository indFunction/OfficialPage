import { FC, useState } from 'react';
import styled from 'styled-components';
import { Footer } from 'components/common/Footer';
import { Header } from 'components/common/Header';
import { Menu } from 'components/common/Menu';
import { Side } from 'components/common/Side';

export const Body: FC = ({ children }) => {
    const [menu, setMenu] = useState(false);

    return (
        <Wrapper>
            <Header />
            <Container>
                {children}
                <Side menu={menu} />
                <Menu onClick={() => setMenu(!menu)} menu={menu} />
            </Container>
            <Footer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    overflow-x: visible;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    max-width: 960px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    padding: 4px;

    @media screen and (max-width: 688px) {
        overflow-x: hidden;
        height: 100vh;
    }
`;

const Container = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
`;
