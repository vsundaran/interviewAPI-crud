import "./App.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clear,
  addDatas,
  cityDataOnchange,
  lastNameDataOnchange,
  firstNameDataOnchange,
} from "./redux/data";

export const Card = function () {
  let { firstNameData, lastNameData, cityData } = useSelector(
    (state) => state.data
  );

  let dispatch = useDispatch();

  let cityRef = React.useRef();
  let lastNameRef = React.useRef();
  let firstNameRef = React.useRef();

  let obj = {};

  function addData() {
    obj.city = cityRef.current.value;
    obj.lastName = lastNameRef.current.value;
    obj.firstName = firstNameRef.current.value;

    dispatch(addDatas(obj));
    obj = {};
    dispatch(clear());
    lastNameRef.current.value = "";
  }

  function addCityRef() {
    dispatch(cityDataOnchange(cityRef.current.value));
  }

  function addLastNameRef() {
    dispatch(lastNameDataOnchange(lastNameRef.current.value));
  }

  function addfirstNameRef() {
    dispatch(firstNameDataOnchange(firstNameRef.current.value));
  }

  return (
    <div className="fromWrapper">
      <div className="row g-3">
        <div className="col-md-4">
          <label for="validationCustom01" className="form-label">
            First name
          </label>
          <input
            required
            type="text"
            ref={firstNameRef}
            value={firstNameData}
            id="validationCustom01"
            className="form-control"
            onChange={addfirstNameRef}
          />
        </div>
        <div className="col-md-4">
          <label for="validationCustom02" className="form-label">
            Last name
          </label>
          <input
            required
            type="text"
            ref={lastNameRef}
            value={lastNameData}
            id="validationCustom02"
            className="form-control"
            onChange={addLastNameRef}
          />
        </div>

        <div className="col-md-6">
          <label for="validationCustom03" className="form-label">
            City
          </label>
          <input
            required
            type="text"
            ref={cityRef}
            value={cityData}
            onChange={addCityRef}
            id="validationCustom03"
            className="form-control"
          />
        </div>
        <div className="col-12">
          <button onClick={addData} className="btn btn-primary">
            Add Data
          </button>
        </div>
      </div>
    </div>
  );
};
