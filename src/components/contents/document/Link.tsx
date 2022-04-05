import NextLink from 'next/link';
import { FC } from 'react';

export const Link: FC<{ href: string }> = ({ href, children }) => {
    if (href.startsWith('https://') || href.startsWith('http://')) {
        return (
            <a href={href} target='_blank' rel='noreferrer'>
                {children}
            </a>
        );
    } else {
        return (
            <NextLink href={href} passHref>
                <a>{children}</a>
            </NextLink>
        );
    }
};
