import { parseISO, format } from 'date-fns';

export default function DatePost({ dateString }) {
    const date = parseISO(dateString);
    return (
        <>
            {format(date, 'LLL, d, yyy')}
        </>
    );
}