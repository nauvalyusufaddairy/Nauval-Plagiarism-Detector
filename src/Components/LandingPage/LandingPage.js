import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";

function LandingPage() {
  const history = useHistory();
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <div className="col-md-8 shadow rounded p-4 mt-7">
        <div className="navbar-brand">SELAMAT DATANG</div>
        <hr></hr>

        <p>
          Sistem pendeteksi plagiarisme merupakan sistem berbasis web yang
          digunakan untuk mendeteksi dengan menggunkan Algoritma Rabin Karp.
          Proses ini dimulai dengan mengupload dua dokumen atau teks yaitu
          dokumen uji dan penguji. hasil dari proses akan menampilkan persentase
          dan kemiripan kalimat yang sama antara dua dokumen
        </p>
        <div className="d-flex align-items-center justify-content-end mb-4">
          <button
            type="button"
            class="btn btn-outline-primary"
            onClick={() => history.push("/home")}
          >
            mulai sekarang
          </button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
