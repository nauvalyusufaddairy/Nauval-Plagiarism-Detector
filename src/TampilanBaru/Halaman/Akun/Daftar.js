import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { auth, rtdb } from "../../../Utils/firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../Utils/StateProvider";

function Daftar() {
  const history = useHistory();
  const [{ user_id }, dispatch] = useStateValue();
  const initialState = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    nim: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const daftar = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(data.email, data.password)
      .catch((err) => {
        if (err) {
          alert(err);
        }
      })
      .then((i) =>
        rtdb
          .ref("/user")
          .child(`/${i.user.uid}`)
          .set(data, (err) => {
            if (!err) {
              history.push("/");
            }
          })
      );
    // .then((res) => {
    //   rtdb
    //     .ref("/akun")
    //     .child(res)
    //     .set(data, (err) => {
    //       if (err) {
    //         alert(err);
    //       }
    //     });
    // })
    // .then(() => history.push("/beranda"));
  };

  return (
    <>
      <div className="col-md-12 d-flex col-sm-12 col-xs-12 flex-column justify-content-center align-items-center  mt-7">
        <div className="col-md-8 d-flex flex-column rounded p-3 _shadow">
          <div class="input-group input-group-sm">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                email
              </span>
            </div>
            <input
              onChange={handleChange}
              type="text"
              name="email"
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <span className="ml-2" style={{ color: "red" }}>
              *
            </span>
          </div>
          <div class="input-group input-group-sm mt-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                password
              </span>
            </div>
            <input
              type="password"
              class="form-control"
              name="password"
              onChange={handleChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
            <span className="ml-2" style={{ color: "red" }}>
              *
            </span>
          </div>
          <div class="input-group input-group-sm mt-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                name
              </span>
            </div>
            <input
              name="nama"
              type="text"
              onChange={handleChange}
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group input-group-sm mt-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                Address
              </span>
            </div>
            <input
              type="text"
              name="alamat"
              onChange={handleChange}
              class="form-control"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <div class="input-group input-group-sm mt-2">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-sm">
                ID Number
              </span>
            </div>
            <input
              name="nim"
              type="text"
              class="form-control"
              onChange={handleChange}
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </div>
          <span className="ml-2 mt-2" style={{ color: "red" }}>
            * mandatory
          </span>
          <div className="d-flex flex-row justify-content-center">
            <button type="button" class="btn btn-primary" onClick={daftar}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Daftar;
