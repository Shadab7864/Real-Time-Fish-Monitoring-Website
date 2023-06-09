import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


// API calling when page is loaded
// getData () to get last 50 entries
export const getData = createAsyncThunk('getData', /*used for api calling*/async () => {
    const data = await fetch("https://api.thingspeak.com/channels/1993818/feeds.json?results=50");
    return data.json();
});
// newData() to get the last entry
export const newData = createAsyncThunk('newData', async () => {
    const newData = await fetch("https://api.thingspeak.com/channels/1993818/feeds.json?results=1");
    return newData.json();
})
// Creating Slice
export const Slice = createSlice({

    name: "view",  // Name of my slice
    
    // Initial State Stores all the variables and data type
    initialState: {
        isLoading: false,
        graphData: null,
        recentData:null,
        isError: false
    },


    // Extra reducer used to show different state of Api (completed,failed, waiting)
    extraReducers: (builder) => {
        // addCase() used to add the different case

        // if API calling for getData() is successfull
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.graphData = action.payload;
        });
        // if API calling for newData() is successfull
        builder.addCase(newData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.recentData= action.payload;
        });
        // if API calling for getData() is pending
        builder.addCase(getData.pending, (state, action) => {
            state.isLoading = true;
        });
        // if API calling for newData() is pending
        builder.addCase(newData.pending, (state, action) => {
            state.isLoading = true;
        });
        // if API calling for getData() gets some error
        builder.addCase(getData.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        });
        // if API calling for newData() gets some error
        builder.addCase(newData.rejected, (state, action) => {
            console.log('Error', action.payload);
            state.isError = true;
        });

    },

    // All the action will be written within the reducers
    reducers: {


    }


})
/* Export each and every action created
All export reducer must be called in store.js file
*/
export default Slice.reducer;