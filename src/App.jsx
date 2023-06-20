import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Watching } from "./pages/Watching";
import { Favorites } from "./pages/Favorites";
import { Later } from "./pages/Later";
import { NullPath } from "./pages/404";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { AnimeProfileInformation } from "./pages/AnimeInfo";

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
               <Route path="/anime/:name" element={<AnimeProfileInformation />} />
               <Route path="/redirect" element={<Navigate to="/404" />} />
               <Route path="*" element={<NullPath />} />
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
