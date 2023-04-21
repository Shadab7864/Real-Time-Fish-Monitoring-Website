import {
    Box,
    Button,
    Grid,
} from '@mui/material';
import { useDispatch, useSelector } from "react-redux"
import { getData, newData } from './Slice';
import React, { useEffect } from 'react';
import AddIcon from '@mui/icons-material/Add';
import "../CSS/Home.css"


function Navbar() {

    // Using useEffect() to get data as the page is loaded

    // newData() is used to get the last data 
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(newData());
    }, [dispatch])

    // Storing the data from API in Data 
    const recentData = useSelector((state) => state);
    const graphData = useSelector((state) => state);

    // For fetching required data for Graph
    const fetchData = () => {
        dispatch(getData());
    }

    return (
        <Grid>

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <Grid className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasScrolling">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-brand ml-3 " >Fish Farm Monitoring</span>
                    </button>

                    <div className="offcanvas offcanvas-start  text-bg-dark" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <a href="/" className="nav-link"> <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Fish Farm Manager</h5> </a>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    {/* Link to home Page */}
                                    <a className="nav-link active" aria-current="page" href="/">Home</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Grid>
            </nav>

            {/* MY code for Page Started */}
            <Grid className='GRID' >

                {/* // using Box Attribute */}
                <Box display="flexbox" className="parent-container" p={2}  >
                    <h1>Hello, </h1>
                    <h3>Data of all sensor</h3>

                    <Grid container textAlign="center" gap={2.5} className="gridAlign" >

                        {/* For Temperature */}

                        <Grid item boxShadow={20} className="Field1-Container"  >
                            <h4 className="heading">Temperature</h4>

                            <Grid container gap={1} className="tempDash">

                                {/* To add more than 1 value */}
                                <Grid margin={2}>
                                    {/* Displaying data using map() */}
                                    {
                                        recentData.view.recentData && recentData.view.recentData.feeds.map((recentData, i) => (

                                            <Grid key={i}>
                                                {recentData.field1} Celcius
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid className='button'>
                                    {/* Routing to the another page to show all data */}
                                    <button onClick={fetchData} className='btn btn-info btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModalToggle " >Show graph</button >
                                </Grid>

                                {/* using Bootstrap modal to display different graph */}

                                <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel"> Temperature </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {
                                                    graphData.view.graphData && graphData.view.graphData.feeds.map((graphData, i) => (

                                                        <Grid key={i}>
                                                            {graphData.field1} Celcius
                                                        </Grid>
                                                    ))
                                                }
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FOR Adding more  */}

                                <Button className='addDash'> <AddIcon className='Add' sx={{ fontSize: '45px' }} /></Button>

                            </Grid>
                        </Grid>
                        {/* For  pH value */}

                        <Grid item className="Field2-Container" >
                            <h4 className="heading" >pH Value</h4>
                            <Grid container gap={1} className="tempDash">
                                {/* To add more than 1 value */}
                                <Grid margin={2}>
                                    {/* Displaying data using map() */}
                                    {
                                        recentData.view.recentData && recentData.view.recentData.feeds.map((e, i) => (

                                            <Grid key={i}>
                                                {e.field3}
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid className='button'>
                                    {/* Routing to the another page to show all data */}
                                    <button onClick={fetchData} className='btn btn-info btn-sm' data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"  >Show Graph</button>
                                </Grid>
                                {/* Displaying data using bootstrap modal  */}
                                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2"> pH Value ( between 1 to 14 ) </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {
                                                    graphData.view.graphData && graphData.view.graphData.feeds.map((graphData, index) => (

                                                        <Grid key={index}>
                                                            {graphData.field3} ( 1 - 14 )
                                                        </Grid>
                                                    ))
                                                }
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FOR Adding more component */}

                                <Button className='addDash'  > <AddIcon className='Add' sx={{ fontSize: '45px' }} /></Button>

                            </Grid>
                        </Grid>

                        {/* for Total Dissolved Solid */}

                        <Grid item boxShadow={10} className="Field3-Container" >
                            <h4 className="heading">Total Dissolved Solid</h4>
                            <Grid container gap={1} className="tempDash">

                                {/* To add more than 1 value */}
                                <Grid margin={2}>

                                    {/* Displaying data using map() */}
                                    {
                                        recentData.view.recentData && recentData.view.recentData.feeds.map((data, i) => (
                                            <Grid key={i}>
                                                {data.field2} PPM
                                            </Grid>
                                        ))
                                    }
                                </Grid>
                                <Grid className='button'>
                                    {/* Routing to the another page to show all data */}
                                    <button onClick={fetchData} className='btn btn-info btn-sm' data-bs-toggle="modal" data-bs-target="#exampleModalToggle3 " >Show Graph</button>
                                </Grid>
                                {/* Displaying data using bootstrap modal  */}
                                <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
                                    <div className="modal-dialog modal-dialog-centered">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel3"> TDS Value </h1>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                {
                                                    graphData.view.graphData && graphData.view.graphData.feeds.map((graphData, index) => (

                                                        <Grid key={index}>
                                                            {graphData.field2} PPM
                                                        </Grid>
                                                    ))
                                                }
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* FOR Adding more sensor */}

                                <Button className='addDash' > <AddIcon className='Add' sx={{ fontSize: '45px' }} /></Button>

                            </Grid>
                        </Grid>

                    </Grid>
                </Box>



            </Grid>


        </Grid>
    )
}

export default Navbar
