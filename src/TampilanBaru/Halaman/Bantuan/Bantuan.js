import React from "react";
import { useHistory } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import bagan_1 from "../../../Assets/bagan_1.png";
import bagan_2 from "../../../Assets/bagan_2.png";

function Bantuan() {
  const history = useHistory();
  return (
    <div>
      {" "}
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <span className="">Home</span>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Help
            </li>
          </ol>
        </nav>
      </div>
      {/* <div className="col-md-12 d-flex flex-row">
        <div className="col-md-2 table-bordered text-align-center">beranda</div>
      </div> */}
      <div className="d-flex justify-content-center align-items-center ">
        {/* <div className="col-md-8 shadow rounded p-4 _mt-7">
          <div className="navbar-brand">Bantuan</div>
          <hr></hr>
          <h4>cara pemakaian</h4>

          <p>
           1. 
          </p>
          <div className="d-flex align-items-center justify-content-end mb-4">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => history.push("/proses")}
            >
              mulai sekarang
            </button>
          </div>
        </div> */}
        <div className="d-flex flex-column">
          <img
            src={bagan_1}
            style={{ width: "80vw", height: "100vh", background: "lightGray" }}
          />
          <img
            src={bagan_2}
            style={{ width: "80vw", height: "100vh", background: "lightGray" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Bantuan;
