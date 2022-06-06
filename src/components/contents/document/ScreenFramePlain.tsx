import { FC } from 'react';

export const ScreenFrame: FC<{ src: string }> = ({ src }) => {
    return (
        <div className='screenFrame'>
            <iframe src={src}></iframe>
        </div>
    );
};
