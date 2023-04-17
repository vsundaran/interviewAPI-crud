import React from "react";
import "./App.css";
import axios from "axios";
import { Popup } from "./popUp";

export const ApiIntegration = function () {
  let [imgSrc, setImgSrc] = React.useState("");
  let [toggle, setToggle] = React.useState(false);
  let [popupName, setPopUp] = React.useState("");

  let deleteRef = React.useRef();
  let singleRef = React.useRef();

  let idRef = React.useRef();
  let firstNameref = React.useRef();
  let lastNameRef = React.useRef();
  let maidenNameRef = React.useRef();

  let idRefPut = React.useRef();
  let firstNamerefPut = React.useRef();
  let lastNameRefPut = React.useRef();
  let maidenNameRefPut = React.useRef();

  let [data, setData] = React.useState([]);
  React.useEffect(() => {
    async function hitApi() {
      let response = await fetch("https://dummyjson.com/users");
      let json = await response.json();
      console.log(json.users);
      setData(json.users);
    }
    hitApi();
  }, []);

  function postData() {
    let id = idRef.current.value;
    let firstName = firstNameref.current.value;
    let lastName = lastNameRef.current.value;
    let maidenName = maidenNameRef.current.value;

    async function post() {
      await axios
        .post("https://dummyjson.com/users/add", {
          id,
          firstName,
          lastName,
          maidenName,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert("post method is succesfully done, you can see in console");
    }
    post();
  }

  function putData() {
    let idPut = idRefPut.current.value;
    let firstNamePut = firstNamerefPut.current.value;
    let lastNamePut = lastNameRefPut.current.value;
    let maidenNamePut = maidenNameRefPut.current.value;

    async function put() {
      await axios
        .put("https://dummyjson.com/users/1", {
          idPut,
          firstNamePut,
          lastNamePut,
          maidenNamePut,
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert("put method is succesfully done, you can see in console");
    }
    put();
  }
  function deleteData() {
    let deleteId = deleteRef.current.value;

    async function del() {
      await axios
        .put(`https://dummyjson.com/users/${deleteId}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      alert(`deleted ${deleteId} data succesfully, you can see in console`);
    }
    del();
  }

  function singleUserData() {
    let singleID = singleRef.current.value;

    async function fetchSingleUserData() {
      let res = await fetch(`https://dummyjson.com/users/${singleID}`);
      let json = await res.json();

      console.log(json);
      setImgSrc(json.image);
      setPopUp(json.firstName);
    }
    fetchSingleUserData();
    setToggle(true);
  }

  return (
    <div>
      <center>
        <span className="ApiTitle">Api Integration</span>
      </center>
      <div className="d-flex">
        <div className="postDataContainer">
          <span className="title px-2">This is for post</span>
          <input
            ref={idRef}
            type="text"
            class="form-control margin"
            placeholder="Enter ID"
          />
          <input
            ref={firstNameref}
            type="text"
            class="form-control margin"
            placeholder="Enter First Name"
          />
          <input
            ref={lastNameRef}
            type="text"
            class="form-control margin"
            placeholder="Enter Last Name"
          />
          <input
            ref={maidenNameRef}
            type="text"
            class="form-control margin"
            placeholder="Enter Maiden Name"
          />
          <button
            type="button"
            class="btn btn-success margin"
            onClick={postData}
          >
            Post Data
          </button>
        </div>
        <div className="postDataContainer">
          <span className="title px-2">This is for put</span>
          <input
            ref={idRefPut}
            type="text"
            class="form-control margin"
            placeholder="Enter ID"
          />
          <input
            ref={firstNamerefPut}
            type="text"
            class="form-control margin"
            placeholder="Enter First Name"
          />
          <input
            ref={lastNameRefPut}
            type="text"
            class="form-control margin"
            placeholder="Enter Last Name"
          />
          <input
            ref={maidenNameRefPut}
            type="text"
            class="form-control margin"
            placeholder="Enter Maiden Name"
          />
          <button
            type="button"
            class="btn btn-success margin"
            onClick={putData}
          >
            Put Data
          </button>
        </div>
        <div className="postDataContainer">
          <span className="title px-2">This is for delete</span>
          <input
            ref={deleteRef}
            type="number"
            class="form-control margin"
            placeholder="Enter ID"
          />

          <button
            type="button"
            class="btn btn-danger margin"
            onClick={deleteData}
          >
            Delete Data
          </button>
        </div>
        <div className="postDataContainer">
          <span className="title px-2">This is for perticular user</span>
          <input
            ref={singleRef}
            type="number"
            class="form-control margin"
            placeholder="Enter ID"
          />

          <button
            type="button"
            class="btn btn-info margin"
            onClick={singleUserData}
          >
            Show user Data
          </button>
        </div>
      </div>
      <div className="cardWrapper">
        {data.map((item, index) => {
          return (
            <div class="card">
              <img class="card-img-top" src={item.image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{item.company.name}</h5>
                <h6 class="card-text">{item.address.address},</h6>
                <h6 class="card-text">{item.address.city},</h6>
                <h6 class="card-text">{item.address.postalCode}.</h6>
                <p class="card-text">
                  This is card text, in this place we can discribe the user.
                </p>
                <a class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          );
        })}
      </div>
      {toggle ? (
        <Popup img={imgSrc} toggleFnc={setToggle} name={popupName} />
      ) : (
        false
      )}
    </div>
  );
};
