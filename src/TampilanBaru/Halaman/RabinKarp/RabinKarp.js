import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useHistory } from "react-router";
import { Button, Chip, Divider } from "@mui/material";
import { useStateValue } from "../../../Utils/StateProvider";

/*
 
  

*/

function RabinKarp() {
  const getTime = () => {
    let now = new Date();
    let time = {
      jam: now.getHours(),
      menit: now.getMinutes(),
      detik: now.getSeconds(),
      miliseconds: now.getMilliseconds(),
    };
    return time;
  };
  const compare = (start, end) => {
    let diffTime = {
      jam: () => {
        if (end.jam - start.jam === 0) {
          return "";
        } else if (end.jam - start.jam < 0) {
          return Math.abs(end.jam - start.jam) + " jam ";
        } else {
          return end.jam - start.jam + " jam ";
        }
      },
      menit: () => {
        if (end.menit - start.menit === 0) {
          return "";
        } else if (end.menit - start.menit < 0) {
          return Math.abs(end.menit - start.menit) + " menit ";
        } else {
          return end.menit - start.menit + " menit ";
        }
      },
      detik: () => {
        if (end.detik - start.detik === 0) {
          return "";
        } else if (end.detik - start.detik < 0) {
          return Math.abs(end.detik - start.detik) + " detik ";
        } else {
          return end.detik - start.detik + " detik ";
        }
      },
      miliseconds: () => {
        if (end.miliseconds - start.miliseconds === 0) {
          return "";
        } else if (end.miliseconds - start.miliseconds < 0) {
          return Math.abs(end.miliseconds - start.miliseconds) + " ms ";
        } else {
          return end.miliseconds - start.miliseconds + " ms ";
        }
      },
    };
    return diffTime;
  };
  const initialState = {
    input1: "",
    input2: "",
    kgram: 5,
    mod: 113,
  };
  const [data, setData] = useState(initialState);
  // const [{ docAsli_token }, dispatch] = useStateValue();
  const [{ docAsli_token, ket }, dispatch] = useStateValue();

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
  //   const rb = (docAsli, docUji, kgram, mod) => {
  //     const base = 37;
  // const modulus = 113;
  // const charToNumber = (char) => {
  //   let charCode = char.codePointAt(0);

  //   // Check if character has surrogate pair.
  //   const surrogate = char.codePointAt(1);
  //   if (surrogate !== undefined) {
  //     const surrogateShift = 2 ** 16;
  //     charCode += surrogate * surrogateShift;
  //   }

  //   return charCode;
  // };
  // const hash = (word) => {
  //   const charCodes = Array.from(word).map((char) => charToNumber(char));

  //   let hash = 0;
  //   for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
  //     hash *= base;
  //     hash += charCodes[charIndex];
  //     hash %= modulus;
  //   }

  //   return hash;
  // };
  //     let awal = new Date().getTime();
  //     dispatch({
  //       type: "WORDS1",
  //       words1: docAsli,
  //     });
  //     dispatch({ type: "WORDS2", words2: docUji });
  //     // variabel global
  //     let regExp = /[\W\s]/g;
  //     let polaYangSama = {
  //       docAsli: [],
  //       docUji: [],
  //     };

  //     // variabel dokumen asli
  //     let normalizeDocAsli = docAsli.replace(regExp, "").toLowerCase(); // ubah kalimat tanpa spasi dan simbol non alphabetic
  //     let panjangDocAsli = normalizeDocAsli.length; // panjang string setelah di normalisasi
  //     let tokenizingDocAsli = []; // untuk menyimpan token
  //     let hashingDocAsli = []; // untuk menyimpan nilai hahsing
  //     let nilaiHashDocAsli = 0;

  //     // variabel dokumen uji
  //     let normalizeDocUji = docUji.replace(regExp, "").toLowerCase();
  //     let panjangDocUji = normalizeDocUji.length;
  //     let tokenizingDocUji = [];
  //     let hashingDocUji = [];
  //     let nilaiHashDocUji = 0;

  //     // |||||||||||||||||  AWAL DOKUMEN ASLI   |||||||||||||||//

  //     // proses tokenizing dokumen asli
  //     for (let i = 0; i <= panjangDocAsli; i++) {
  //       let p = kgram + i;
  //       if (p === panjangDocAsli) {
  //         tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //         break;
  //       }
  //       tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //     }

  //     // proses hashing dokumen asli
  //     for (let i = 0; i < tokenizingDocAsli.length; i++) {
  //       for (let j = 0; j <= tokenizingDocAsli[i].length; j++) {
  //         let ps = j;
  //         if (ps === tokenizingDocAsli[i].length) {
  //           hashingDocAsli.push(nilaiHashDocAsli);
  //           nilaiHashDocAsli = 0;
  //           break;
  //         }

  //         nilaiHashDocAsli +=
  //           (tokenizingDocAsli[i].charCodeAt(j) * 113) ^ (kgram - j);
  //       }
  //     }

  //     // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

  //     // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

  //     // proses tokenizing dokumen uji
  //     for (let i = 0; i <= normalizeDocUji.length; i++) {
  //       let p = i + kgram;
  //       if (p === panjangDocUji) {
  //         tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //         break;
  //       }
  //       tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //     }
  //     for (let i = 0; i < tokenizingDocUji.length; i++) {
  //       for (let j = 0; j <= tokenizingDocUji[i].length; j++) {
  //         if (j === tokenizingDocUji[i].length) {
  //           hashingDocUji.push(nilaiHashDocUji);
  //           nilaiHashDocUji = 0;
  //           break;
  //         }

  //         nilaiHashDocUji +=
  //           (tokenizingDocUji[i].charCodeAt(j) * 113) ^ (kgram - j);
  //       }
  //     }

  //     // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

  //     // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

  //     // for (let i = 0; i <= hashingDocUji.length; i++) {
  //     //   for (let j = 0; j < hashingDocAsli.length; j++) {
  //     //     if (hashingDocUji[i] === hashingDocAsli[j]) {
  //     //       polaYangSama.docAsli.push(hashingDocAsli[j]);
  //     //     }
  //     //   }
  //     // }
  //     tokenizingDocAsli.forEach((v0) => {
  //       tokenizingDocUji.forEach((v1) => {
  //         if (v0 === v1) {
  //           polaYangSama.docAsli.push(v0);
  //         }
  //       });
  //     });

  //     // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

  //     // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

  //     let A = polaYangSama.docAsli.length;
  //     let B = tokenizingDocAsli.length + tokenizingDocUji.length;
  //     let C = (A / B) * 100;
  //     let similarity = C.toFixed(2);
  //     if (C > 100) {
  //       similarity = 100;
  //     }

  //     // ||||||||||||||||| AKHIR PERHITUNGAN SIMILARITY  |||||||||||||||//

  //     console.log(" ================== dokumen asli ===============");

  //     console.log(tokenizingDocAsli);
  //     dispatch({ type: "DOCASLI_TOKENIZING", docAsliToken: tokenizingDocAsli });
  //     console.log(normalizeDocAsli);
  //     console.log(hashingDocAsli);
  //     dispatch({ type: "DOCASLI_HASHING", docAsliHashing: hashingDocAsli });
  //     console.log("================== dokumen uji =================");
  //     console.log(tokenizingDocUji);
  //     dispatch({ type: "DOCUJI_TOKENIZING", docUjiToken: tokenizingDocUji });
  //     console.log(normalizeDocUji);
  //     console.log(hashingDocUji);
  //     dispatch({ type: "DOCUJI_HASHING", docUjiHashing: hashingDocUji });

  //     console.log("pola yang sama", polaYangSama);
  //     dispatch({ type: "POLAYANGSAMA", pola: polaYangSama });
  //     console.log("================== similarity =================");

  //     dispatch({ type: "SIMILARITY", similarity: similarity });
  //     let akhir = new Date().getTime();
  //     let total = akhir - awal;
  //     dispatch({
  //       type: "GET_INTERVAL",
  //       getInterval: total,
  //     });

  //     history.push("/hasil");
  //   };
  // const rb = (docAsli, docUji, kgram, mod) => {
  //   const base = 37;
  //   const modulus = 113;
  //   const charToNumber = (char) => {
  //     let charCode = char.codePointAt(0);

  //     // Check if character has surrogate pair.
  //     const surrogate = char.codePointAt(1);
  //     if (surrogate !== undefined) {
  //       const surrogateShift = 2 ** 16;
  //       charCode += surrogate * surrogateShift;
  //     }

  //     return charCode;
  //   };
  //   const hash = (word) => {
  //     const charCodes = Array.from(word).map((char) => charToNumber(char));

  //     let hash = 0;
  //     for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
  //       hash *= base;
  //       hash += charCodes[charIndex];
  //       hash %= modulus;
  //     }

  //     return hash;
  //   };
  //   let awal = new Date().getTime();
  //   dispatch({
  //     type: "WORDS1",
  //     words1: docAsli,
  //   });
  //   dispatch({ type: "WORDS2", words2: docUji });
  //   // variabel global
  //   let regExp = /[\W\s]/g;
  //   let polaYangSama = {
  //     docAsli: [],
  //     docUji: [],
  //   };

  //   // variabel dokumen asli
  //   let normalizeDocAsli = docAsli.replace(regExp, "").toLowerCase(); // ubah kalimat tanpa spasi dan simbol non alphabetic
  //   let panjangDocAsli = normalizeDocAsli.length; // panjang string setelah di normalisasi
  //   let tokenizingDocAsli = []; // untuk menyimpan token
  //   let hashingDocAsli = []; // untuk menyimpan nilai hahsing
  //   let nilaiHashDocAsli = 0;

  //   // variabel dokumen uji
  //   let normalizeDocUji = docUji.replace(regExp, "").toLowerCase();
  //   let panjangDocUji = normalizeDocUji.length;
  //   let tokenizingDocUji = [];
  //   let hashingDocUji = [];
  //   let nilaiHashDocUji = 0;

  //   // |||||||||||||||||  AWAL DOKUMEN ASLI   |||||||||||||||//

  //   // proses tokenizing dokumen asli
  //   for (let i = 0; i <= panjangDocAsli; i++) {
  //     let p = kgram + i;
  //     if (p === panjangDocAsli) {
  //       tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //       break;
  //     }
  //     tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //   }

  //   // proses hashing dokumen asli
  //   for (let i = 0; i < tokenizingDocAsli.length; i++) {
  //     for (let j = 0; j <= tokenizingDocAsli[i].length; j++) {
  //       let ps = j;
  //       if (ps === tokenizingDocAsli[i].length) {
  //         hashingDocAsli.push(nilaiHashDocAsli);
  //         nilaiHashDocAsli = 0;
  //         break;
  //       }

  //       nilaiHashDocAsli += hash(tokenizingDocAsli[i]);
  //     }
  //   }

  //   // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

  //   // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

  //   // proses tokenizing dokumen uji
  //   for (let i = 0; i <= normalizeDocUji.length; i++) {
  //     let p = i + kgram;
  //     if (p === panjangDocUji) {
  //       tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //       break;
  //     }
  //     tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //   }
  //   for (let i = 0; i < tokenizingDocUji.length; i++) {
  //     for (let j = 0; j <= tokenizingDocUji[i].length; j++) {
  //       if (j === tokenizingDocUji[i].length) {
  //         hashingDocUji.push(nilaiHashDocUji);
  //         nilaiHashDocUji = 0;
  //         break;
  //       }

  //       nilaiHashDocUji += hash(tokenizingDocUji[i]);
  //     }
  //   }

  //   // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

  //   // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

  //   for (let i = 0; i <= hashingDocUji.length; i++) {
  //     for (let j = 0; j < hashingDocAsli.length; j++) {
  //       if (hashingDocUji[i] === hashingDocAsli[j]) {
  //         polaYangSama.docAsli.push(hashingDocAsli[j]);
  //       }
  //     }
  //   }
  //   // tokenizingDocAsli.forEach((v0) => {
  //   //   tokenizingDocUji.forEach((v1) => {
  //   //     if (v0 === v1) {
  //   //       polaYangSama.docAsli.push(v0);
  //   //     }
  //   //   });
  //   // });

  //   // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

  //   // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

  //   let A = polaYangSama.docAsli.length;
  //   let B = tokenizingDocAsli.length + tokenizingDocUji.length;
  //   let C = (A / B) * 100;
  //   let similarity = C.toFixed(2);
  //   if (C > 100) {
  //     similarity = 100;
  //   }

  //   // ||||||||||||||||| AKHIR PERHITUNGAN SIMILARITY  |||||||||||||||//

  //   console.log(" ================== dokumen asli ===============");

  //   console.log(tokenizingDocAsli);
  //   dispatch({ type: "DOCASLI_TOKENIZING", docAsliToken: tokenizingDocAsli });
  //   console.log(normalizeDocAsli);
  //   console.log(hashingDocAsli);
  //   dispatch({ type: "DOCASLI_HASHING", docAsliHashing: hashingDocAsli });
  //   console.log("================== dokumen uji =================");
  //   console.log(tokenizingDocUji);
  //   dispatch({ type: "DOCUJI_TOKENIZING", docUjiToken: tokenizingDocUji });
  //   console.log(normalizeDocUji);
  //   console.log(hashingDocUji);
  //   dispatch({ type: "DOCUJI_HASHING", docUjiHashing: hashingDocUji });

  //   console.log("pola yang sama", polaYangSama);
  //   dispatch({ type: "POLAYANGSAMA", pola: polaYangSama });
  //   console.log("================== similarity =================");

  //   dispatch({ type: "SIMILARITY", similarity: similarity });
  //   let akhir = new Date().getTime();
  //   let total = akhir - awal;
  //   dispatch({
  //     type: "GET_INTERVAL",
  //     getInterval: total,
  //   });

  //   history.push("/hasil");
  // };
  const rb = (docAsli, docUji, kgram, mod) => {
    let start = getTime();
    const base = 37;
    const modulus = 113;
    const charToNumber = (char) => {
      let charCode = char.codePointAt(0);

      // Check if character has surrogate pair.
      const surrogate = char.codePointAt(1);
      if (surrogate !== undefined) {
        const surrogateShift = 2 ** 16;
        charCode += surrogate * surrogateShift;
      }

      return charCode;
    };
    const hash = (word) => {
      const charCodes = Array.from(word).map((char) => charToNumber(char));

      let hash = 0;
      for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
        hash *= base;
        hash += charCodes[charIndex];
        hash %= modulus;
      }

      return hash;
    };

    dispatch({
      type: "WORDS1",
      words1: docAsli,
    });
    dispatch({ type: "WORDS2", words2: docUji });
    // variabel global
    let regExp = /[\W\s]/g;
    let polaYangSama = {
      docAsli: [],
      docUji: [],
    };

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

        nilaiHashDocAsli += hash(tokenizingDocAsli[i]);
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

        nilaiHashDocUji += hash(tokenizingDocUji[i]);
      }
    }

    // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

    // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

    let jaerks = hashingDocAsli.filter((arr) => hashingDocUji.includes(arr));
    console.log("jaerks", jaerks);

    // for (let i = 0; i <= hashingDocUji.length; i++) {
    //   for (let j = 0; j < hashingDocAsli.length; j++) {
    //     if (hashingDocUji[i] === hashingDocAsli[j]) {
    //       polaYangSama.docAsli.push(hashingDocAsli[j]);
    //     }
    //   }
    // }
    tokenizingDocAsli.forEach((v0) => {
      tokenizingDocUji.forEach((v1) => {
        if (v0 === v1) {
          polaYangSama.docAsli.push(v0);
        }
      });
    });

    // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

    // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

    let A = polaYangSama.docAsli.length;
    let B = tokenizingDocAsli.length + tokenizingDocUji.length;
    let C = (A / B) * 100;
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

    dispatch({ type: "SIMILARITY", similarity: similarity });
    if (0 == similarity) {
      dispatch({
        type: "KET",
        getKet: "both documents is not similar",
      });
    } else if (2 >= similarity <= 15) {
      dispatch({
        type: "KET",
        getKet: "the document has little in common with the compared document",
      });
    } else if (15 === similarity <= 50) {
      dispatch({
        type: "KET",
        getKet:
          "the document includes a moderate level of similarity to the compared document ",
      });
    } else if (50 > similarity) {
      dispatch({
        type: "KET",
        getKet: " the document is close to similar ",
      });
    } else if (similarity === 100) {
      dispatch({
        type: "KET",
        getKet:
          "The document are the same to compared document because from the beginning to the end they have the exact same contents",
      });
    }
    console.log("ambajgfjauagsuigaigsiagiuaisugauigiugd", ket);
    let akhir = new Date().getTime();

    let end = getTime();
    const { jam, menit, detik, miliseconds } = compare(start, end);
    dispatch({
      type: "GET_INTERVAL",
      getInterval: jam() + "" + menit() + "" + detik() + "" + miliseconds(),
    });

    history.push("/hasil");
  };

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
              Home
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              Process
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-1">
        <div className=" col-md-8 shadow rounded">
          <div class="form-group">
            <label for="formGroupExampleInput">Input Text</label>
            <textarea
              type="text"
              class="form-control"
              name="input1"
              placeholder="text uji"
              onChange={handleChange.bind(this)}
            />
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Input Compared Text</label>
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
              Proceed
            </button>
          </div>
          {/* <div className="d-flex justify-content-center align-items-center mt-1">
            <div className=" col-md-8  ">
              <p style={{ color: "red" }}>
                untuk menghindari error pada perhitungan similarity jumlah kata
                pada text uji harus lebih banyak dari text penguji
              </p>
            </div>
          </div> 
          */}

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
              onClick={() => history.push("/upload-file")}
            >
              Upload a file
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default RabinKarp;
