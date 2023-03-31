import { Box, Grid } from '@mui/material';
import {useDispatch,useSelector} from "react-redux"
import { getData,newData } from './Slice';
import React from 'react';
import "../CSS/Home.css";




function Home() {
    const dispatch=useDispatch();
    const data = useSelector( (state )=>state);
    const Data = useSelector ((state)=>state);
    console.log(Data);
    // console.log(feeds)
    return (
        // using Box Attribute
        <Box display="flexbox" className="parent-container" p={2}  >
            {/* creating Nav Bar */}
            <h1>Hello, </h1>
            <h3>Data of all sensor</h3>
            <button className="btn btn-light btn-sm mb-2" onClick={(e)=>dispatch(newData())} >Show Data</button>


            <Grid container textAlign="center"  gap={0.35} className="gridAlign" >
                <Grid item xs={12} md={5.95} boxShadow={20} className="Field1-Container"  >
                        <h4 className="heading">Temperature</h4>

                        {
                            Data.view.data && Data.view.data.feeds.map((e,i)=>(

                                <Grid key={i}>
                                    {e.field1} Celcius
                                </Grid>
                            ))
                        }
                    <Grid className='button'>
                        <a href='/TemperatureGraph'  className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={5.95} boxShadow={10} className="Field2-Container" >
                    <h4 className="heading" >pH Value</h4>
                    {
                            Data.view.data && Data.view.data.feeds.map((e,i)=>(

                                <Grid key={i}>
                                    {e.field3} from a scale of 1 to 14
                                </Grid>
                            ))
                        }
                    <Grid className='button' >
                    <a href='/pHGraph'  className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

                <Grid item xs={12} md={8} boxShadow={10} className="Field3-Container" >
                    <h4 className="heading">Total Dissolved Solid</h4>
                    {
                            Data.view.data && Data.view.data.feeds.map((e,i)=>(

                                <Grid key={i}>
                                    {e.field2} PPM
                                </Grid>
                            ))
                        }
                    <Grid className='button' >
                    <a href='/TDSGraph'  className='btn btn-info btn-sm' >Show Graph</a>
                    </Grid>
                </Grid>

            </Grid>
        </Box>
    )
}

export default Home
