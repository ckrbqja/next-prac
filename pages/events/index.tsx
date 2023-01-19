import {NextPage} from "next";
import EventList from "../../components/events/event-list";
import {getAllEvents} from "../../dummy-data";
import {EventItemType} from "../../components/events/event-item";
import EventSearch from "../../components/events/events-search";

const AllEventsPage: NextPage = () => {

    const events = getAllEvents() as any as [EventItemType];

    return <div>
        <EventSearch/>
        <EventList items={events}/>
    </div>
}

export default AllEventsPage;