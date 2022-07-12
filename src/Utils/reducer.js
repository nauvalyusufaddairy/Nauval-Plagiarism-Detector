import React from "react";
import { StateContext } from "./StateProvider";

export const initialState = {
  docAsli_token: [],
  docAsli_hashing: [],
  docUji_token: [],
  docUji_hashing: [],
  polaYangSama: [],
  nav_state: "",
  words1: "",
  words2: "",
  file_name1: "",
  file_name2: "",
  interval: "",
  similarity: 0,
  user_id: "",
  ket:""
};

export const reducer = (state, action) => {
  console.log("state", state);
  switch (action.type) {
    case "DOCASLI_TOKENIZING":
      return {
        ...state,
        docAsli_token: action.docAsliToken,
      };

    case "DOCASLI_HASHING":
      return {
        ...state,
        docAsli_hashing: action.docAsliHashing,
      };
    case "DOCUJI_TOKENIZING":
      return {
        ...state,
        docUji_token: action.docUjiToken,
      };
    case "DOCUJI_HASHING":
      return {
        ...state,
        docUji_hashing: action.docUjiHashing,
      };
    case "POLAYANGSAMA":
      return {
        ...state,
        polaYangSama: action.pola,
      };
    case "SIMILARITY":
      return {
        ...state,
        similarity: action.similarity,
      };
    case "NAV_STATE":
      return {
        ...state,
        nav_state: action.navState,
      };

    case "WORDS1":
      return {
        ...state,
        words1: action.words1,
      };
    case "WORDS2":
      return {
        ...state,
        words2: action.words2,
      };
    case "FILE_NAME1":
      return {
        ...state,
        file_name1: action.fileName1,
      };

    case "FILE_NAME2":
      return {
        ...state,
        file_name2: action.fileName2,
      };
    case "GET_INTERVAL":
      return {
        ...state,
        interval: action.getInterval,
      };
    case "USER_ID":
      return {
        ...state,
        user_id: action.userId,
      };
      case "KET":
        return{
          ...state,
          ket : action.getKet
        }
    default:
  }
};
