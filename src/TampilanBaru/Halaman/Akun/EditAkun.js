import { React, useState, useEffect } from "react";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import { auth, rtdb } from "../../../Utils/firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../../Utils/StateProvider";

import "bootstrap/dist/css/bootstrap.min.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

function EditAkun() {
  const history = useHistory();
  const [{ user_id }, dispatch] = useStateValue();
  const initialState = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    nim: "",
    email_baru: "",
    password_baru: "",
    isUpdated: false,
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    rtdb
      .ref("/user")
      .child(`/${user_id}`)
      .on("value", (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      });
    console.log("data", data);
  }, []);

  const edith = (e) => {
    e.preventDefault();
    if (data.email || data.password || data.email_baru !== "") {
      auth
        .signInWithEmailAndPassword(data.email, data.password)
        .catch((err) => {
          if (err) {
            alert(err);
          }
        })
        .then((i) =>
          i.user.updateEmail(data.email_baru).then(() => {
            setData({ ...data, isUpdated: true });
          })
        );
    } else {
      alert(
        "jika ingin update email form email lama dan password lama serta email baru tidak boleh kosong "
      );
    }

    if (data.email || data.password || data.password_baru !== "") {
      auth
        .signInWithEmailAndPassword(data.email, data.password)
        .catch((err) => {
          if (err) {
            alert(err);
          }
        })
        .then((i) =>
          i.user.updateEmail(data.password_baru).then(() => {
            setData({ ...data, isUpdated: true });
          })
        );
    } else {
      alert(
        "jika ingin update password form password lama dan email lama serta password baru tidak boleh kosong "
      );
    }

    rtdb
      .ref("/user")
      .child(`/${user_id}`)
      .set(data, (err) => {
        if (err) {
          alert(err);
        } else {
          history.push("/akun");
        }
      });
  };
  return (
    <div>
      {/* <div className="_square">
          <div className="_circle"> </div>
        </div> */}
      <div className="d-flex flex-row col-md-12 ">
        {/*  */}
        <div className="col-md-12 col-sm-12 col-xs-12 d-flex flex-column justify-content-center align-items-center  mt-4">
          <div className="d-flex flex-row justify-content-center align-items-center"></div>

          <div className="col-md-8 d-flex flex-column rounded p-3 _shadow">
            <div class="input-group input-group-sm">
              <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">
                  old email
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
                  old password
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
                  email baru
                </span>
              </div>
              <input
                onChange={handleChange}
                type="text"
                name="email_baru"
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
                  new password
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                name="password_baru"
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
                placeholder={data.nama}
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
                  address
                </span>
              </div>
              <input
                placeholder={data.alamat}
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
                  id card
                </span>
              </div>
              <input
                placeholder={data.nim}
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
              <button type="button" class="btn btn-primary" onClick={edith}>
                edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditAkun;
