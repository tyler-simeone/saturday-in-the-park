import { Route } from "react-router-dom";
import React from "react";
import ParkArea from './parkarea/parkarea'
import ParkAreaDetail from './parkarea/parkdetail'
import Itinerary from './itinerary/itinerary'

const ApplicationViews = props => {
  
    return (
      <React.Fragment>
        {/* Home/Park Areas */}
        <Route
          exact
          path="/"
          render={props => {
            return <ParkArea {...props} />;
          }}
        />
        <Route
          exact
          path="/park/:parkId(\d+)"
          render={props => {
            return (
                <ParkAreaDetail 
                parkAreaId={parseInt(props.match.params.parkId)}
                {...props} 
                />
            );
          }}
        />

        {/* Authentication */}
        {/* <Route
          path="/login"
          render={props => {
            return <Login setUser={setUser} {...props} />;
          }}
        />
  
        <Route
          exact
          path="/Register"
          render={props => {
            return <Register />;
          }}
        /> */}
  
        {/* Itinerary */}
        <Route
          exact
          path="/myitinerary"
          render={props => {
            return <Itinerary {...props} />;
          }}
        />
      </React.Fragment>
    );
  };
  
  export default ApplicationViews;