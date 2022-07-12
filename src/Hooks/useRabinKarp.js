import React from "react";

function useRabinKarp(docAsli, docUji, kgram) {
 function callback()
  {
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
    /*
     misal kgram = 5 
     kata : ahahaha
     panjang kata : 7
     hashing: 0

     hitung berulang
     for (kata  < panjang kata)
     {
      hashing += kata[panjang kata]*kode_ascii
     }
    */
    
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
        console.log("break");
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
          ((tokenizingDocAsli[i].charCodeAt(j) * kgram) ^ (kgram - j)) % 113;
      }
    }

    // |||||||||||||||||  AKHIR DOKUMEN ASLI   |||||||||||||||//

    // |||||||||||||||||  AWAL DOKUMEN UJI   |||||||||||||||//

    // proses tokenizing dokumen uji
    for (let i = 0; i < normalizeDocUji.length; i++) {
      let p = i + kgram;
      if (p === panjangDocUji) {
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
          ((tokenizingDocUji[i].charCodeAt(j) * kgram) ^ (kgram - j)) % 113;
      }
    }

    // ||||||||||||||||| AKHIR DOKUMEN UJI  |||||||||||||||//

    // ||||||||||||||||| AWAL STRING MATCHING |||||||||||||||//

    for (let i = 0; i < hashingDocAsli.length; i++) {
      for (let j = 0; j < hashingDocUji.length; j++) {
        if (hashingDocAsli[i] === hashingDocUji[j]) {
          polaYangSama.push(
            `Dokumen asli posisi ke : ${i} nilai : ${tokenizingDocAsli[i]} (${hashingDocAsli[i]})- Dokumen uji posisi ke : ${j} nilai : ${tokenizingDocUji[j]} (${hashingDocUji[j]})`
          );
        }
      }
    }

    // ||||||||||||||||| AKHIR STRING MATCHING  |||||||||||||||//

    // ||||||||||||||||| AWAL PERHITUNGAN SIMILARITY  |||||||||||||||//

    let A = 2 * polaYangSama.length;
    let B = tokenizingDocAsli.length + tokenizingDocUji.length;
    let C = (A / B) * 100;
    let similarity = C.toFixed(2);
    // ||||||||||||||||| AKHIR PERHITUNGAN SIMILARITY  |||||||||||||||//

    console.log(" ================== dokumen asli ===============");
    console.log(tokenizingDocAsli);
    console.log(normalizeDocAsli);
    console.log(hashingDocAsli);
    console.log("================== dokumen uji =================");
    console.log(tokenizingDocUji);
    console.log(normalizeDocUji);
    console.log(hashingDocUji);
    console.log("pola yang sama", polaYangSama);
    console.log("================== similarity =================");
    console.log("similarity : ", similarity + "%");
  }
}

export default useRabinKarp;
