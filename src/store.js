import { configureStore } from "@reduxjs/toolkit";
// Call ALl Reducers
import addReducer from "./component/Slice"


const store = configureStore({

    // reducer declaration
    reducer:{
        view:addReducer, // same as slice name


    },


});
export default store;  // This store must be called in index.js file