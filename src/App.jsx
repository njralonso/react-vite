import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Watching } from "./pages/Watching";
import { Favorites } from "./pages/Favorites";
import { Later } from "./pages/Later";
import { NullPath } from "./pages/404";
import { AnimeRoutes } from "./pages/AnimesPage";
import { AnimeInfo } from "./pages/AnimeInfo";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";

function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/later" element={<Later />} />
          <Route path="/animes" element={<AnimeRoutes />} />
          <Route path="/anime/:name" element={<AnimeInfo />} />
          <Route path="/redirect" element={<Navigate to="/404" />} />
          <Route path="*" element={<NullPath />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
