import { MDXProvider } from '@mdx-js/react';
import { FC, Fragment } from 'react';
import { Body } from 'components/common/Body';
import { PageMeta } from 'components/common/PageMeta';
import { DocumentStyle } from 'components/contents/DocumentStyle';
import { Title } from 'components/contents/document/Title';
import typePageMeta from 'types/PageMeta';

type PageMetaProps = {
    meta?: typePageMeta;
};

export const BaseLayout: FC<PageMetaProps> = ({ meta, children }) => {
    return (
        <Fragment>
            {meta ? <PageMeta meta={meta} /> : ''}

            <Body>
                <DocumentStyle>
                    {meta ? <Title meta={meta} /> : ''}
                    <MDXProvider>{children}</MDXProvider>
                </DocumentStyle>
            </Body>
        </Fragment>
    );
};
