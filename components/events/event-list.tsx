import EventItem, {EventItemType} from "./event-item";

export type EventListParams = { items: [EventItemType]; };
export default function EventList(props: EventListParams) {
    const { items } = props;

    return <ul>
        { items.map( (eventItem:EventItemType) =>
            <EventItem key={eventItem.id} itemType={eventItem}/>)}
    </ul>
};
