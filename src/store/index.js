import { configureStore } from "@reduxjs/toolkit";
import { createEpicMiddleware } from "redux-observable";
import { newsReducer } from "./slicesList";
import saga from "../sagas/index";

const sagaMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer: newsReducer,
  middleware: [sagaMiddleware]
});

sagaMiddleware.run(saga);

export default store;