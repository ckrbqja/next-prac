import {GetStaticPropsContext, NextPage} from "next";
import {useRouter} from "next/router";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"
import {getAllEvents, getEventById} from "../../helper/api-utils";

const EventDetailPage: NextPage = (props: any) => {
    const {event} = props;


    return !event ? <div className='center'>No event found!</div> : (
        <Fragment>
            <EventSummary title={event.title}/>
            <EventLogistics date={event.date} address={event.location}
                            image={event.image}
                            imageAll={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </Fragment>
    )
}

export async function getStaticProps(context: GetStaticPropsContext<{ eventId: string }>) {
    const eventId = context.params?.eventId;

    if (!eventId) return {notFound: true}

    const event = await getEventById(eventId);

    if (!event) return {notFound: true}
    return {
        props: {event},
        revalidate:30,
    }

}

export async function getStaticPaths() {
    const res = await getAllEvents();

    const paths = res.map(d => ({params: {eventId: d.id}}));

    return {
        paths,
        fallback: true
    }
}

export default EventDetailPage;