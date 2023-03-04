import React from "react";

export function Card(props) { 
    return (<div className="card my-4">
        <img className="card-img-top" src="https://www.waterfieldtechnologies.com/wp-content/uploads/2019/02/placeholder-image-gray-3x2.png" alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title text-center">Card title</h5>
        <p className="card-text text-center">{props.text}</p>
        </div>
        <div class="card-footer text-muted text-center">
        <a href="#" className="btn btn-primary">Find out more</a>
  </div>
  </div>);    
};

