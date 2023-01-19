import {NextPage} from "next";
import {useRouter} from "next/router";
import {getFilteredEvents} from "../../dummy-data";
import EventList from "../../components/events/event-list";
import {EventItemType} from "../../components/events/event-item";
import {Fragment} from "react";
import Button from "../ui/button";
import ErrorAlert from "../ui/error-alert";
import ResultsTitle from "../../components/events/results-title"

const FilterEventsPage: NextPage = () => {
    const router = useRouter();

    const {slug: filterData} = router.query

    if (!filterData)
        return <p className='center'>Loading...</p>

    const [year, month] = filterData as string[];

    if (
        isNaN(+year) ||
        isNaN(+month) ||
        +year > 2030 ||
        +year < 2021 ||
        +month < 1 ||
        +month > 12) {
        return <Fragment>
            <ErrorAlert>
                <p>Invalid filter. Please adjust your values!</p>
            </ErrorAlert>
            <div className='center'>
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
    }

    const filterEvent = getFilteredEvents({year: +year, month: +month}) as any as EventItemType[];

    const date = new Date(+year - +month - 1);

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

export default FilterEventsPage;