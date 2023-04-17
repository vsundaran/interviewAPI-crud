import React from "react";

export function Popup(props) {
  function toggle() {
    let toggleFnc = props.toggleFnc;
    toggleFnc(false);
  }
  return (
    <div className="popUpWrapper">
      <div className="whiteWrapper">
        <img src={props.img} />
        <h5>{props.name}</h5>
        <button className="btn btn-danger margin" onClick={toggle}>
          Close
        </button>
      </div>
    </div>
  );
}
