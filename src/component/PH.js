import React from 'react'
import { Box, Grid } from '@mui/material';


function pH() {
  return (
    <Grid>
      <div className="card w-10rem mt-5" >
        <div className="card-body">
          <h5 className="card-title">pH Value</h5>
          <h6 className="card-subtitle mb-2" >(between 0-14)</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <Grid className="button">
            <a href="/" className="btn btn-outline-primary btn-sm">Minimize Details</a>
            </Grid>
        </div>
      </div>
    </Grid>
  )
}

export default pH
