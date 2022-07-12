import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Hasil from "./TampilanBaru/Halaman/Hasil/Hasil";
import Beranda from "./TampilanBaru/Halaman/Beranda/Beranda";
import RabinKarp from "./TampilanBaru/Halaman/RabinKarp/RabinKarp";
import Navbar from "./TampilanBaru/Komponen/Navbar/Navbar";
import UploadFile from "./TampilanBaru/Halaman/UploadFile/UploadFile";
import Akun from "./TampilanBaru/Halaman/Akun/Akun";
import Daftar from "./TampilanBaru/Halaman/Akun/Daftar";
import EditAkun from "./TampilanBaru/Halaman/Akun/EditAkun";
import Login from "./TampilanBaru/Halaman/Akun/Login";
import { useEffect } from "react";
import { auth } from "./Utils/firebase";
import { useStateValue } from "./Utils/StateProvider";
import Riwayat from "./TampilanBaru/Halaman/Riwayat/Riwayat";
// import Home from "./Components/Home/Home";
// import LandingPage from "./Components/LandingPage/LandingPage";
// import Navbar from "./Components/Navbar/Navbar";
// import Hasil from "./Halaman/Hasil/Hasil";
// import UploadPage from "./Halaman/UploadPage/UploadPage";
import Bantuan from "./TampilanBaru/Halaman/Bantuan/Bantuan"
import Tentang from "./TampilanBaru/Halaman/Tentang/Tentang";

function App() {
  const [{ user_id }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({ type: "USER_ID", userId: user.uid });
      } else {
        dispatch({ type: "USER_ID", userId: null });
      }
    });

    console.log("hhahahahaha", user_id);
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/hasil">
            <Navbar />
            <Hasil />
          </Route>
          <Route exact path="/uploadPage">
            <UploadPage />
          </Route> */}
          <Route exact path="/">
            {user_id ? (
              <>
                <Navbar />
                <Beranda />
              </>
            ) : (
              <>
                <Login />
              </>
            )}
          </Route>
          <Route path={user_id ? "/proses" : "/login"}>
            <Navbar />
            <RabinKarp />
          </Route>
          <Route path={user_id ? "/riwayat-pengujian" : "/login"}>
            <Navbar />
            <Riwayat />
          </Route>
          <Route path={user_id ? "/upload-file" : "/login"}>
            <Navbar />
            <UploadFile />
          </Route>
          <Route path="/daftar">
            <Navbar />
            <Daftar />
          </Route>
          <Route path={user_id ? "/edit-akun" : "/login"}>
            <Navbar />
            <EditAkun />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/bantuan">
            <Navbar/>
            <Bantuan/>
            </Route>
          <Route path="/tentang">
            <Navbar/>
           <Tentang/>
          </Route>
          <Route path={user_id ? "/hasil" : "/login"}>
            <Hasil />
          </Route>
          <Route path={user_id ? "/akun" : "/login"}>
            <Akun />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
