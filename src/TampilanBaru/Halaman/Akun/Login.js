import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../../../Utils/firebase";
import { useStateValue } from "../../../Utils/StateProvider";
import { Button, Chip, Divider } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
function Login() {
  const history = useHistory();
  const init = {
    email: "",
    password: "",
  };
  const [data, setData] = useState(init);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const [{ user_id }, dispatch] = useStateValue();
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(data.email, data.password)
      .catch((err) => {
        if (err) {
          alert(err);
        }
      })
      .then((a) => {
        history.push("/");
      });
  };
  useEffect(() => {
    console.log("hahay", user_id);
    console.log("hahay", user_id);
  }, []);
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-7">
        <div className=" col-md-8 col-sm-12 col-xs-12 shadow rounded">
          <div class="form-group">
            <label for="formGroupExampleInput">email</label>
            <textarea
              type="text"
              class="form-control"
              name="email"
              placeholder="email"
              onChange={handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              placeholder="password"
              onChange={handleChange.bind(this)}
            />
          </div>

          {/* <select
            class="custom-select mb-3"
            onChange={handleChange.bind(this)}
            name="kgram"
          >
            <option selected="">Pilih kgram (default : 5)</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={15}>15</option>
          </select>
          <select
            class="custom-select mb-4"
            onChange={handleChange.bind(this)}
            name="mod"
          >
            <option selected="">Pilih Basis Modulo (default : 113)</option>
            <option value={113}>113</option>
            <option value={2331}>2331</option>
            <option value={2113}>2113</option>
          </select> 

          */}

          <div className="d-flex align-items-center justify-content-center mb-4">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={login}
            >
              login
            </button>
          </div>
          {/* <div className="d-flex justify-content-center align-items-center mt-1">
            <div className=" col-md-8  ">
              <p style={{ color: "red" }}>
                untuk menghindari error pada perhitungan similarity jumlah kata
                pada text uji harus lebih banyak dari text penguji
              </p>
            </div>
          </div> 
          */}

          {/* <div className="">
            <hr className="divider-left" />
            <div className="text-center"> atau</div>

            <hr className="divider-right" />
          </div> */}
          <Divider className="mb-4">
            <Chip label="Or" />
          </Divider>
          <div className="col-md-12 d-flex justify-content-center align-item-center mb-4">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/daftar")}
            >
              signup
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
