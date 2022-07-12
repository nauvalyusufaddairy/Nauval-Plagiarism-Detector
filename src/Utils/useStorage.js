import { useEffect, useState } from "react";
import { storage } from "./firebase";
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [url, setUrl] = useState(null);
  const [error, setError] = useState(null);
  const [fileName, setFileName] = useState(null);
  useEffect(() => {
    if (file !== null) {
      console.log("file ada ini dia filenya ->", file);
      setFileName(File.name);
      const ref = storage.ref(`images/${file.name}`);
      const uploadTask = ref.put(file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          let persen = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(persen);
          console.log("sedang di proses : ", persen);
        },
        (err) => {
          setError(err);
          console.log("ada error ini pesan errornya ->", err);
        },
        async () => {
          console.log("sedang menunggu di upload ...");
          let url = await ref.getDownloadURL();
          console.log("beres di upload ini link gambarnya -> ", url);

          setUrl(url);
        }
      );

      return () => {
        console.log("tugas selesai nanti dipanggil lagi klo ada task baru");
      };
    }
  }, [file]);
  return { progress, url, error, fileName };
};

export default useStorage;
