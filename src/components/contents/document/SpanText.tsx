import { FC } from 'react';

type SpanTextProps = {
    type: string[];
};

function findElement(array: string[], string: string, mode: number): string | undefined {
    let findString: string | undefined;

    switch (mode) {
        case 1:
            findString = array.find((element) => element.startsWith(string));
            break;
        case 2:
            findString = array.find((element) => element.includes(string));
            break;
        case 3:
            findString = array.find((element) => element.endsWith(string));
            break;
        default:
            findString = undefined;
            break;
    }

    return findString;
}

export const ST: FC<SpanTextProps> = ({ type, children }) => {
    const tcIndex: string | undefined = findElement(type, 'tc', 3);
    const bcIndex: string | undefined = findElement(type, 'bc', 3);
    const fsIndex: string | undefined = findElement(type, 'fs', 1);
    const className: string = [tcIndex, bcIndex, fsIndex].join(' ');

    return <span className={className}>{children}</span>;
};
