import type { GetStaticPaths, GetStaticProps, NextPage } from 'next';
// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PageBuilder } from 'components/mdx/PageBuilder';
import typePageMeta from 'types/PageMeta';
import { convertMDX } from 'utils/ConvertMDX';

type MDXSourceProps = MDXRemoteSerializeResult | { frontmatter: typePageMeta };

type IndexProps = {
    mdxSource: MDXRemoteSerializeResult;
};

type PostIndexProps = {
    path: string;
    isPublish: boolean;
};

const Index: NextPage<IndexProps> = ({ mdxSource }) => {
    return <PageBuilder meta={mdxSource.frontmatter} mdxSource={mdxSource} />;
};

export default Index;

export const getStaticPaths: GetStaticPaths = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const files: Array<PostIndexProps> = require('../../posts/postIndex.json');
    const paths = files.map(({ path }) => `/posts/${path}`);

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<IndexProps, { id: string }> = async ({ params }) => {
    if (!params) throw new Error('OOPS');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const { default: mdx } = require(`../../posts/${params.id}.mdx`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mdxSource: MDXSourceProps = await convertMDX(mdx);

    return { props: { mdxSource } };
};
