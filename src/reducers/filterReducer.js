const filterReducer = (state = '', action) => {
    console.log(action)
    switch (action.data) {
        case 'FILTER':
            return action.data.content
        default:
            return state;
    }
}

export let setFilter = content => {
    return {
        type: 'FILTER',
        data: { content }
    }
}

export default filterReducer;