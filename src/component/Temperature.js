import React, { useEffect } from 'react'
import { Grid } from '@mui/material';
import { getData } from './Slice';
import "../CSS/Home.css";
import { useDispatch, useSelector } from 'react-redux';

function Temperature() {
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
          <h5 className="card-title">Temperature</h5>
          <h6 className="card-subtitle mb-2" >(in Celcius)</h6>
          {/* Displaying data using map() */}
          {
            data.view.data && data.view.data.feeds.map((e, i) => (

              <Grid key={i}>
                {e.field1} Celcius
              </Grid>
            ))
          }
          <Grid className="button">
            {/* Routing to the home page  */}
            <a href="/" className="btn btn-outline-dark btn-sm ">Minimize Details</a>
          </Grid>
        </div>
      </div>
    </Grid>
  )
}

export default Temperature
