import { parseISO, format } from 'date-fns';

export default function DateRecentPost({ dateString }) {
    const date = parseISO(dateString);
    return (
        <>
            <div>{format(date, 'LLL')}</div>
            <div>{format(date, 'd')}</div>
        </>
    );
}