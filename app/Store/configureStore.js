import Reducer from '../Reducer/create';
import { combineReducers, createStore } from 'redux'
const rootReducer = combineReducers(
    {
        count: Reducer
    }
)

const configureStore = () => {
    return createStore(rootReducer);
}

export default configureStore;