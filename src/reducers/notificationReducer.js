const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return state = action.data;
        case 'CLEAR_NOTIFICATION':
            return state = action.data;
        default:
            return state;
    }
}

let timeoutID;

export const show_notification = (message, time) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            data: message
        });

        setTimeout(() => {
            if (timeoutID) {
                clearTimeout(timeoutID);
            }

            timeoutID = setTimeout(() => {
                dispatch(hide_notification())
            }, time);
            
        }, time * 1000);
    }
}

export const hide_notification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
        data: null
    }
}

export default notificationReducer;