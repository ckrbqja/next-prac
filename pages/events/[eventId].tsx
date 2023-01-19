import {NextPage} from "next";
import {useRouter} from "next/router";
import {getEventById} from "../../dummy-data";
import {Fragment} from "react";
import EventSummary from "../../components/event-detail/event-summary"
import EventLogistics from "../../components/event-detail/event-logistics"
import EventContent from "../../components/event-detail/event-content"

const EventDetailPage: NextPage = () => {
    const router = useRouter();

    const eventId = router.query.eventId;
    const event = getEventById(eventId);



    return !event ? <p>No event found!</p> : (
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

export default EventDetailPage;