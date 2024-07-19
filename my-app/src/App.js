import "./App.css";
import "./styles/Detail.css";
import '~@fortawesome/fontawesome-free/css/fontawesome.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Dulich from "./pages/Dulich";
import Home from "./pages/Home";
// import News from "./pages/News";
import Layout from "./pages/Layout";
// import Thethao from "./pages/Thethao";
// import CongNghe from "./pages/CongNghe";
// import AmThuc from "./pages/AmThuc";
// import DoiSongVanHoa from "./pages/DoiSongVanHoa";
// import DuLich from "./pages/DoiSongVanHoa";
// import ChuyenTheThao from "./pages/ChuyenTheThao";
// import TheThao24h from "./pages/TheThao24h";
// import OtoXeMay from "./pages/OtoXeMay";
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
            {/*<Route path="/du-lich" element={<Dulich />}></Route>*/}
            {/*<Route path="/the-thao" element={<Thethao />}></Route>*/}
            {/*<Route path="/cong-nghe" element={<CongNghe />}></Route>*/}
            {/*<Route path="/kham-pha" element={<KhamPha />}></Route>*/}
            {/*<Route*/}
            {/*    path="/cau-chuyen-du-lich"*/}
            {/*    element={<CauChuyenDuLich />}*/}
            {/*></Route>*/}
            {/*<Route*/}
            {/*    // path="/choi-gi-an-dau-di-the-nao"*/}
            {/*    // element={<BatDongSanDuLich />}*/}
          {/*  ></Route>*/}
          {/*  <Route path="/sea-games-32" element={<SeaGame32 />}></Route>*/}
          {/*  <Route path="/bong-ro" element={<BongRo />}></Route>*/}
          {/*  <Route path="/the-thao-khac" element={<TheThaoKhac />}></Route>*/}
          {/*  <Route path="/san-pham" element={<SanPhamCN />}></Route>*/}
          {/*  <Route path="/esports" element={<Esports />}></Route>*/}
          {/*  <Route path="/blockchain" element={<Blockchain />}></Route>*/}
          {/*  <Route path="/search" element={<Search />}></Route>*/}
          {/*  <Route path="/tin-da-xem" element={<Recent />}></Route>*/}
          {/*  <Route path="/tin-da-luu" element={<Saved />}></Route>*/}
          {/*  <Route path="/news/:newsId" element={<News />}></Route>*/}
          </Route>
        </Routes>
      </div>
  );
}

export default App;
