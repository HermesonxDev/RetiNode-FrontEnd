import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";
import discussionReducer from "./slices/discussionSlice";

const rootReducers = combineReducers({
    discussionStore: discussionReducer
})

export default configureStore({
    reducer: rootReducers,
    middleware: getDefaultMiddleWare =>
        getDefaultMiddleWare({
            serializableCheck: false,
            logger
        }),
});
