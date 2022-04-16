import { FC } from 'react';
import styled from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

type ContainerProps = {
    mainTitle?: string;
    subTitle?: string;
    icon?: string;
};

export const InformationCard: FC<ContainerProps> = ({ mainTitle, subTitle, icon, children }) => {
    let iconContainer;
    if (icon) iconContainer = <Icon src={icon} />;

    let mainTitleContainer;
    if (mainTitle) mainTitleContainer = <MainTitle>{mainTitle}</MainTitle>;

    let subTitleContainer;
    if (subTitle) {
        if (subTitle.startsWith('https://') || subTitle.startsWith('http://')) {
            subTitleContainer = (
                <SubTitle>
                    <a href={subTitle} target='_blank' rel='noreferrer'>
                        {subTitle}
                    </a>
                </SubTitle>
            );
        } else {
            subTitleContainer = <SubTitle>{subTitle}</SubTitle>;
        }
    }

    return (
        <Container className='item'>
            <Head>
                {iconContainer}
                <div>
                    {mainTitleContainer}
                    {subTitleContainer}
                </div>
            </Head>
            <Main>{children}</Main>
        </Container>
    );
};

const Container = styled.div`
    ${DefaultItem}

    margin: 16px 0;
    padding: 8px;
    border: solid 1px ${({ theme: { colors } }) => colors.black};
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    margin: 8px;
`;

const Icon = styled.img`
    && {
        object-fit: cover;
        width: 64px;
        height: 64px;
        margin-right: 16px;
    }
`;

const MainTitle = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 20px;
`;

const SubTitle = styled.div`
    margin: 0;
    padding: 0;
    font-weight: 600;
    font-size: 14px;
    color: ${({ theme: { colors } }) => colors.gray};

    a {
        word-break: break-all;
        font-family: 'Courier New', Courier, monospace;
        font-weight: 800;
    }
`;

const Main = styled.div`
    margin: 8px;
`;
