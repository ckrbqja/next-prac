import {NextPage} from "next";
import EventList from "../../components/events/event-list";
import {getAllEvents} from "../../dummy-data";
import {EventItemType} from "../../components/events/event-item";
import EventSearch from "../../components/events/events-search";
import {useRouter} from "next/router";

const AllEventsPage: NextPage = () => {

    const events = getAllEvents() as any as EventItemType[];

    const router = useRouter();

    const searchHandler = (year:string, month:string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    return <div>
        <EventSearch onSearch={searchHandler}/>
        <EventList items={events}/>
    </div>
}

export default AllEventsPage;