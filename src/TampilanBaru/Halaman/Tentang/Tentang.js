import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";

function Tentang() {
  const history = useHistory();
  return (
    <>
      <div className="col-md-12">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              <a>beranda</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              tentang
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-md-8 shadow rounded p-4 _mt-7">
          <div className="navbar-brand">About Creator</div>
          <hr></hr>
          {/* <div className=' d-flex flex-column'>
              <div className='d-flex flex-row margin-auto'>
                  <h4>Nama                : </h4>      <h4 className='ml-4'>Waldi Aditia Sirait</h4>
                  

              </div>
              <div className='d-flex flex-row margin-auto'>
                  <h4>Jenis Kelamin        : </h4>     <h4 className='ml-4'>Laki-laki</h4>
                  

              </div>
              <div className='d-flex flex-row margin-auto'>
                  <h4>Tempat, Tanggal Lahir : </h4>    <h4 className='ml-4'>Raja maligas, 23 Januari 1998</h4>
                  

              </div>  </div>*/}
          <p>Name : Nauval Yusuf Addairy</p>
          <p>Email : nauvalyusufad@gmail.com</p>

          <p>Phone : +62895630658877</p>

          <div className="d-flex align-items-center justify-content-end mb-4">
            <button
              type="button"
              class="btn btn-outline-primary"
              onClick={() => history.push("/")}
            >
              kembali
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tentang;
