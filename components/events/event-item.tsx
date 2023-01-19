import Link from "next/link";

export type EventItemType = {
    title: string;
    image: string;
    date: string;
    location: string;
    id: string;
}


export default function EventItem(props: { itemType:EventItemType }) {

    const { title, image, date, location, id } = props.itemType;

    const humanReadableDate = new Date(date).toLocaleDateString('eu-US',{
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    const formattedAddress = location.replace(', ', '\n');
    const explorerLink = `events/${id}`
    
    return <li>
        <img src={`/${image}`} alt=""/>
        <div>
            <div>
                <h2>{title}</h2>
                <div>
                    <time>{humanReadableDate}</time>
                </div>
                <div>
                    <time>{formattedAddress}</time>
                </div>
            </div>
            <div>
                <Link href={explorerLink}>Explorer Event</Link>
            </div>
        </div>
    </li>
};
