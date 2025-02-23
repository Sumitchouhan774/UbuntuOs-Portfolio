import React from "react";

function Loader() {
  return (
    <div className="loading-screen">
      <div className="spinner"></div>
      <div className="logo">
      <img className="loader" src="/Images/Logos/ubuntu-seeklogo.png" alt="Logo"/>
      <h1 className="ubuntu-text">ubuntu</h1>
      </div>
    </div>
  );
};

export default Loader;
