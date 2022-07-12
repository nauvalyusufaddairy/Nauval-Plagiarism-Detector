import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { useStateValue } from "../../../Utils/StateProvider";
import "./style.css";
import Navbar from "../../Komponen/Navbar/Navbar";
import Highlighter from "react-highlight-words";
import { Button } from "@mui/material";
import { rtdb } from "../../../Utils/firebase";
import { useHistory } from "react-router-dom";
function Hasil() {
  const history = useHistory();
  const [
    {
      docAsli_token,
      docAsli_hashing,
      docUji_token,
      docUji_hashing,
      polaYangSama,
      similarity,
      nav_state,
      words1,
      words2,
      file_name1,
      file_name2,
      interval,
      user_id,
      ket,
    },
    dispatch,
  ] = useStateValue();
  /*
    
     
      




  */

  const getDate = () => {
    let today = new Date();
    let time =
      " tgl " +
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate() +
      " jam " +
      (today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        "s");

    return time;
  };
  const simpan = (e) => {
    e.preventDefault();
    rtdb
      .ref("/user")
      .child(`/${user_id}`)
      .child("/history")
      .child(`/${getDate()}`)
      .set(
        {
          docAsli_token,
          docAsli_hashing,
          docUji_token,
          docUji_hashing,
          polaYangSama,
          similarity,
          nav_state,
          words1,
          words2,
          file_name1,
          file_name2,
          interval,
          ket,
        },
        (err) => {
          if (err) {
            alert(err);
          }
        }
      );
    history.push("/riwayat_pengujian");
  };

  useEffect(() => {}, []);
  const humboldt = () => {
    return (
      <>
        <div className="_container ">
          <div className="_card rounded mr-2 shadow p-4">
            <div className="navbar-brand "> Tokenizing Document</div>
            <hr />
            <div className="_card-content">
              {docAsli_token && docAsli_token.map((val) => `{${val}},`)}
            </div>
            <hr />
            processed data count = {docAsli_token.length}
          </div>
          <div className="_card rounded ml-2 shadow p-4">
            <div className="navbar-brand "> Tokenizing Compared Doument</div>
            <hr />
            <div className="_card-content">
              {docUji_token && docUji_token.map((val) => `{${val}},`)}
            </div>
            <hr />
            processed data count = {docUji_token.length}
          </div>
        </div>

        {/* */}

        <div className="_container mt-4 ">
          <div className="_card rounded mr-2 shadow p-4">
            <div className="navbar-brand "> Hashing Document</div>
            <hr />
            <div className="_card-content">
              {docAsli_hashing && docAsli_hashing.map((val) => `{${val}},`)}
            </div>
            <hr />
            processed data count = {docAsli_hashing.length}
          </div>
          <div className="_card rounded ml-2 shadow p-4">
            <div className="navbar-brand "> Hashing Compared Doument</div>
            <hr />
            <div className="_card-content">
              {docUji_hashing && docUji_hashing.map((val) => `{${val}},`)}
            </div>
            <hr />
            processed data count = {docUji_hashing.length}
          </div>
        </div>

        {/* <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1">
            <div className="navbar-brand">Pola Yang Sama</div>
            <hr></hr>
            {polaYangSama.docAsli &&
              polaYangSama.docAsli.map((val) => {
                return (
                  <>
                    {val}
                    <br />
                  </>
                );
              })}
            <hr />
            total data yang di proses = {polaYangSama.docAsli.length}
          </div>
        </div> */}
        <div className="_container mt-4 ">
          <div className="_card rounded mr-2 shadow p-4">
            <div className="navbar-brand "> Document Result</div>
            {file_name1 ? file_name1 : ""}
            <hr />
            <div className="_card-content ">
              {polaYangSama && (
                <Highlighter
                  //activeIndex={(a) => console.log("active index  >>", a)}
                  highlightClassName="ara"
                  searchWords={words2.split(" ")}
                  autoEscape={true}
                  textToHighlight={words1}
                />
              )}
            </div>
            <hr />
          </div>
          <div className="_card rounded ml-2 shadow p-4">
            <div className="navbar-brand "> Compared Document Result</div>
            {file_name2 ? file_name2 : ""}
            <hr />
            <div className="_card-content ">
              {polaYangSama && (
                <Highlighter
                  highlightClassName="ara"
                  searchWords={words1.split(" ")}
                  autoEscape={true}
                  textToHighlight={words2}
                />
              )}
            </div>
            <hr />
            {/*
            
              <p> banyak kalimat : {words2.split(",").length}</p>
              <p> banyak kata : {words2.split(" ").length}</p>
              <p> waktu proses : {stormingDecimal(interval)} detik</p> */}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1 mb-4">
            <div className="navbar-brand">Similarity (Kesamaan)</div>
            <hr></hr>
            <h5> S = (IH / THA + THB) x 100% </h5>
            <br />
            <p>S = Similarity (Kesamaan)</p>
            <p>IH = similar word pattern count</p>
            <p>THA = document hashing</p>
            <p>THB = compared document hashing</p>
            <hr />S = ({polaYangSama?.docAsli?.length} /{" "}
            {docAsli_hashing?.length} + {docUji_hashing.length}) x 100%
            <br />= {similarity}%<hr></hr>
            <p>time : {interval}</p>
            <p>description : {ket}</p>
          </div>
        </div>
        <div className="d-flex flex-row alig-items-center justify-content-center _mb-7 mt-4">
          <Button variant="contained" onClick={simpan}>
            save
          </Button>
        </div>
      </>
    );
  };
  return (
    <div>
      <Navbar />
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Home
            </li>
            <li
              class="breadcrumb-item"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/proses")}
            >
              Process
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Result
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center mt-1 mb-4">
        <div className=" col-md-12 shadow rounded pb-1">
          {" "}
          {typeof docAsli_hashing !== "undefined" ? (
            <>{humboldt()}</>
          ) : (
            <>
              {" "}
              <h1>EMPTY DATA </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hasil;
{
  /* <div className=" col-md-8 shadow rounded">
    </div> */
}
