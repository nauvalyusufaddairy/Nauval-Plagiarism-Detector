import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Beranda() {
  const history = useHistory();
  return (
    <>
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active" aria-current="page">
              Home
            </li>
          </ol>
        </nav>
      </div>

      {/* <div className="col-md-12 d-flex flex-row">
        <div className="col-md-2 table-bordered text-align-center">beranda</div>
      </div> */}
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-md-8 shadow rounded p-4 _mt-7">
          <div className="navbar-brand">Welcome</div>
          <hr></hr>

          <p>
            The plagiarism detection system is a web-based system that used to
            detect using the Rabin Karp Algorithm. This process begins by
            uploading two documents or text, namely: test documents and
            examiners. the result of the process will display the percentage and
            similarity of sentences between two documents
          </p>
          <div className="d-flex align-items-center justify-content-end mb-4">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => history.push("/proses")}
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Beranda;
