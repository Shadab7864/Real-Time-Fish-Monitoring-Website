import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Grid } from '@mui/material';
import { getData } from './Slice';


function PH() {
  // getData() used to get data of last 50 entries 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch])
  // Stroing the data from getData() and stored in data 
  const data = useSelector((state) => state);

  return (
    <Grid>
      <div className="card w-10rem mt-5" >
        <div className="card-body">
          <h5 className="card-title">pH Value</h5>
          <h6 className="card-subtitle mb-2" >(between 0-14)</h6>
          {/* Displaying data using map() */}
          {
            data.view.data && data.view.data.feeds.map((e, i) => (

              <Grid key={i}>
                {e.field3}    scale between 1 - 14
              </Grid>
            ))
          }
          <Grid className="button">
            {/* Routing to the home page  */}
            <a href="/" className="btn btn-outline-dark btn-sm">Minimize Details</a>
          </Grid>
        </div>
      </div>
    </Grid>
  )
}

export default PH
