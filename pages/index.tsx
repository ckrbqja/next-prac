import type {NextPage} from 'next'
import EventList from "../components/events/event-list";
import {getAllEvents, getFeaturedEvents} from "../helper/api-utils";

const Home: NextPage = (props: any) => {
    // const featuredEvents = getFeaturedEvents() as any as EventItemType[];


    return <div>
        <EventList items={props.events}/>
    </div>
}


export async function getStaticProps() {
    const featuredEvents = await getFeaturedEvents();
    return {
        props: {events: {featuredEvents}},
        revalidate: 1800,
    }
}

export default Home
