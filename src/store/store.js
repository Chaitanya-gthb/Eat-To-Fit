import {configureStore} from "@reduxjs/toolkit"
import LogReducer from './StoreSlice';

const store = configureStore({
    reducer : {
        log: LogReducer
    }
})

export default store;
