import typePageMeta from 'types/PageMeta';
import { fixDate } from 'utils/FixDate';

export const generateSummaryCard = (meta: typePageMeta, id?: string): string => {
    const title = meta.title;
    const description = meta.description;
    const date = fixDate(meta.date).join('.');
    const tags = meta.keywords
        .map((keyword) => {
            return `#${keyword}`;
        })
        .join(' ');
    const url = `https://www.indfunction.work/posts/${id ? id : meta.path ? meta.path : 'error'}`;

    return description + '\n\n' + date + ' ' + title + '\n' + url + '\n\n' + tags;
};
