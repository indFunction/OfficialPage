import { FC } from 'react';

export const Arrow: FC<{ direction: string }> = ({ direction }) => {
    return <span className={`${direction}Arrow`}></span>;
};
