import React from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, edit } from "./redux/data";

export const Table = function () {
  let { data } = useSelector((state) => state.data);
  let dispatch = useDispatch();

  function deleteItem(id) {
    alert("Item Deleted");
    dispatch(deleteData(id));
  }

  function editItem(id) {
    dispatch(edit(id));
  }

  return (
    <div className="tableWrapper">
      <table className="table table-bordered border-primary">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">City</th>
            <th scope="col">Function</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            if (item != null) {
              return (
                <tr key={index} id={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.city}</td>
                  <td>
                    <button
                      className="btn btn-primary btn-sm ftn-btn"
                      onClick={() => editItem(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm ftn-btn"
                      onClick={() => deleteItem(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
    </div>
  );
};
