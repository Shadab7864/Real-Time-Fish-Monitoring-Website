import React, { useEffect } from 'react'
import { getData } from './Slice';
import { useDispatch, useSelector } from "react-redux"
import { Grid } from '@mui/material';


function TDS() {
  // getData() used to get data of last 50 entries 
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getData());
  }, [dispatch])
  // Stroing the data from getData() and stored in data 
  const data = useSelector((state) => state);

  return (
    <Grid>
      <div className="card text-bg-light w-10rem mt-5" >
        <div className="card-body">
          <h5 className="card-title">Total Dissolved Solid (TDS Value)</h5>
          <h6 className="card-subtitle mb-2" >(in PPM)</h6>
          {/* Displaying data using map() */}
          {
            data.view.data && data.view.data.feeds.map((e, i) => (

              <Grid key={i}>
                {e.field2} PPM
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

export default TDS
