import React, { useEffect, useState } from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useStateValue } from "../../../Utils/StateProvider";
import { useHistory } from "react-router";
import { Button } from "@mui/material";

function UploadFile() {
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
  const compares = (start, end) => {
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
  let initialState = {
    input1: null,
    input2: null,
    kgram: 0,
    mod: 113,
  };
  let init = {
    fn1: "",
    fn2: "",
  };

  //const [setData, data] = useState(initialState);
  const [data, setData] = useState(initialState);
  const [{}, dispatch] = useStateValue();
  const [fileName, setFileName] = useState(init);
  const history = useHistory();
  const compare = (a, b) => {
    if (a && b !== "") {
      return false;
    }

    return true;
  };
  useEffect(() => {});
  const cancel = () => {
    history.push("/proses");
  };
  // const rb = (docAsli, docUji, kgram, mod) => {
  //   // dispatch({
  //   //   type: "WORDS1",
  //   //   words1: docAsli,
  //   // });
  //   // dispatch({ type: "WORDS2", words2: docUji });
  //   // // variabel global
  //   // let regExp = /[\W\s]/g;
  //   // let polaYangSama = {
  //   //   docAsli: [],
  //   //   docUji: [],
  //   // };

  //   // // variabel dokumen asli
  //   // //let uji = parseWordDocxFile0(docAsli);
  //   // let normalizeDocAsli = docAsli.replace(regExp, "").toLowerCase(); // ubah kalimat tanpa spasi dan simbol non alphabetic
  //   // let panjangDocAsli = normalizeDocAsli?.length; // panjang string setelah di normalisasi
  //   // let tokenizingDocAsli = []; // untuk menyimpan token
  //   // let hashingDocAsli = []; // untuk menyimpan nilai hahsing
  //   // let nilaiHashDocAsli = 0;

  //   // // variabel dokumen uji
  //   // //let penguji = parseWordDocxFile1(docUji);
  //   // let normalizeDocUji = docUji.replace(regExp, "").toLowerCase();
  //   // let panjangDocUji = normalizeDocUji?.length;
  //   // let tokenizingDocUji = [];
  //   // let hashingDocUji = [];
  //   // let nilaiHashDocUji = 0;

  //   // // |||||||||||||||||  AWAL DOKUMEN ASLI   |||||||||||||||//

  //   // // proses tokenizing dokumen asli
  //   // for (let i = 0; i <= panjangDocAsli; i++) {
  //   //   let p = kgram + i;
  //   //   if (p === panjangDocAsli) {
  //   //     tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //   //     break;
  //   //   }
  //   //   tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //   // }

  //   // // proses hashing dokumen asli
  //   // for (let i = 0; i < tokenizingDocAsli.length; i++) {
  //   //   for (let j = 0; j <= tokenizingDocAsli[i].length; j++) {
  //   //     let ps = j;
  //   //     if (ps === tokenizingDocAsli[i].length) {
  //   //       hashingDocAsli.push(nilaiHashDocAsli);
  //   //       nilaiHashDocAsli = 0;
  //   //       break;
  //   //     }

  //   //     nilaiHashDocAsli +=
  //   //       (tokenizingDocAsli[i].charCodeAt(j) * 113) ^ (kgram - j);
  //   //   }
  //   // }

  //   // // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

  //   // // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

  //   // // proses tokenizing dokumen uji
  //   // for (let i = 0; i <= normalizeDocUji?.length; i++) {
  //   //   let p = i + kgram;
  //   //   if (p === panjangDocUji) {
  //   //     tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //   //     break;
  //   //   }
  //   //   tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //   // }
  //   // for (let i = 0; i < tokenizingDocUji.length; i++) {
  //   //   for (let j = 0; j <= tokenizingDocUji[i].length; j++) {
  //   //     if (j === tokenizingDocUji[i].length) {
  //   //       hashingDocUji.push(nilaiHashDocUji);
  //   //       nilaiHashDocUji = 0;
  //   //       break;
  //   //     }

  //   //     nilaiHashDocUji +=
  //   //       (tokenizingDocUji[i].charCodeAt(j) * 113) ^ (kgram - j);
  //   //   }
  //   // }

  //   // // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

  //   // // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

  //   // for (let i = 0; i <= hashingDocUji.length; i++) {
  //   //   for (let j = 0; j < hashingDocAsli.length; j++) {
  //   //     if (hashingDocUji[i] === hashingDocAsli[j]) {
  //   //       polaYangSama.docAsli.push(hashingDocAsli[j]);
  //   //     }
  //   //   }
  //   // }

  //   // // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

  //   // // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

  //   // let A = polaYangSama.docAsli.length;
  //   // let B = tokenizingDocAsli.length + tokenizingDocUji.length;
  //   // let C = ((A * 2) / B) * 100;
  //   // let similarity = C.toFixed(2);
  //   // if (C > 100) {
  //   //   similarity = 100;
  //   // }

  //   // // ||||||||||||||||| AKHIR PERHITUNGAN SIMILARITY  |||||||||||||||//

  //   // console.log(" ================== dokumen asli ===============");

  //   // console.log(tokenizingDocAsli);
  //   // dispatch({ type: "DOCASLI_TOKENIZING", docAsliToken: tokenizingDocAsli });
  //   // console.log(normalizeDocAsli);
  //   // console.log(hashingDocAsli);
  //   // dispatch({ type: "DOCASLI_HASHING", docAsliHashing: hashingDocAsli });
  //   // console.log("================== dokumen uji =================");
  //   // console.log(tokenizingDocUji);
  //   // dispatch({ type: "DOCUJI_TOKENIZING", docUjiToken: tokenizingDocUji });
  //   // console.log(normalizeDocUji);
  //   // console.log(hashingDocUji);
  //   // dispatch({ type: "DOCUJI_HASHING", docUjiHashing: hashingDocUji });

  //   // console.log("pola yang sama", polaYangSama);
  //   // dispatch({ type: "POLAYANGSAMA", pola: polaYangSama });
  //   // console.log("================== similarity =================");
  //   // console.log("similarity : ", similarity + "%");
  //   // dispatch({ type: "SIMILARITY", similarity: similarity });

  //   // console.log("==================== upload file ========================");

  //   // history.push("/hasil");
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
  //     // if (p === panjangDocAsli) {
  //     //   tokenizingDocAsli.push(normalizeDocAsli.substring(i, p));
  //     //   break;
  //     // }
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

  //       nilaiHashDocAsli +=
  //         (tokenizingDocAsli[i].charCodeAt(j) * 113) ^ (kgram - j);
  //     }
  //   }

  //   // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

  //   // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

  //   // proses tokenizing dokumen uji
  //   for (let i = 0; i <= normalizeDocUji.length; i++) {
  //     let p = i + kgram;
  //     // if (p === panjangDocUji) {
  //     //   tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //     //   break;
  //     // }
  //     tokenizingDocUji.push(normalizeDocUji.substring(i, p));
  //   }
  //   for (let i = 0; i < tokenizingDocUji.length; i++) {
  //     for (let j = 0; j <= tokenizingDocUji[i].length; j++) {
  //       if (j === tokenizingDocUji[i].length) {
  //         hashingDocUji.push(nilaiHashDocUji);
  //         nilaiHashDocUji = 0;
  //         break;
  //       }

  //       nilaiHashDocUji +=
  //         (tokenizingDocUji[i].charCodeAt(j) * 113) ^ (kgram - j);
  //     }
  //   }

  //   // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

  //   // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

  //   // for (let i = 0; i < hashingDocUji.length; i++) {
  //   //   for (let j = 0; j <= hashingDocAsli.length; j++) {
  //   //     if (hashingDocUji[i] === hashingDocAsli[j]) {
  //   //       polaYangSama.docAsli.push(hashingDocAsli[j]);
  //   //     }
  //   //   }
  //   // }
  //   hashingDocAsli.map((v0) => {
  //     hashingDocUji.map((v1) => {
  //       if (v0 === v1) {
  //         polaYangSama.docAsli.push(v1);
  //       }
  //     });
  //   });
  //   //  console.log("jaerks  ", jaerks);
  //   // for(let i =0; i < hashingDocAsli.length;i++)
  //   // {
  //   //   for(let j =0; j < hashingDocUji; i++)
  //   //   {
  //   //     if( hashingDocAsli[i])
  //   //     {

  //   //     }
  //   //   }
  //   // }
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
    let end = getTime();
    const { jam, menit, detik, miliseconds } = compares(start, end);
    dispatch({
      type: "GET_INTERVAL",
      getInterval: jam() + "" + menit() + "" + detik() + "" + miliseconds(),
    });

    history.push("/hasil");
  };

  function parseWordDocxFile0(inputElement) {
    let s = "";
    // var files = inputElement.files || [];
    // if (!files.length) return;
    // var file =inputElement.target.files[0]

    console.time();
    var reader = new FileReader();
    reader.onloadend = function (event) {
      var arrayBuffer = reader.result;
      // debugger

      window.mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          //result2.innerHTML = resultObject.value
          setData({ ...data, input1: resultObject.value.toString() });
        });
      console.timeEnd();
    };
    dispatch({
      type: "FILE_NAME1",
      fileName1: inputElement.target.files[0].name,
    });
    setFileName({ ...fileName, fn1: inputElement.target.files[0].name });
    reader.readAsArrayBuffer(inputElement.target.files[0]);
  }
  function parseWordDocxFile1(inputElement, cmp) {
    // var files = inputElement.files || [];
    // if (!files.length) return;
    // var file =inputElement.target.files[0]
    let s = "";

    console.time();
    var reader = new FileReader();
    reader.onloadend = function (event) {
      var arrayBuffer = reader.result;
      // debugger

      window.mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then(function (resultObject) {
          //result2.innerHTML = resultObject.value
          setData({ ...data, input2: resultObject.value.toString() });
          console.log("data1", data);
        });
      console.timeEnd();
    };
    dispatch({
      type: "FILE_NAME2",
      fileName2: inputElement.target.files[0].name,
    });
    setFileName({ ...fileName, fn2: inputElement.target.files[0].name });
    reader.readAsArrayBuffer(inputElement.target.files[0]);
    return s;
  }

  return (
    <div>
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
              Upload
            </li>
          </ol>
        </nav>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="col-md-8 shadow rounded p-4 _mt-7">
          <div className="navbar-brand">Choose a File (.docx)</div>
          <hr></hr>

          <div class="custom-file mt-2">
            <input
              type="file"
              class="custom-file-input"
              name="input1"
              onChange={parseWordDocxFile0}
            />
            <label class="custom-file-label" for="customFile">
              {fileName.fn1 ? fileName.fn1 : "browse initial file"}
            </label>
          </div>
          <div class="custom-file mb-4 mt-4">
            <input
              type="file"
              class="custom-file-input"
              name="input2"
              onChange={parseWordDocxFile1}
            />
            <label class="custom-file-label" for="customFile">
              {fileName.fn2 ? fileName.fn2 : "browse compared file "}
            </label>
          </div>
          <div className="d-flex align-items-center justify-content-center mb-4">
            <Button
              variant="contained"
              color="primary"
              className="mr-4"
              //disabled={compare(uji, penguji)}
              onClick={cancel}
            >
              {fileName.fn1 ? "cancel" : "back"}
            </Button>
            <Button
              variant="contained"
              color="primary"
              disabled={compare(fileName.fn1, fileName.fn2)}
              onClick={() => rb(data.input1, data.input2, 5)}
            >
              Process
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadFile;
