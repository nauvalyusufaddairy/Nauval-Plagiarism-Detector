import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { rtdb } from "../../../Utils/firebase";
import { useStateValue } from "../../../Utils/StateProvider";
import { useHistory } from "react-router-dom";
import "./style.css";

function Riwayat() {
  const [data, setData] = useState();
  const [{ user_id }, dispatch] = useStateValue();
  const history = useHistory();
  const lihat = (key, data) => {
    dispatch({
      type: "DOCASLI_TOKENIZING",
      docAsliToken: data[key].docAsli_token,
    });

    dispatch({
      type: "DOCASLI_HASHING",
      docAsliHashing: data[key].docAsli_hashing,
    });

    dispatch({
      type: "DOCUJI_TOKENIZING",
      docUjiToken: data[key].docUji_token,
    });

    dispatch({
      type: "DOCUJI_HASHING",
      docUjiHashing: data[key].docUji_hashing,
    });

    dispatch({ type: "POLAYANGSAMA", polaYangSama: data[key].polaYangSama });

    dispatch({ type: "SIMILARITY", similarity: data[key].similarity });
    dispatch({
      type: "FILE_NAME1",
      fileName1: data[key].file_name1,
    });
    dispatch({
      type: "FILE_NAME1",
      fileName1: data[key].file_name2,
    });
    dispatch({
      type: "WORDS1",
      words1: data[key].words1,
    });
    dispatch({ type: "WORDS2", words2: data[key].words2 });

    dispatch({
      type: "GET_INTERVAL",
      getInterval: data[key].interval,
    });
  };

  useEffect(() => {
    rtdb
      .ref("/user")
      .child(`/${user_id}`)
      .child("/history")
      .on("value", (snapshot) => {
        if (snapshot.exists()) {
          setData(snapshot.val());
        }
      });
  }, []);
  return (
    <div>
      <div className="mt-2 mb-2 col-md-12">
        <nav aria-label="breadcrumb ">
          <ol class="breadcrumb">
            <li
              class="breadcrumb-item"
              style={{ cursor: "pointer" }}
              onClick={() => history.push("/")}
            >
              Home
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              History
            </li>
          </ol>
        </nav>
      </div>

      <div className="col-md-12 col-sm-12">
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr className="col-md-2 col-sm-1 col-xs-1">
              <th>Date</th>
              <th>Document</th>
              <th>Compared Document</th>
              <th>Plagiarism Percentage</th>
              <th> Duration of Process </th>
              <th>Action</th>
              <th>Description</th>
            </tr>
          </thead>
          {data &&
            Object.keys(data).map((val) => {
              return (
                <>
                  <tbody>
                    <td>{val}</td>
                    <td>
                      {data[val].file_name1 === ""
                        ? "inputText1"
                        : data[val].file_name1}
                    </td>
                    <td>
                      {data[val].file_name2 === ""
                        ? "inputText2"
                        : data[val].file_name2}
                    </td>
                    <td>{data[val].similarity}%</td>
                    <td>{data[val].interval}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() =>
                          rtdb
                            .ref("/user")
                            .child(`/${user_id}`)
                            .child("/history")
                            .child(`/${val}`)
                            .remove((err) => {
                              alert(err);
                            })
                        }
                      >
                        delete
                      </button>
                    </td>
                    <td>
                      <div className="_card-contents">{data[val].ket}</div>
                    </td>
                  </tbody>
                </>
              );
            })}
          <tbody></tbody>
        </table>
      </div>
    </div>
  );
}

export default Riwayat;
