// eslint-disable-next-line import/named
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { FC } from 'react';
import { Code, Example, Point, Warning } from 'components/contents/document/BlockText';
import { ImageLink } from 'components/contents/document/ImageLink';
import { InformationCard } from 'components/contents/document/InformationCard';
import { Link } from 'components/contents/document/Link';
import { PictureGallery } from 'components/contents/document/PictureGallery';
import { ST } from 'components/contents/document/SpanText';
import { VideoFrameYouTube } from 'components/contents/document/VideoFrameYouTube';
import { VideoLinkYouTube } from 'components/contents/document/VideoLinkYouTube';
import { BaseLayout } from 'components/mdx/BaseLayout';
import typePageMeta from 'types/PageMeta';

type PageBuilderProps = {
    meta?: typePageMeta;
    mdxSource: MDXRemoteSerializeResult;
};

const components = {
    Code,
    Example,
    ImageLink,
    InformationCard,
    Link,
    PictureGallery,
    Point,
    ST,
    VideoFrameYouTube,
    VideoLinkYouTube,
    Warning
};

export const PageBuilder: FC<PageBuilderProps> = ({ meta, mdxSource }) => {
    return (
        <BaseLayout meta={meta}>
            <MDXRemote {...mdxSource} components={components} />
        </BaseLayout>
    );
};
