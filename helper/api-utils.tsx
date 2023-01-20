export async function getAllEvents() {
    const response = await fetch('https://react-getting-start-18e6c-default-rtdb.firebaseio.com/events.json');
    const data = await response.json();

    return Object.entries(data).map(([id, data]) => ({
        id,
        ...data as { isFeatured: Boolean, year: number, month: number }
    }))
}

export async function getFeaturedEvents() {
    const event = await getAllEvents();
    return event.filter(event => event.isFeatured);
}

export async function getEventById(id: string) {
    const event = await getAllEvents();
    return event.find(event => event.id === id);
}

export async function getFilteredEvents({year, month}: { year: number, month: number }) {

    const res = await getAllEvents();
    return res.filter((event: any) => {
        const eventDate = new Date(event.date);
        return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1;
    });


}