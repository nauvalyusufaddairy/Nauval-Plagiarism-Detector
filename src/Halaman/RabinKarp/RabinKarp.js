import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../../Utils/StateProvider";
import { useHistory } from "react-router";
import { Button, Chip, Divider } from "@mui/material";

/*
 
  

*/

function RabinKarp() {
  const initialState = {
    input1: "",
    input2: "",
    kgram: 5,
    mod: 113,
  };
  const [data, setData] = useState(initialState);
  const [{ docAsli_token }, dispatch] = useStateValue();
  const history = useHistory();

  useEffect(() => {
    dispatch({
      type: "NAV_STATE",
      navState: "home",
    });
  }, []);
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const rb = (docAsli, docUji, kgram, mod) => {
    console.log(
      "tatatatatatatatatatatatatatatatatatatatatatatatatatat",
      kgram,
      mod
    );
    // variabel global
    let regExp = /[\W\s]/g;
    let polaYangSama = [];

    // variabel dokumen asli
    let normalizeDocAsli = docAsli.replace(regExp, "").toLowerCase(); // ubah kalimat tanpa spasi dan simbol non alphabetic
    let panjangDocAsli = normalizeDocAsli.length; // panjang string setelah di normalisasi
    let tokenizingDocAsli = []; // untuk menyimpan token
    let hashingDocAsli = []; // untuk menyimpan nilai hahsing
    let nilaiHashDocAsli = 0;

    // variabel dokumen uji
    let normalizeDocUji = docUji.replace(regExp, "").toLowerCase();
    let panjangDocUji = normalizeDocUji.length;
    let tokenizingDocUji = [];
    let hashingDocUji = [];
    let nilaiHashDocUji = 0;

    // |||||||||||||||||  AWAL DOKUMEN ASLI   |||||||||||||||//

    // proses tokenizing dokumen asli
    for (let i = 0; i <= panjangDocAsli; i++) {
      let p = kgram + i;
      if (p === panjangDocAsli) {
        tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
        break;
      }
      tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
    }

    // proses hashing dokumen asli
    for (let i = 0; i < tokenizingDocAsli.length; i++) {
      for (let j = 0; j <= tokenizingDocAsli[i].length; j++) {
        let ps = j;
        if (ps === tokenizingDocAsli[i].length) {
          hashingDocAsli.push(nilaiHashDocAsli);
          nilaiHashDocAsli = 0;
          break;
        }

        nilaiHashDocAsli +=
          (tokenizingDocAsli[i].charCodeAt(j) * 113) ^ (kgram - j);
      }
    }

    // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

    // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

    // proses tokenizing dokumen uji
    for (let i = 0; i <= normalizeDocUji.length; i++) {
      let p = i + kgram;
      if (p === panjangDocUji) {
        tokenizingDocUji.push(normalizeDocUji.substring(i, p));
        break;
      }
      tokenizingDocUji.push(normalizeDocUji.substring(i, p));
    }
    for (let i = 0; i < tokenizingDocUji.length; i++) {
      for (let j = 0; j <= tokenizingDocUji[i].length; j++) {
        if (j === tokenizingDocUji[i].length) {
          hashingDocUji.push(nilaiHashDocUji);
          nilaiHashDocUji = 0;
          break;
        }

        nilaiHashDocUji +=
          (tokenizingDocUji[i].charCodeAt(j) * 113) ^ (kgram - j);
      }
    }

    // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

    // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

    for (let i = 0; i <= hashingDocAsli.length; i++) {
      for (let j = 0; j < hashingDocUji.length; j++) {
        if (hashingDocAsli[i] === hashingDocUji[j]) {
          polaYangSama.push(
            `Dokumen uji posisi ke : ${i} ${tokenizingDocAsli[i]} (${hashingDocAsli[i]}) = Dokumen penguji posisi ke : ${j} : ${tokenizingDocUji[j]} (${hashingDocUji[j]})`
          );
        }
      }
    }

    // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

    // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

    let A = polaYangSama.length;
    let B = tokenizingDocAsli.length + tokenizingDocUji.length;
    let C = ((A * 2) / B) * 100;
    let similarity = C.toFixed(2);
    if (C > 100) {
      similarity = 100;
    }

    // ||||||||||||||||| AKHIR PERHITUNGAN SIMILARITY  |||||||||||||||//

    console.log(" ================== dokumen asli ===============");

    console.log(tokenizingDocAsli);
    dispatch({ type: "DOCASLI_TOKENIZING", docAsliToken: tokenizingDocAsli });
    console.log(normalizeDocAsli);
    console.log(hashingDocAsli);
    dispatch({ type: "DOCASLI_HASHING", docAsliHashing: hashingDocAsli });
    console.log("================== dokumen uji =================");
    console.log(tokenizingDocUji);
    dispatch({ type: "DOCUJI_TOKENIZING", docUjiToken: tokenizingDocUji });
    console.log(normalizeDocUji);
    console.log(hashingDocUji);
    dispatch({ type: "DOCUJI_HASHING", docUjiHashing: hashingDocUji });

    console.log("pola yang sama", polaYangSama);
    dispatch({ type: "POLAYANGSAMA", pola: polaYangSama });
    console.log("================== similarity =================");
    console.log("similarity : ", similarity + "%");
    dispatch({ type: "SIMILARITY", similarity: similarity });

    history.push("/hasil");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-1">
        <div className=" col-md-8 shadow rounded">
          <div class="form-group">
            <label for="formGroupExampleInput">Text uji</label>
            <textarea
              type="text"
              class="form-control"
              name="input1"
              placeholder="text uji"
              onChange={handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Text penguji</label>
            <textarea
              type="text"
              class="form-control"
              name="input2"
              placeholder="text penguji"
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
              onClick={() => {
                rb(data.input1, data.input2, 5);
                console.log("data", data);
              }}
            >
              proses
            </button>
          </div>
          {/* <div className="d-flex justify-content-center align-items-center mt-1">
            <div className=" col-md-8  ">
              <p style={{ color: "red" }}>
                untuk menghindari error pada perhitungan similarity jumlah kata
                pada text uji harus lebih banyak dari text penguji
              </p>
            </div>
          </div> */}
          {/* <div className="">
            <hr className="divider-left" />
            <div className="text-center"> atau</div>

            <hr className="divider-right" />
          </div> */}
          <Divider className="mb-4">
            <Chip label="atau" />
          </Divider>
          <div className="col-md-12 d-flex justify-content-center align-item-center mb-4">
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/uploadPage")}
            >
              Upload file
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RabinKarp;
