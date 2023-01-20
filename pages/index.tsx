import type {NextPage} from 'next'
import EventList from "../components/events/event-list";
import {getAllEvents, getFeaturedEvents} from "../helper/api-utils";
import Head from "next/head";

const Home: NextPage = (props: any) => {
    // const featuredEvents = getFeaturedEvents() as any as EventItemType[];


    return <div>
        <Head>
            <title>NextJs Events</title>
            <meta name="description" content="Find a log of great events that allow you to evolve..."/>
        </Head>
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
