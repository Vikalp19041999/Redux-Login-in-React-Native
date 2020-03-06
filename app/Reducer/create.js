const initialState = { Name: "", Password: "" }

const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return (
                {
                    ...state,
                    Name: action.value.Name,
                    Password: action.value.Password
                }
            )
        case 'RESET':
            return initialState;
        default:
            return state;
    }
}

export default Reducer;