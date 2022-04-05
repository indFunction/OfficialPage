import Head from 'next/head';
import { FC } from 'react';
import { commonKeywords } from 'components/data/CommonKeywords';
import typePageMeta from 'types/PageMeta';

export const PageMeta: FC<{ meta: typePageMeta }> = ({ meta }) => {
    const title: string = meta.title ? `${meta.title} | 独立関数` : '独立定義虚構関数';
    const description: string = meta.description ? meta.description : '独立関数が運営するウェブサイト';
    const keywords: string[] = meta.keywords ? commonKeywords.concat(meta.keywords) : commonKeywords;

    return (
        <Head>
            <title>{title}</title>

            <meta property='title' content={title} />
            <meta property='description' content={description} />
            <meta property='keywords' content={`${keywords.join(',')}`} />

            <meta property='og:title' content={title} />
            <meta property='og:description' content={description} />
            <meta property='og:type' content='website' />
        </Head>
    );
};
