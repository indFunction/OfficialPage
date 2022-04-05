// eslint-disable-next-line import/named
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export const convertMDX = async (mdxText: string): Promise<MDXRemoteSerializeResult> => {
    const formatted = mdxText
        .replace(/\[.+\]\(http.+\)/g, (str) => {
            const result = str.match(/\[(.+)\]\((.+)\)/);
            const url = result[2];
            const text = result[1];
            return `<a href="${url}" target="_blank" rel="noreferrer">${text}</a>`;
        })
        .replace(/<http.+>/g, (str) => {
            const result = str.match(/<(.+)>/);
            const url = result[1];
            return `<a href="${url}" target="_blank" rel="noreferrer">${url}</a>`;
        });

    const mdxSource = await serialize(formatted, {
        mdxOptions: {
            remarkPlugins: [],
            rehypePlugins: []
        },
        parseFrontmatter: true
    });

    return mdxSource;
};
