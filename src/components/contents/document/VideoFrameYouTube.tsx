import { FC } from 'react';
import styled from 'styled-components';
import { DefaultItem } from 'components/contents/document/DefaultItem';

type VideoFrameYouTubeProps = {
    url: string;
    ratio?: number;
};

type ContainerProps = {
    ratio?: number;
};

export const VideoFrameYouTube: FC<VideoFrameYouTubeProps> = ({ url, ratio }) => {
    return (
        <Container className='item' ratio={ratio}>
            <iframe src={`https://www.youtube.com/embed/${url}`}></iframe>
        </Container>
    );
};

const Container = styled.div<ContainerProps>`
    ${DefaultItem}

    position: relative;
    width: 100%;
    height: 0;
    margin: 16px 0;
    padding-bottom: ${({ ratio }) => (ratio ? ratio : 56.25)}%;

    iframe {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        margin: 0;
        border: none;
    }
`;
