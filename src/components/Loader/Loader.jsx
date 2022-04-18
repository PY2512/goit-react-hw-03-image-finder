import React from 'react';
import MDSpinner from "react-md-spinner";

const Loader = () => {
  return (
    <div className="wrapper">
      <MDSpinner
        height="500"
        width="500"
        color="#3f51b5"
        ariaLabel="loading"
      />
    </div>
  );
};

export default Loader;