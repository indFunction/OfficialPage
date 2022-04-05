import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import { Body } from 'components/common/Body';
import { PageMeta } from 'components/common/PageMeta';
import { HomeStyle } from 'components/contents/HomeStyle';
import { Title } from 'components/contents/home/Title';
import { categoryItems } from 'components/data/CategoryItems';
import typePageData from 'types/PageData';

type IndexProps = {
    postData: typePageData[];
    params: {
        category: string;
    };
};

const Index: NextPage<IndexProps> = ({ params, postData }) => {
    const categoryName = categoryItems.find((item) => item.category === params.category).name;
    const meta = { title: categoryName };

    return (
        <Fragment>
            <PageMeta meta={meta} />

            <Body>
                <HomeStyle>
                    {postData.map((postData, index) => (
                        <Fragment key={index}>
                            <Title meta={postData} link={`/posts/${postData.path}`} />
                        </Fragment>
                    ))}
                </HomeStyle>
            </Body>
        </Fragment>
    );
};

export default Index;

export const getStaticPaths: GetStaticPaths = () => {
    const files: string[] = categoryItems.map((item) => item.category);
    const paths = files.map((path) => `/${path}`);

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps<IndexProps, { category: string }> = ({ params }) => {
    if (!params) throw new Error('OOPS');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const postRaw: typePageData[] = require('../posts/postSummary.json');
    const postData: typePageData[] = postRaw.filter((data: typePageData) => data.isPublish && (params.category === 'all' || data.category === params.category));

    return { props: { params, postData } };
};
