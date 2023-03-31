import React from 'react'
import { Box, Grid } from '@mui/material';
import "../CSS/Home.css";

function Temperature() {
  return (
    <Grid>
      <div className="card w-10rem mt-5" >
        <div className="card-body">
          <h5 className="card-title">Temperature</h5>
          <h6 className="card-subtitle mb-2" >(in Celcius)</h6>
          <p className="card-text">My Graph will go  here</p>
          <Grid className="button">
            <a href="/" className="btn btn-outline-primary btn-sm ">Minimize Details</a>
            </Grid>
        </div>
      </div>
    </Grid>
  )
}

export default Temperature
