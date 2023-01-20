import {GetServerSidePropsContext, NextPage} from "next";
import EventList from "../../components/events/event-list";
import {EventItemType} from "../../components/events/event-item";
import {Fragment, useEffect, useState} from "react";
import Button from "../ui/button";
import ErrorAlert from "../ui/error-alert";
import ResultsTitle from "../../components/events/results-title"
import {getFilteredEvents} from "../../helper/api-utils";
import {useRouter} from "next/router";
import useSWR from "swr";

type aa = { isFeatured: Boolean, year: number, month: number }
type aab = aa & { id: string };

const FilterEventsPage: NextPage = (props: any) => {
    const router = useRouter();

    const filterData = router.query.slug;

    const {data, error} = useSWR('https://react-getting-start-18e6c-default-rtdb.firebaseio.com/events');

    const [events, setEvents] = useState<aab[]>();

    useEffect(() => {
        const events = Object.entries(data).map(([id, data]) => ({
            id,
            ...data as aa
        }));

        setEvents(events);
    }, [data])


    const filterEvent = props.events;
    if (!filterEvent)
        return <p className='center'>Loading...</p>

    const date = new Date(+props.year - +props.month - 1)

    if (props.validate)
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>


    if (!filterEvent || filterEvent.length === 0)
        return <Fragment>
            <ErrorAlert>
                <p>No events found for chosen filter!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>

    return <div>
        <ResultsTitle date={date}/>
        <EventList items={filterEvent}/>
    </div>;
}

export async function getServerSideProps(context: GetServerSidePropsContext<{ slug: any }>) {
    const params = context.params;

    if (!params) return {notFound: true}

    const filterData = params.slug;

    const [year, month] = filterData;


    const validate = isNaN(+year) ||
        isNaN(+month) ||
        +year > 2030 ||
        +year < 2021 ||
        +month < 1 ||
        +month > 12;


    const featuredEvents = await getFilteredEvents({year: +year, month: +month}) as any as EventItemType[];


    return {
        props: {
            validate,
            events: {featuredEvents},
            year, month,
        }
    }


}

export default FilterEventsPage;