const notificationReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return state = action.data;
        case 'CLEAR_NOTIFICATION':
            return state;
        default:
            return state;
    }
}



export const show_and_remove_notification = (message) => {
    return {
        type: 'SET_NOTIFICATION',
        data: message
    }

}


export default notificationReducer;