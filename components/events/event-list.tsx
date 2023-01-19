import EventItem, {EventItemType} from "./event-item";
import classes from "./event-list.module.css";
export type EventListParams = { items: EventItemType[]; };
export default function EventList(props: EventListParams) {
    const {items} = props;

    return <ul className={classes.list}>
        {items.map((eventItem: EventItemType) =>
            <EventItem key={eventItem.id} itemType={eventItem}/>)}
    </ul>
};
