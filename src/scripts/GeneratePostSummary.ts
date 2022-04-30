import { MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import typeMeta from '../types/PageMeta';
import fs from 'node:fs/promises';

type Source = MDXRemoteSerializeResult<typeMeta>;

type PostIndexProps = {
    path: string;
    isPublish: boolean;
};

void (async () => {
    const postIndex = (await fs.readFile(new URL('../posts/postIndex.json', import.meta.url), 'utf8').then(JSON.parse)) as PostIndexProps[];
    if (!postIndex) {
        throw new Error('PostIndexの取得に失敗しました');
    }

    console.log('PostIndexに含まれるデータを取得しています');

    const postData: PostIndexProps[] = postIndex.filter((postIndex: PostIndexProps) => postIndex.isPublish);

    const data = await Promise.all(
        postData.map(async (postData) => {
            const mdx = await fs.readFile(new URL(`../posts/${postData.path}.mdx`, import.meta.url), 'utf8');
            const mdxSource = (await serialize(mdx, { parseFrontmatter: true })) as unknown as Source;
            const mdxMeta = mdxSource.frontmatter;

            console.log(`記事${mdxMeta.path}のメタデータを取得しました`);

            return { ...postData, ...mdxMeta };
        })
    );

    await fs.writeFile(new URL('../posts/postSummary.json', import.meta.url), JSON.stringify(data, null, 4));

    console.log('PostSummaryを生成しました');
})();

export default {};
