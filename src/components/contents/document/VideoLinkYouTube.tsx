import { FC } from 'react';
import styled from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

type VideoLinkYouTubeProps = {
    url: string;
    ratio?: number;
};

type ContainerProps = {
    ratio?: number;
};

export const VideoLinkYouTube: FC<VideoLinkYouTubeProps> = ({ url, ratio }) => {
    return (
        <Container className='item' href={`https://youtu.be/${url}`} target='_blank' rel='noreferrer' ratio={ratio}>
            <Explanation>Click to play on YouTube</Explanation>
            <img src={`http://img.youtube.com/vi/${url}/maxresdefault.jpg`} alt='YouTube Thumbnail' />
        </Container>
    );
};

const Container = styled.a<ContainerProps>`
    ${DefaultItem}

    position: relative;
    display: block;
    width: 100%;
    height: 0;
    margin: 16px 0;
    padding-bottom: ${({ ratio }) => (ratio ? ratio : 56.25)}%;

    && {
        border-bottom: none;
        transition: 0;

        :hover {
            border-bottom: none;
            transition: 0;
        }
    }

    img {
        position: absolute;
        object-fit: cover;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        border: none;
    }
`;

const Explanation = styled.div`
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffffff;
    background-color: #00000080;
    opacity: 0;
    transition: 0.25s;

    :hover {
        opacity: 1;
        transition: 0.25s;
    }
`;
