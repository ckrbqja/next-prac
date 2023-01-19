import type {NextPage} from 'next'
import {getFeaturedEvents} from "../dummy-data";
import EventList from "../components/events/event-list";
import {EventItemType} from "../components/events/event-item";

const Home: NextPage = () => {
    const featuredEvents = getFeaturedEvents() as any as EventItemType[];


    return <div>
        <EventList items={featuredEvents}/>
    </div>
}


export default Home
