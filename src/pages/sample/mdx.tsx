import type { GetStaticProps, NextPage } from 'next';
// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { PageBuilder } from 'components/mdx/PageBuilder';
import typePageMeta from 'types/PageMeta';
import { convertMDX } from 'utils/ConvertMDX';

type MDXSourceProps = MDXRemoteSerializeResult | { frontmatter: typePageMeta };

type IndexProps = {
    mdxSource: MDXRemoteSerializeResult;
};

const Index: NextPage<IndexProps> = ({ mdxSource }) => {
    return <PageBuilder meta={mdxSource.frontmatter} mdxSource={mdxSource} />;
};

export default Index;

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const { default: mdx } = require(`./mdx.mdx`);
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const mdxSource: MDXSourceProps = await convertMDX(mdx);

    return { props: { mdxSource } };
};
