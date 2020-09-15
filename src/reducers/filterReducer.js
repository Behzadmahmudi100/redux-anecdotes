const filterReducer = (state = '', action) => {
    //console.log(action);
    switch (action.type) {
        case 'FILTER':
            return action.content
        default:
            return state;
    }
}

export let setFilter = content => {
    return {
        type: 'FILTER',
        content
    }
}

export default filterReducer;