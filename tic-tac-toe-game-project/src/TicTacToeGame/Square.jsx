import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      style={{
        border: "1px solid black",
        height: "100px",
        width: "80%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="square"
    >
      <h5 style={{ fontSize: "2.5rem" }}>{props.value}</h5>
    </div>
  );
};

export default Square;
