import { useState, useEffect } from "react";
import {
  projectStorage,
  projectFirestore,
  timeStamp,
} from "../firebase/config";

//Bu hook dosyayı Firebase'E yüklemeye yarayacak
const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("resimler");

    storageRef.put(file).on(
      "state_changed",
      (snap) => {
        let yuzdelik = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(yuzdelik);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
        const olusturulmaTarihi = timeStamp();
        collectionRef.add({
          url,
          olusturulmaTarihi,
          resimAd: file.name,
        });
      }
    );
  }, [file]);
  return { progress, error, url };
};
export default useStorage;
