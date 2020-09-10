const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.data;
        case 'CLEAR_NOTIFICATION':
            return state;
        default:
            return state;
    }
}

export const show_notification = (message, time) => {
    return {
        type: 'SET_NOTIFICATION',
        data: message
    }
}

export default notificationReducer;