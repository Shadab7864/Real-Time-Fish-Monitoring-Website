import { Box, Grid } from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { newData } from './Slice';
import React, { useEffect } from 'react';
import "../CSS/Home.css";




function Home() {
    // Using useEffect() to get data as the page is loaded

    // newData() is used to get the last data 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(newData());
    }, [dispatch])

    // Storing the data from API in Data 
    const Data = useSelector((state) => state);

    return (
        // using Box Attribute
        <Box display="flexbox" className="parent-container" p={2}  >
            <h1>Hello, </h1>
            <h3>Data of all sensor</h3>

            <Grid container textAlign="center" gap={0.35} className="gridAlign" >
                <Grid item xs={12} md={5.95} boxShadow={20} className="Field1-Container"  >
                    <h4 className="heading">Temperature</h4>
                    {/* Displaying data using map() */}
                    {
                        Data.view.data && Data.view.data.feeds.map((e, i) => (

                            <Grid key={i}>
                                {e.field1} Celcius
                            </Grid>
                        ))
                    }
                    <Grid className='button'>
                        {/* Routing to the another page to show all data */}
                        <a href='/TemperatureGraph' className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={5.95} boxShadow={10} className="Field2-Container" >
                    <h4 className="heading" >pH Value</h4>
                    {/* Displaying data using map() */}
                    {
                        Data.view.data && Data.view.data.feeds.map((e, i) => (

                            <Grid key={i}>
                                {e.field3} from a scale of 1 to 14
                            </Grid>
                        ))
                    }
                    <Grid className='button' >
                        {/* Routing to the another page to show all data */}
                        <a href='/pHGraph' className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8} boxShadow={10} className="Field3-Container" >
                    <h4 className="heading">Total Dissolved Solid</h4>
                    {/* Displaying data using map() */}
                    {
                        Data.view.data && Data.view.data.feeds.map((e, i) => (

                            <Grid key={i}>
                                {e.field2} PPM
                            </Grid>
                        ))
                    }
                    <Grid className='button' >
                        {/* Routing to the another page to show all data */}
                        <a href='/TDSGraph' className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Home
