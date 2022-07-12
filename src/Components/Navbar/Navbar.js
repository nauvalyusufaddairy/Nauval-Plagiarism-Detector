import React, { useEffect } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../Utils/StateProvider";

function Navbar() {
  const [{ nav_state }] = useStateValue();
  useEffect(() => {
    console.log("nav_state", nav_state);
  });
  const history = useHistory();

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light sticky-top">
        <Link to="/">
          <div class="navbar-brand">Rabin Karp</div>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li
              class={nav_state === "home" ? "nav-item active" : "nav-item"}
              onClick={() => history.push("/home")}
            >
              <a class="nav-link" style={{ cursor: "pointer" }}>
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            {/*   <li
              class={nav_state === "akun" ? "nav-item active" : "nav-item"}
              onClick={() => history.push("/akun")}
            >
              <a class="nav-link" style={{ cursor: "pointer" }}>
                Akun
              </a>
            </li>
            <li
              class={nav_state === "riwayat" ? "nav-item active" : "nav-item"}
              onClick={() => history.push("/riwayat")}
            >
              <a class="nav-link" style={{ cursor: "pointer" }}>
                Riwayat
              </a>
            </li> */}
            <li
              class={nav_state === "hasil" ? "nav-item active" : "nav-item"}
              onClick={() => history.push("/hasil")}
            >
              <a
                class="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/hasil")}
              >
                hasil
              </a>
            </li>
            <li
              class={nav_state === "riwayat" ? "nav-item active" : "nav-item"}
            >
              <a
                class="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/riwayat")}
              >
                riwayat
              </a>
            </li>
            <li class={nav_state === "akun" ? "nav-item active" : "nav-item"}>
              <a
                class="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/akun")}
              >
                akun
              </a>
            </li>

            <li
              class={nav_state === "bantuan" ? "nav-item active" : "nav-item"}
            >
              <a
                class="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/bantuan")}
              >
                bantuan
              </a>
            </li>
            <li>
              <a
                class="nav-link "
                style={{ cursor: "pointer" }}
                onClick={() => history.push("/tentang")}
              >
                tentang
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
