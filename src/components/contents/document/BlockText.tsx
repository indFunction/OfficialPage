import { FC } from 'react';

export const Code: FC<{ type?: string }> = ({ type, children }) => {
    return (
        <div className='code'>
            <div className='codeType'>{type ? type : 'CODE'}</div>
            <pre>{children}</pre>
        </div>
    );
};

export const Warning: FC = ({ children }) => {
    return <div className='warning'>{children}</div>;
};

export const Example: FC = ({ children }) => {
    return <div className='example'>{children}</div>;
};

export const Point: FC = ({ children }) => {
    return <div className='point'>{children}</div>;
};
