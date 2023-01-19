import classes from "./event-item.module.css";
import Button from "../../pages/ui/button";
import DateIcon from "../icons/date-icon"
import AddressIcon from "../icons/address-icon"
import ArrowRightIcon from "../icons/arrow-right-icon"
import {Address} from "cluster";
export type EventItemType = {
    title: string;
    image: string;
    date: string;
    location: string;
    id: string;
}


export default function EventItem(props: { itemType:EventItemType }) {

    const { title, image, date, location, id } = props.itemType;

    const formattedAddress = location.replace(', ', '\n');
    const explorerLink = `/events/${id}`

    return <li className={classes.item}>
        <img src={`/${image}`} alt=""/>
        <div className={classes.content}>
            <div>
                <h2 className={classes.icon}>{title}</h2>
                <div className={classes.date}>
                    <DateIcon/>
                    <time>{date}</time>
                </div>
                <div className={classes.address}>
                    <AddressIcon/>
                    <address>{formattedAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Button link={explorerLink}>
                    <span>Explorer Event</span>
                    <span className={classes.icon}>
                        <ArrowRightIcon/>
                    </span>
                </Button>
            </div>
        </div>
    </li>
};
