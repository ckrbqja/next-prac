import {NextPage} from "next";
import EventList from "../../components/events/event-list";
import {EventItemType} from "../../components/events/event-item";
import EventSearch from "../../components/events/events-search";
import {useRouter} from "next/router";
import {getAllEvents} from "../../helper/api-utils";

const AllEventsPage: NextPage = (props: any) => {

    const router = useRouter();

    const searchHandler = (year: string, month: string) => {
        const fullPath = `/events/${year}/${month}`;
        router.push(fullPath)
    }
    return <div>
        <EventSearch onSearch={searchHandler}/>
        <EventList items={props.events}/>
    </div>
}

export async function getStaticProps() {
    const featuredEvents = await getAllEvents();

    return {props: {events: {featuredEvents}}, revalidate: true}
}

export default AllEventsPage;