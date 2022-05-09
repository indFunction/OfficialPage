import { MathJax } from 'better-react-mathjax';
import type { NextPage } from 'next';
import { Fragment } from 'react';
import { Body } from 'components/common/Body';
import { PageMeta } from 'components/common/PageMeta';
import { DocumentStyle } from 'components/contents/DocumentStyle';
import { ImageLink } from 'components/contents/document/ImageLink';
import { InformationCard } from 'components/contents/document/InformationCard';
import { PictureGallery } from 'components/contents/document/PictureGallery';
import { Title } from 'components/contents/document/Title';
import { VideoFrameYouTube } from 'components/contents/document/VideoFrameYouTube';
import { VideoLinkYouTube } from 'components/contents/document/VideoLinkYouTube';

const meta = {
    thumbnail: '',
    title: 'サンプル',
    description: 'HTMLで作成した記事のサンプルです。',
    date: [1970, 1, 1],
    keywords: ['サンプル', '確認']
};

const Index: NextPage = () => {
    return (
        <Fragment>
            <PageMeta meta={meta} />

            <Body>
                <DocumentStyle>
                    <Title meta={meta} />

                    <h1 className='joinHeading'>見出し1</h1>
                    <h2 className='joinHeading'>見出し2</h2>
                    <h3 className='joinHeading'>見出し3</h3>
                    <h4 className='joinHeading'>見出し4</h4>
                    <h5 className='joinHeading'>見出し5</h5>
                    <h6 className='joinHeading'>見出し6</h6>

                    <h2>段落</h2>

                    <h3>ゴシック体</h3>

                    <p className='gothic'>
                        　「有る物」について調査や研究、もしくは存在自体を証明することは簡単である。一方で「無い物」については、初めから存在を否定するのも難しい。なぜなら、世界に存在する原子から概念に至るまでの物事・事象を排他的に捉えなければ、それが〝無い〟という証明にならないからである。
                    </p>
                    <p className='gothic'>
                        　人間は想像力が豊かである。そんな私たちは、架空の存在を疑似的に実体として扱うことも多い。実体を持たない、云わば「概念」というものは、時代の進歩と共に重要な役目を担うようになった。この文章を表示するディスプレイは、ただのデジタル信号で動いている。更に言えば貴方が読んでいる文字すらも、人間が勝手に作り上げた産物に過ぎない。
                    </p>
                    <p className='gothic'>
                        　それらは、記号的に解釈することで意味や意義が自ずと生まれる。人間はそれらに価値があることに気が付いた。それからの時代の流れは速く、何時しか人類は立派な生活を営むようになった。今日の暮らしも、虚構であるはずの概念に支えられている。
                    </p>
                    <p className='gothic'>
                        　世界に「有る物」を満たした者は誰か。時間という一方通行の流れに縛られず、自己相似性に基いて考えてほしい。それに〝成り得る〟者が、誰であるのかを。
                    </p>

                    <h3>明朝体</h3>

                    <p className='serif'>
                        　目を覚ますと、私の視界には白い世界が広がっていた。それは雪山でも部屋でも比喩でもなく、ただ白色の何かが塗られているようだった。平衡感覚を失い、そこで初めて地面がないことに気が付いた。上も分からず落下している。何も、成す術はない。
                    </p>
                    <p className='serif'>
                        　しかし鳥肌を奮い立たせるような、不思議な感覚を私は身に付けていた。自分を動かすような、実体のない感覚を弄る、すると、景色が豹変した。嗚呼、交差点だ。大型建造物で囲まれたアスファルトの道路に、人々や車両が行き交っている。更に「進む」と、自分は手付かずの美しい草原の上に立っていた。陽射が霞んだ大気を照らし、微風と草木が靡いている。
                    </p>

                    <h2>文字</h2>

                    <p>
                        通常：いろはにほへとちりぬるを
                        <br />
                        Normal: The quick brown fox jumps over the lazy dog
                    </p>
                    <p>
                        太字：<b>いろはにほへとちりぬるを</b>
                        <br />
                        Bold: <b>The quick brown fox jumps over the lazy dog</b>
                    </p>
                    <p>
                        斜体：<i>いろはにほへとちりぬるを</i>
                        <br />
                        Italic: <i>The quick brown fox jumps over the lazy dog</i>
                    </p>
                    <p>
                        打ち消し：<s>いろはにほへとちりぬるを</s>
                        <br />
                        Denial: <s>The quick brown fox jumps over the lazy dog</s>
                    </p>
                    <p>
                        リンク：
                        <a href='https://ja.wikipedia.org/wiki/%E3%81%84%E3%82%8D%E3%81%AF%E6%AD%8C' target='_blank' rel='noreferrer'>
                            いろはにほへとちりぬるを
                        </a>
                        <br />
                        Link:&nbsp;
                        <a href='https://ja.wikipedia.org/wiki/The_quick_brown_fox_jumps_over_the_lazy_dog' target='_blank' rel='noreferrer'>
                            The quick brown fox jumps over the lazy dog
                        </a>
                    </p>
                    <p>
                        引用テキスト：<q>いろはにほへとちりぬるを</q>
                        <br />
                        Quote Text: <q>The quick brown fox jumps over the lazy dog</q>
                    </p>
                    <p>
                        コード：<code>いろはにほへとちりぬるを</code>
                        <br />
                        Code: <code>The quick brown fox jumps over the lazy dog</code>
                    </p>
                    <p>
                        色付き文字：<span className='red_tc'>赤色</span>，<span className='orange_tc'>橙色</span>，<span className='yellow_tc'>黄色</span>，
                        <span className='lime_tc'>黄緑色</span>，<span className='green_tc'>緑色</span>，<span className='aqua_tc'>水色</span>，
                        <span className='blue_tc'>青色</span>，<span className='purple_tc'>紫色</span>
                        <br />
                        Color Text: <span className='red_tc'>Red</span>,&nbsp;
                        <span className='orange_tc'>Orange</span>,&nbsp;
                        <span className='yellow_tc'>Yellow</span>,&nbsp;
                        <span className='lime_tc'>Lime</span>,&nbsp;
                        <span className='green_tc'>Green</span>,&nbsp;
                        <span className='aqua_tc'>Aqua</span>,&nbsp;
                        <span className='blue_tc'>Blue</span>,&nbsp;
                        <span className='purple_tc'>Purple</span>
                    </p>
                    <p>
                        ハイライト文字：<span className='red_bc'>赤色</span>，<span className='orange_bc'>橙色</span>，<span className='yellow_bc'>黄色</span>，
                        <span className='lime_bc'>黄緑色</span>，<span className='green_bc'>緑色</span>，<span className='aqua_bc'>水色</span>，
                        <span className='blue_bc'>青色</span>，<span className='purple_bc'>紫色</span>
                        <br />
                        Highlight Text:&nbsp;
                        <span className='red_bc'>Red</span>,&nbsp;
                        <span className='orange_bc'>Orange</span>,&nbsp;
                        <span className='yellow_bc'>Yellow</span>,&nbsp;
                        <span className='lime_bc'>Lime</span>,&nbsp;
                        <span className='green_bc'>Green</span>,&nbsp;
                        <span className='aqua_bc'>Aqua</span>,&nbsp;
                        <span className='blue_bc'>Blue</span>,&nbsp;
                        <span className='purple_bc'>Purple</span>
                    </p>
                    <p>
                        寸法設定文字：
                        <br />
                        <span className='fs32'>いろはにほへとちりぬるを</span>
                        <br />
                        <span className='fs24'>いろはにほへとちりぬるを</span>
                        <br />
                        <span className='fs16'>いろはにほへとちりぬるを</span>
                        <br />
                        <span className='fs12'>いろはにほへとちりぬるを</span>
                        <br />
                        <span className='fs8'>いろはにほへとちりぬるを</span>
                    </p>
                    <p>
                        Sized Text:&nbsp;
                        <br />
                        <span className='fs32'>The quick brown fox jumps over the lazy dog</span>
                        <br />
                        <span className='fs24'>The quick brown fox jumps over the lazy dog</span>
                        <br />
                        <span className='fs16'>The quick brown fox jumps over the lazy dog</span>
                        <br />
                        <span className='fs12'>The quick brown fox jumps over the lazy dog</span>
                        <br />
                        <span className='fs8'>The quick brown fox jumps over the lazy dog</span>
                    </p>
                    <p>
                        <MathJax>{'マンデルブロ集合の定義は\\(\\begin{cases} Z_{n + 1} = z_{n}^{2} + c \\\\ Z_{n} = 0 \\end{cases}\\)である。'}</MathJax>
                    </p>
                    <p>
                        <MathJax>{'黄金比は\\(1 : \\dfrac{1 + \\sqrt{5}}{2}\\)である。'}</MathJax>
                    </p>

                    <h2>ブロック</h2>

                    <blockquote>
                        いろはにほへとちりぬるを
                        <br />
                        The quick brown fox jumps over the lazy dog
                    </blockquote>

                    <div className='code'>
                        <div className='codeType'>C#</div>
                        <pre>
                            {`// Specific Function

Vector3 CalcAngle(Vector2 angle, float fixMove, float limitAngleX)
{
    Vector2 newAngle = new Vector2(angle.y, angle.x * -1f) * fixMove;

    newAngle.x = CorrectPositiveAngle(newAngle.x);
    newAngle.y = CorrectPositiveAngle(newAngle.y);

    if (newAngle.x > limitAngleX && newAngle.x < 360f - limitAngleX)
    {
        newAngle.x = newAngle.x <= 180f ? limitAngleX : 360f - limitAngleX;
    }

    return newAngle;
}

Vector3 CalcCenteredOnPoint(Vector3 point, Vector2 angle, float distance)
{
    Vector2 radX = new Vector2
    (
        Mathf.Sin(UniversalFunction.ConvDegToRad(angle.x)),
        Mathf.Cos(UniversalFunction.ConvDegToRad(angle.x))
    );

    Vector2 radY = new Vector2
    (
        Mathf.Sin(UniversalFunction.ConvDegToRad(angle.y)),
        Mathf.Cos(UniversalFunction.ConvDegToRad(angle.y))
    );

    return new Vector3
    (
        point.x - distance * radY.x + distance * (1f - radX.y) * radY.x,
        point.y + distance * radX.x,
        point.z - distance * radY.y + distance * (1f - radX.y) * radY.y
    );
}

// Common Function

float FloorBasedOnZero(float val, float multiply)
{
    return Mathf.Floor(val / multiply) * multiply + (val >= 0f ? 0f : multiply);
}

float ConvDegToRad(float val)
{
    return (val / 360f) * Mathf.PI * 2f;
}

float CorrectPositiveAngle(float val)
{
    float res = val - FloorBasedOnZero(val, 360f);

    return res >= 0f ? res : 360f + res;
}`}
                        </pre>
                    </div>

                    <div className='warning'>
                        いろはにほへとちりぬるを
                        <br />
                        The quick brown fox jumps over the lazy dog
                    </div>

                    <div className='example'>
                        いろはにほへとちりぬるを
                        <br />
                        The quick brown fox jumps over the lazy dog
                    </div>

                    <div className='point'>
                        いろはにほへとちりぬるを
                        <br />
                        The quick brown fox jumps over the lazy dog
                    </div>

                    <div className='math'>
                        <MathJax>
                            {`
                                \\begin{eqnarray}
                                    (21.75)_{10}
                                    &=& 16 + 4 + 1 + 0.5 + 0.25 \\\\
                                    &=& 2^{4} + 2^{2} + 2^{1} + 2^{-1} + 2^{-2} \\\\
                                    &=& (10101.11)_{2}
                                \\end{eqnarray}
                            `}
                        </MathJax>
                    </div>

                    <h2>テーブル・リスト</h2>

                    <h3>表</h3>

                    <table>
                        <thead>
                            <tr>
                                <th>命題 P</th>
                                <th>命題 Q</th>
                                <th>論理和</th>
                                <th>論理積</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>真</td>
                            </tr>
                            <tr>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>偽</td>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>偽</td>
                            </tr>
                            <tr>
                                <td className='textCenter'>偽</td>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>真</td>
                                <td className='textCenter'>偽</td>
                            </tr>
                            <tr>
                                <td className='textCenter'>偽</td>
                                <td className='textCenter'>偽</td>
                                <td className='textCenter'>偽</td>
                                <td className='textCenter'>偽</td>
                            </tr>
                        </tbody>
                    </table>

                    <q>
                        <a href='https://ja.wikipedia.org/wiki/%E7%9C%9F%E7%90%86%E5%80%A4%E8%A1%A8' target='_blank' rel='noreferrer'>
                            Wikipedia - 真理値表
                        </a>
                    </q>

                    <h3>箇条書き</h3>

                    <ul>
                        <li>
                            <b>対偶法</b>
                        </li>
                        <ul>
                            <li>命題 P⇒Q を証明する代わりに、これと同値な ￢Q⇒￢P を証明する方法。</li>
                        </ul>
                        <li>
                            <b>背理法 (帰謬法)</b>
                        </li>
                        <ul>
                            <li>命題 P を証明する代わりに、￢P が偽であることを証明する方法。</li>
                            <li>￢P が偽であることを証明するには、￢P を仮定して矛盾を導けばよい。</li>
                        </ul>
                        <li>
                            <b>反例</b>
                        </li>
                        <ul>
                            <li>命題「全ての x が P(x) を満たす」が偽であることを示すには、P(x) を満たさない x を一つ挙げればよい。</li>
                            <li>￢∀xPx と ∃x￢Px が同値であることを利用する。</li>
                        </ul>
                        <li>
                            <b>転換法</b>
                        </li>
                        <ul>
                            <li>
                                全ての状況が P, Q, R のいずれかに分類でき、A, B, C
                                が独立であり、「P⇒A」「Q⇒B」「R⇒C」が証明できる場合、それらの逆「A⇒P」「B⇒Q」「C⇒R」も成立する。
                            </li>
                        </ul>
                        <li>
                            <b>同一法</b>
                        </li>
                        <ul>
                            <li>A⇒B が成り立ち、B を満たすものがただひとつであれば、B⇒A が成り立つ。</li>
                        </ul>
                        <li>
                            <b>鳩の巣原理</b>
                        </li>
                        <ul>
                            <li>n+1個以上のボールのそれぞれがn個の箱のいずれかに入る場合、少なくとも1個の箱には2個以上のボールが入っている。</li>
                        </ul>
                        <li>
                            <b>数学的帰納法</b>
                        </li>
                        <ul>
                            <li>自然数に関する命題 P(n) が全ての n に対して成立することを示す論法。</li>
                        </ul>
                        <ol>
                            <li>P(1) が成立することを示す。</li>
                            <li>P(n) が成立すれば P(n+1) が成立することを示す。</li>
                        </ol>
                    </ul>

                    <q>
                        <a href='https://ja.wikipedia.org/wiki/%E8%A8%BC%E6%98%8E_(%E6%95%B0%E5%AD%A6)' target='_blank' rel='noreferrer'>
                            Wikipedia - 証明 (数学)
                        </a>
                    </q>

                    <h3>カード</h3>

                    <InformationCard mainTitle='独立定義 虚構関数' subTitle='indDef voidFunction' icon='/icon.png'>
                        面白くなければ、苦しい行いなどやっていけませんね。
                    </InformationCard>

                    <h2>メディア</h2>

                    <h3>画像 (1枚)</h3>

                    <PictureGallery data={Data[0]} />

                    <h3>画像 (複数枚)</h3>

                    <PictureGallery data={Data[1]} />

                    <h3>画像 (スライド)</h3>

                    <PictureGallery data={Data[1]} isSlide />

                    <h3>動画 (YouTube 埋め込み)</h3>

                    <VideoFrameYouTube url='VICWRxanLKM' ratio={56.25} />

                    <h3>動画 (YouTube サムネイル)</h3>

                    <VideoLinkYouTube url='g39GEXdUHz0' ratio={56.25} />

                    <h3>リンク (サムネイル付き)</h3>

                    <ImageLink
                        href='https://getunityinputcode.indfunction.work/'
                        src='https://raw.githubusercontent.com/indFunction/GetUnityInputCode/main/media/hero.png'
                        ratio={56.25}
                    />
                </DocumentStyle>
            </Body>
        </Fragment>
    );
};

const Data = [
    ['https://images8.alphacoders.com/866/866391.jpg'],
    [
        'https://images8.alphacoders.com/866/866391.jpg',
        'https://images8.alphacoders.com/866/866402.jpg',
        'https://images8.alphacoders.com/866/866407.png',
        'https://images3.alphacoders.com/866/866409.jpg',
        'https://images6.alphacoders.com/866/866417.jpg',
        'https://images2.alphacoders.com/866/866449.jpg',
        'https://images3.alphacoders.com/866/866450.jpg',
        'https://images.alphacoders.com/866/866451.jpg'
    ]
];

export default Index;
