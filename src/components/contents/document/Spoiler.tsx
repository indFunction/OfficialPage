import { FC, useState } from 'react';
import styled from 'styled-components';
import { Decoration } from 'components/contents/document/Decoration';
import { DefaultItem } from 'components/contents/document/DefaultItem';

type SpoilerProps = {
    item: string;
};

type ToggleSpoilerProps = {
    isOpen: boolean;
};

export const Spoiler: FC<SpoilerProps> = ({ item, children }) => {
    const [openSpoiler, setOpenSpoiler] = useState(false);

    function toggleSpoiler() {
        setOpenSpoiler(!openSpoiler);
    }

    return (
        <Container className='item'>
            <Item onClick={() => toggleSpoiler()}>
                <Arrow className='rightArrow' isOpen={openSpoiler} />
                {item}
            </Item>
            <Content isOpen={openSpoiler}>{children}</Content>
        </Container>
    );
};

const Container = styled.div`
    ${DefaultItem}

    margin: 16px 0;
`;

const Item = styled.button`
    ${Decoration}

    padding-right: 8px;
    border: solid 1px ${({ theme: { colors } }) => colors.black};
    transition-property: color, background-color;
    transition: 0.25s;

    .rightArrow {
        transition-property: border-left;
        transition: 0.25s;
    }

    :hover {
        color: ${({ theme: { colors } }) => colors.white};
        background-color: ${({ theme: { colors } }) => colors.black};
        transition-property: color, background-color;
        transition: 0.25s;

        .rightArrow {
            border-left: solid 6px ${({ theme: { colors } }) => colors.white};
            transition-property: border-left;
            transition: 0.25s;
        }
    }
`;

const Arrow = styled.span<ToggleSpoilerProps>`
    transform: rotate(${({ isOpen }) => (isOpen ? '90deg' : '0deg')});
    transition-property: transform;
    transition: 0.25s;
`;

const Content = styled.div<ToggleSpoilerProps>`
    user-select: ${({ isOpen }) => (isOpen ? 'auto' : 'none')};
    overflow-y: hidden;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    height: 100%;
    margin-top: 16px;
`;
