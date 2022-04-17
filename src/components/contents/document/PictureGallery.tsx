import { FC, Fragment, useState } from 'react';
import styled, { css } from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

type PictureGalleryProps = {
    data: string[];
    border?: boolean;
    isSlide?: boolean;
    pictureNum?: number;
};

type PictureProps = {
    border?: boolean;
};

export const PictureGallery: FC<PictureGalleryProps> = ({ data, border, isSlide }) => {
    const [pictureNum, setPictureNum] = useState(0);

    function changePictureIndex(n: number) {
        if (n > 0 && pictureNum + n < data.length) {
            setPictureNum(pictureNum + n);
        } else if (n < 0 && pictureNum + n >= 0) {
            setPictureNum(pictureNum + n);
        }
    }

    let pictureContainer;
    if (data.length > 1) {
        if (isSlide) {
            pictureContainer = (
                <SlideContainer>
                    <Button onClick={() => changePictureIndex(-1)}>&lt;</Button>
                    <SinglePictureContainer href={data[pictureNum]}>
                        <Picture src={data[pictureNum]} border={border} />
                    </SinglePictureContainer>
                    <Button onClick={() => changePictureIndex(1)}>&gt;</Button>
                </SlideContainer>
            );
        } else {
            pictureContainer = data.map((item, index) => (
                <Fragment key={index}>
                    <MultiPictureContainer href={item}>
                        <Picture src={item} border={border} />
                    </MultiPictureContainer>
                </Fragment>
            ));
        }
    } else {
        pictureContainer = (
            <SinglePictureContainer href={data[0]}>
                <Picture src={data[0]} border={border} />
            </SinglePictureContainer>
        );
    }

    return (
        <Wrapper className='item'>
            <Container>{pictureContainer}</Container>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    ${DefaultItem}

    margin: 16px 0;
`;

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: -4px;
`;

const SlideContainer = styled.div`
    display: flex;
`;

const Button = styled.button`
    width: 32px;
    height: calc(100% - 8px);
    margin: 4px;
    padding: 4px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 800;
    font-size: 16px;
    color: ${({ theme: { colors } }) => colors.white};
    background-color: ${({ theme: { colors } }) => colors.black};
    transition-property: color, background-color;
    transition: 0.25s;

    :hover {
        background-color: ${({ theme: { colors } }) => colors.gray};
    }
`;

const PictureContainer = css`
    display: block;
    margin: 4px;
    border-bottom: none;
    transition: 0;

    :hover {
        border-bottom: none;
        transition: 0;
    }
`;

const SinglePictureContainer = styled.a`
    && {
        ${PictureContainer}

        width: calc(100% - 8px);
    }
`;

const MultiPictureContainer = styled.a`
    && {
        ${PictureContainer}

        width: calc(50% - 8px);
    }
`;

const Picture = styled.img<PictureProps>`
    && {
        object-fit: cover;
        display: block;
        width: 100%;
        height: auto;
        ${({ border }) =>
            border &&
            css`
                padding: 1px;
                border: solid 1px ${({ theme: { colors } }) => colors.gray};
            `}
    }
`;
