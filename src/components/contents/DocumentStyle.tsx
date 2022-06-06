import styled from 'styled-components';
import { Main } from 'components/contents/_BaseMain';
import { Block } from 'components/contents/document/Block';
import { Decoration } from 'components/contents/document/Decoration';
import { DefaultItem } from 'components/contents/document/DefaultItem';
import { Heading } from 'components/contents/document/Heading';
import { List } from 'components/contents/document/List';
import { Paragraph } from 'components/contents/document/Paragraph';
import { ScreenFrame } from 'components/contents/document/ScreenFrame';
import { Table } from 'components/contents/document/Table';
import { TextColor } from 'components/contents/document/TextColor';
import { TextDecoration } from 'components/contents/document/TextDecoration';

export const DocumentStyle = styled.div`
    ${Main}
    ${Heading}
    ${Paragraph}
    ${TextDecoration}
    ${TextColor}
    ${Decoration}
    ${Block}
    ${Table}
    ${List}
    ${ScreenFrame}

    .item {
        ${DefaultItem}
    }
`;
