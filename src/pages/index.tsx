import { GetStaticProps, NextPage } from 'next';
import { Fragment } from 'react';
import { Body } from 'components/common/Body';
import { PageMeta } from 'components/common/PageMeta';
import { HomeStyle } from 'components/contents/HomeStyle';
import { Title } from 'components/contents/home/Title';
import typePageData from 'types/PageData';

type IndexProps = {
    postData: typePageData[];
};

const meta = { title: 'ホーム' };

const Index: NextPage<IndexProps> = ({ postData }) => {
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

export const getStaticProps: GetStaticProps<IndexProps> = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
    const postRaw: typePageData[] = require('../posts/postSummary.json');
    const postData: typePageData[] = postRaw.filter((data: typePageData) => data.isPublish);

    return { props: { postData } };
};
