import { FC } from 'react';
import styled from 'styled-components';

type MenuPropsA = {
    onClick: () => void;
    menu: boolean;
};

type MenuPropsB = {
    menu: boolean;
};

export const Menu: FC<MenuPropsA> = ({ onClick, menu }) => {
    return (
        <Container menu={menu} onClick={onClick}>
            <Button menu={menu}>
                <span />
                <span />
                <span />
            </Button>
        </Container>
    );
};

const Container = styled.button<MenuPropsB>`
    pointer-events: none;
    user-select: none;
    position: sticky;
    top: 0;
    right: ${({ menu }) => (menu ? 4 : 0)}px;
    width: 0;
    height: 0;
    opacity: 0;
    transition-property: opacity;
    transition: 0.25s;

    @media screen and (max-width: 688px) {
        pointer-events: fill;
        opacity: 1;
        transition-property: opacity;
        transition: 0.25s;
    }
`;

const Button = styled.div<MenuPropsB>`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    margin: 4px;
    padding: 4px;
    font-weight: 600;
    font-size: 16px;
    border: solid 1px ${({ theme: { colors } }) => colors.white};
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.black};
    transition-property: background-color;
    transition: 0.25s;

    :hover {
        background-color: ${({ theme: { colors } }) => colors.gray};
        transition-property: background-color;
        transition: 0.25s;
    }

    span {
        content: '';
        position: absolute;
        display: inline-block;
        width: 24px;
        height: 2px;
        margin: 4px;
        background-color: ${({ theme: { colors } }) => colors.white};
        transition: 0.25s;

        :nth-of-type(1) {
            top: ${({ menu }) => (menu ? 18 : 10)}px;
            left: calc(8px - 1px);
            rotate: ${({ menu }) => (menu ? 135 : 0)}deg;
        }

        :nth-of-type(2) {
            top: 18px;
            left: calc(8px - 1px);
            rotate: ${({ menu }) => (menu ? 180 : 0)}deg;
            opacity: ${({ menu }) => (menu ? 0 : 1)};
        }

        :nth-of-type(3) {
            top: ${({ menu }) => (menu ? 18 : 26)}px;
            left: calc(8px - 1px);
            rotate: ${({ menu }) => (menu ? 225 : 0)}deg;
        }
    }
`;
