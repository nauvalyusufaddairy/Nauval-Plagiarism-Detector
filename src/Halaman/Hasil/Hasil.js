import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../../Utils/StateProvider";
function Hasil() {
  const [
    {
      docAsli_token,
      docAsli_hashing,
      docUji_token,
      docUji_hashing,
      polaYangSama,
      similarity,
      nav_state,
    },
    dispatch,
  ] = useStateValue();

  useEffect(() => {
    dispatch({ type: "NAV_STATE", navState: "hasil" });
    console.log("nanananananananananaananananananan", nav_state);
  }, []);
  const humboldt = () => {
    return (
      <>
        {/* <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="navbar-brand">Tokenizing Dokumen Uji</div>
          <hr></hr>
          {docAsli_token && docAsli_token.map((val) => `{${val}},`)}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="navbar-brand">Hashing Dokumen Uji</div>
          <hr></hr>
          {docAsli_hashing && docAsli_hashing.map((val) => `{${val}},`)}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="navbar-brand">Tokenizing Dokumen Penguji</div>
          <hr></hr>
          {docUji_token && docUji_token.map((val) => `{${val}},`)}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="navbar-brand">Hashing Dokumen Penguji</div>
          <hr></hr>
          {docUji_hashing && docUji_hashing.map((val) => `{${val}},`)}
        </div>
        <div className="d-flex justify-content-center align-items-center mt-1">
          <div className="navbar-brand">Pola Yang Sama</div>
          <hr></hr>
          {polaYangSama &&
            polaYangSama.map((val) => {
              <>
                {val}
                <br />
              </>;
            })}
          <div className="d-flex justify-content-center align-items-center mt-1">
            <div className="navbar-brand">Similarity (Kesamaan)</div>
            <hr></hr>
            {similarity && similarity.map((val) => `{${val}},`)}
          </div>
        </div> */}
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded">
            <div className="navbar-brand">Tokenizing Dokumen Uji</div>
            <hr></hr>
            {docAsli_token && docAsli_token.map((val) => `{${val}},`)}
            <hr />
            total data yang di proses = {docAsli_token.length}
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1">
            <div className="navbar-brand">Hashing Dokumen Uji</div>
            <hr></hr>
            {docAsli_hashing && docAsli_hashing.map((val) => `{${val}},`)}
            <hr />
            total data yang di proses = {docAsli_hashing.length}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1">
            <div className="navbar-brand">Tokenizing Dokumen Penguji</div>
            <hr></hr>
            {docUji_token && docUji_token.map((val) => `{${val}},`)}
            <hr />
            total data yang di proses = {docUji_token.length}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1">
            <div className="navbar-brand">Hashing Dokumen Penguji</div>
            <hr></hr>
            {docUji_hashing && docUji_hashing.map((val) => `{${val}},`)}
            <hr />
            total data yang di proses = {docUji_hashing.length}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1">
            <div className="navbar-brand">Pola Yang Sama</div>
            <hr></hr>
            {polaYangSama &&
              polaYangSama.map((val) => {
                return (
                  <>
                    {val}
                    <br />
                  </>
                );
              })}
            <hr />
            total data yang di proses = {polaYangSama.length}
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center mt-2">
          <div className=" col-md-8 shadow rounded pb-1 mb-4">
            <div className="navbar-brand">Similarity (Kesamaan)</div>
            <hr></hr>
            <h5> S = (2 x IH / THA + THB) x 100% </h5>
            <br />
            <p>S = Similarity (Kesamaan)</p>
            <p>IH = jumlah pola yang sama</p>
            <p>THA = jumlah hashing dokumen uji</p>
            <p>THB = jumlah hasing dokumen penguji</p>
            <hr />S = (2 x {polaYangSama.length} / {docAsli_hashing.length} +{" "}
            {docUji_hashing.length}) x 100%
            <br />= {similarity}%
          </div>
        </div>
      </>
    );
  };
  return (
    <div>
      <div className="d-flex justify-content-center align-items-center mt-1">
        <div className=" col-md-8 shadow rounded pb-1">
          {" "}
          {typeof docAsli_hashing !== "undefined" ? (
            <>{humboldt()}</>
          ) : (
            <>
              {" "}
              <h1>DATA KOSONG !!</h1>
              <h4> anda mungkin belum melakukan proses cek plagiasi</h4>
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
