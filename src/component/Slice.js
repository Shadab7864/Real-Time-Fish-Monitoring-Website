import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";



// API calling when home page is loaded
export const getData = createAsyncThunk('getData', /*used for api calling*/async ()=>{
    const data = await fetch("https://api.thingspeak.com/channels/1993818/feeds.json?results=50");
    return data.json();
});
export const newData = createAsyncThunk('newData', async()=>{
const newData = await fetch("https://api.thingspeak.com/channels/1993818/feeds.json?results=1");
return newData.json();
})
export const Slice = createSlice({

    name:"view",  // Name of my slice
    // Initial State Stores all the variables
    initialState:{
        isLoading:false,
        data:null,
        isError:false
    },


    // Extra reducer used to show different state of Api (completed,failed, waiting)
    extraReducers:(builder)=>{
        // addCase() used to add the different case
        builder.addCase(getData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data=action.payload;
        });      builder.addCase(newData.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data=action.payload;
        });

        builder.addCase(getData.pending, (state,action) => {
            state.isLoading = true;
        });        builder.addCase(newData.pending, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(getData.rejected, (state,action)=>{
            console.log('Error',action.payload);
            state.isError = true;
        });        builder.addCase(newData.rejected, (state,action)=>{
            console.log('Error',action.payload);
            state.isError = true;
        });

    },
    
    // All the action will be written within the reducers
    reducers:{


    }


})
/* Export each and every action created
All export reducer must be called in store.js file
*/
export default Slice.reducer;