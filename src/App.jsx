import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApiRequest } from "./components/Fetch";
import HeaderAnime from "./components/Header";
import ListaDeCosas from "./components/ItemsList";
import TabComponent from "./components/TabComponent";
import { Watching } from "./pages/Watching";
import { Favorites } from "./pages/Favorites";
import { Later } from "./pages/Later";
import { NullPath } from "./pages/404";
import { AnimeRoutes } from "./pages/AnimesPage";
import { AnimeInfo } from "./pages/AnimeInfo";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <TabComponent /> */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/later" element={<Later />} />
          <Route path="/animes" element={<AnimeRoutes />} />
          <Route path="/animes/:name" element={<AnimeInfo />} />
          <Route path="/redirect" element={<Navigate to="/404" />} />
          <Route path="*" element={<NullPath />} />
        </Routes>
      </BrowserRouter>
      {/* <HeaderAnime />
      <ListaDeCosas />
      <ApiRequest /> */}
    </>
  );
}

export default App;
