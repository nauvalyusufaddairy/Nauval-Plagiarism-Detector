import React, { useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material/";
import { height, width } from "@mui/system";
import { auth } from "../../../Utils/firebase";

function Navbar() {
  const history = useHistory();
  const [toogle, setToogle] = useState(0);
  const hold = () => {
    setToogle((a) => a + 1);
    if (toogle === 1) {
      setToogle(0);
    }
  };
  const logout = (e) => {
    console.log("logout");
    e.preventDefault();
    auth.signOut().then(() => history.push("/"));
  };
  return (
    <>
      <div className="d-flex flex-row ">
        <h2 className="col-md-8 mt-2"> Plagiarism Detector </h2>
        <div className="col-md-4 _pointer">
          <AccountCircle
            onClick={hold}
            sx={{
              width: "3rem",
              height: "3rem",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
              float: "right",
            }}
          />
        </div>
      </div>
      {toogle > 0 ? (
        <>
          <div className="d-flex flex-row justify-content-end">
            <div className="col-md-2 rounded _lil-pop-up d-flex flex-column _shadow mr-2 ">
              <p className="_pointer" onClick={() => history.push("/akun")}>
                Account
              </p>
              <p
                className="_pointer"
                onClick={() => history.push("/edit-akun")}
              >
                Edit Account
              </p>
              <hr />
              <p className="_pointer" onClick={logout}>
                logout{" "}
              </p>
            </div>
          </div>
        </>
      ) : (
        ""
      )}

      <div className="col-md-12">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th
                className="_text-align-center col-md-2"
                onClick={() => history.push("/")}
              >
                Home
              </th>
              <th
                className="_text-align-center col-md-2"
                onClick={() => history.push("/riwayat_pengujian")}
              >
                History
              </th>

              <th
                className="_text-align-center col-md-2"
                onClick={() => history.push("/bantuan")}
              >
                {" "}
                Help{" "}
              </th>
              <th
                className="_text-align-center col-md-2"
                onClick={() => history.push("/tentang")}
              >
                {" "}
                About{" "}
              </th>
            </tr>
          </thead>
        </table>
      </div>
    </>
  );
}

export default Navbar;
