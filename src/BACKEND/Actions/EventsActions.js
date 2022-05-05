import * as events_services from "../Services/EventsServices";

export const CREATE_EVENT = "CREATE_EVENT";
export const DELETE_EVENT = "DELETE_EVENT";
export const UPDATE_EVENT = "UPDATE_EVENT";
export const GET_EVENTS = "GET_EVENTS";
export const GET_EVENT_BY_ID = "GET_EVENT_BY_ID";

export const getEvents = async (dispatch) => {
    const events = await events_services.getEvents();
    dispatch({
        type: GET_EVENTS,
        all_events: events
    });

    return events;

};

export const getEventById = async (dispatch, event_id) => {
    const event = await events_services.getEventsById(event_id);
    dispatch({
        type: GET_EVENT_BY_ID,
        event: event
    });
};


export const createEvent = async (dispatch, new_event) => {
    const event = await events_services.createEvent(new_event);
    dispatch({
        type: CREATE_EVENT,
        event
    });
};

export const updateEvent = async (dispatch, event) => {
    const status = await events_services.updateEvent(event);
    dispatch({
        type: UPDATE_EVENT,
        event
    });
};

export const deleteEvent = async (dispatch, event_id) => {
    const res = await events_services.deleteEvent(event_id);
    dispatch({
        type: DELETE_EVENT,
        event_id
    });
};
