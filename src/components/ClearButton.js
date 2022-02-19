import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faSpinner } from "@fortawesome/free-solid-svg-icons";

export function ClearButton(props) {
  return (
    <button onClick={props.onClick} type="button" className="btn" id="clearBtn">
      {props.loading ? (
        <FontAwesomeIcon icon={faSpinner} />
      ) : (
        <FontAwesomeIcon icon={faBan} />
      )}
    </button>
  );
}

export default ClearButton;
