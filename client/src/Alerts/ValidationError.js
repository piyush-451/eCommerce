import React from "react";

function ValidationError(props) {
  return (
    <div className="alert alert-danger my-2" role="alert">
      {props.children}
    </div>
  );
}

export default ValidationError;
