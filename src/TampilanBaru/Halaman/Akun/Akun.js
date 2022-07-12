import React, { useEffect, useState } from "react";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { rtdb } from "../../../Utils/firebase";
import { useStateValue } from "../../../Utils/StateProvider";

function Akun() {
  const [hide, setHide] = useState(0);
  const [{ user_id }] = useStateValue();
  const init = {
    nama: "",
    email: "",
    password: "",
    alamat: "",
    nim: "",
    email_baru: "",
    password_baru: "",
    isUpdated: false,
  };
  const [data, setData] = useState(init);
  let regExp = /[\W\s]/g;
  const hyde = () => {
    setHide((a) => a + 1);
    if (hide === 1) {
      setHide(0);
    }
  };
  useEffect(() => {
    rtdb
      .ref("/user")
      .child(`/${user_id}`)
      .on("value", (snapshot) => {
        if (snapshot.exists()) {
          console.log("snapshot", user_id);
          setData(snapshot.val());
        }
      });
    console.log("data", data);
  }, []);
  return (
    <div>
      {/* <div className="_square">
        <div className="_circle"> </div>
      </div> */}
      <div className="d-flex flex-row col-md-12 ">
        <div className="col-md-2 mt-2">
          {/* <img
            src={nov}
            style={{
              width: "8rem",
              height: "8rem",
              borderRadius: "50%",
            }}
          /> */}
        </div>
        <div className="col-md-8 d-flex flex-column mt-2">
          <div className="row">
            <h5>Name : </h5>
            <p className="ml-3">{data.nama}</p>
          </div>
          <div className="row">
            <h5>Id Number : </h5>
            <p className="ml-3">{data.nim}</p>
          </div>
          <div className="row">
            <h5>Address: </h5>
            <p className="ml-3">{data.alamat}</p>
          </div>
          <div className="row">
            <h5>Email : </h5>
            <p className="ml-3">
              {data.isUpdated ? data.email_baru : data.email}
            </p>
          </div>
          <div className="row">
            <h5>
              Password : {data.isUpdated ? data.password_baru : data.password}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Akun;
