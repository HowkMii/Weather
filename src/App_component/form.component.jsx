import React from "react";
import "./form.style.css";

const Form = props => {
  return (
    <div className="container h-100">
      <form onSubmit={props.loadweather}>
        <div>{props.error ? error() : ""}</div>
        <div className="row">
          <div className="col-md-4 offset-md-2 text-center">
            <input
              type="text"
              className="form-control"
              placeholder="City"
              name="city"
              autoComplete="off"
            /> 
            <br/>
          </div>
          
          <div className="col-md-4 text-md-center ">
            <input
              type="text"
              className="form-control"
              placeholder="Country"
              name="country"
              autoComplete="off"
            />
          </div>
         
          <div className="col-md-12 mt-md-0 mt-2 text-md-center ">
            <br/>
            
            <button className="btn btn-light">Weather</button>
          </div>
        </div>
      </form>
    </div>
  );
};

const error = props => {
  return (
    <div className="alert alert-danger mx-5" role="alert">
      Please Enter City and Country...!
    </div>
  );
};

export default Form;
