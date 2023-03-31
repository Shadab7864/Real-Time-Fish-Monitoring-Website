import React from 'react'
import { Box, Grid } from '@mui/material';


function TDS() {
  return (
    <Grid>
      <div className="card text-bg-light w-10rem mt-5" >
        <div className="card-body">
          <h5 className="card-title">Total Dissolved Solid (TDS Value)</h5>
          <h6 className="card-subtitle mb-2" >(in PPM)</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Grid className="button">
            <a href="/" className="btn btn-outline-dark btn-sm">Minimize Details</a>
            </Grid>
        </div>
      </div>
    </Grid>
  )
}

export default TDS
