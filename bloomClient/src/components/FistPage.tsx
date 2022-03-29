import React from "react";
import { L1, L_SUB, NEW_COL } from "../constants";

export function FirstPage() {
  return (
    <div className="container">
      <div className="col-md-1 label-container">
        {/* <a href="" className="brand">
          BLOOM
        </a> */}
        <div className="rotated-label">{NEW_COL}</div>
        <img src="./Layer1.png" alt="img" />
      </div>
      <img className="thumbnail" src="./Layer1B2.jpeg" alt="img2" />

      <div className="highlight col-md-2 offset-md-3">
        <div className="row pt-5 pb-4 align-items-center justify-content-between">
          <div className="col-md-2 l-left">{L1}</div>
          <div className="col-md-2 l-left me-5">
            <span className="material-icons-outlined plus">add</span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 l-sub">{L_SUB}</div>
        </div>
      </div>
    </div>
  );
}
