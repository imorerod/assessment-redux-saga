const setZooReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_ZOO':
            return action.payload;
        default:
            return state;
    }
}

export default setZooReducer;
