import { Route, Redirect } from "react-router-dom";
import React from "react";
import ParkArea from './parkarea'
import Itinerary from './itinerary'

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
        {/* <Route
          exact
          path="/itineraries"
          render={props => {
            return <Itinerary {...props} />;
          }}
        /> */}
      </React.Fragment>
    );
  };
  
  export default ApplicationViews;