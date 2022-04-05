import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Body } from 'components/common/Body';
import { PageMeta } from 'components/common/PageMeta';
import { DocumentStyle } from 'components/contents/DocumentStyle';

const meta = { title: 'お問い合わせ' };

const Index: NextPage = () => {
    return (
        <Fragment>
            <PageMeta meta={meta} />

            <Body>
                <DocumentStyle>
                    <h1>お問い合わせ</h1>

                    <p>
                        　フレンドの申請や作品に関する相談などがありましたら、ご気軽に下記の連絡先からコンタクト（連絡）してください。時期や時間帯によっては返信が遅れる可能性もありますので、予めご了承ください。
                    </p>

                    <h2>連絡先</h2>

                    <h3>メールアドレス</h3>

                    <ul>
                        <li>
                            <code>aW5kZnVuY3Rpb25AZ21haWwuY29t</code>
                        </li>
                        <li>
                            BASE64から文字列に
                            <a href='https://cryptii.com/' target='_blank' rel='noreferrer'>
                                変換
                            </a>
                            してください。
                        </li>
                    </ul>

                    <h3>Discord</h3>

                    <ul>
                        <li>None</li>
                    </ul>

                    <h3>Line</h3>

                    <ul>
                        <li>None</li>
                    </ul>

                    <h3>Slack</h3>

                    <ul>
                        <li>None</li>
                    </ul>
                </DocumentStyle>
            </Body>
        </Fragment>
    );
};

export default Index;
