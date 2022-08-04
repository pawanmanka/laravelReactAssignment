import { configureStore } from '@reduxjs/toolkit'
import AuthReducers from './reducers/AuthReducers';
export default configureStore({
    reducer: {
        auth:AuthReducers
    },
})