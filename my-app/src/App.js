import "./App.css";
import "./styles/Detail.css";
import '~@fortawesome/fontawesome-free/css/fontawesome.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Dulich from "./pages/Dulich";
import Home from "./pages/Home";
import News from "./pages/News";
import Layout from "./pages/Layout";

import Thethao from "./pages/Thethao";
// import CongNghe from "./pages/CongNghe";
import AmThuc from "./pages/AmThuc";
import VanHoa from "./pages/VanHoa";
// import DoiSongVanHoa from "./pages/DoiSongVanHoa";
// import DuLich from "./pages/DoiSongVanHoa";
 import ChuyenTheThao from "./pages/ChuyenTheThao";
 import TheThao24h from "./pages/TheThao24h";
import OtoXeMay from "./pages/OtoXeMay";
// import KhoaHocDoiSong from "./pages/KhoaHocDoiSong";
// import Search from "./pages/Search";
// import Recent from "./pages/Recent";
// import Saved from "./pages/Saved";

function App() {
  return (
      <div className="App">
        <Routes>
          <Route element={<Layout></Layout>}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            {<Route path="/van-hoa" element={<VanHoa />}></Route>}
            {/*<Route path="/the-thao" element={<TheThao />}></Route>*/}
            {/*<Route path="/cong-nghe" element={<CongNghe />}></Route>*/}
            {<Route path="/am-thuc" element={<AmThuc />}></Route>}
            {/*<Route*/}
            {/*    path="/doi-song-van-hoa"*/}
            {/*    element={<DoiSongVanHoa />}*/}
            {/*></Route>*/}
            {/*<Route*/}
            {/*    // path="/giai-tri-sao"*/}
            {/*    // element={<DuLich />}*/}
          {/*  ></Route>*/}
          {  <Route path="/chuyen-the-thao" element={<ChuyenTheThao />}></Route>}
          {/*  <Route path="/the-thao-24h" element={<TheThao24h />}></Route>*/}
          {  <Route path="/o-to-xe-may" element={<OtoXeMay />}></Route>}
          {/*  <Route path="/khoa-hoc-doi-song" element={<KhoaHocDoiSong />}></Route>*/}
          {/*  <Route path="/search" element={<Search />}></Route>*/}
          {/*  <Route path="/tin-da-xem" element={<Recent />}></Route>*/}
          {/*  <Route path="/tin-da-luu" element={<Saved />}></Route>*/}
          {  <Route path="/news/:newsId" element={<News />}></Route>}
          </Route>
        </Routes>
      </div>
  );
}

export default App;
