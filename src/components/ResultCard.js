import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { monthDayYear } from "../utils";

export function ResultCard(props) {
  return (
    <div className="card">
      <div className="card-body">
        <div className="card-title">
          <img className="owner-avatar" src={props.avatar}  alt={"avatar"}/>
          <a className="repo-owner" href={props.repoURL} target="_blank">
            {props.name}
          </a>
        </div>
        <div className="star-count">
          <FontAwesomeIcon className="star-icon" icon={faStar} />
          {props.count}
        </div>
        <p className="card-text">{props.description}</p>
        <div className="created-at">
          Created on {monthDayYear(props.createdAt)}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
