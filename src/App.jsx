import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ApiRequest } from "./components/Fetch";
import Header from "./components/Header";
import ListaDeCosas from "./components/ItemsList";
import TabComponent from "./components/TabComponent";
import { Watching } from "./pages/Watching";
import { Favorites } from "./pages/Favorites";
import { Later } from "./pages/Later";
import { NullPath } from "./pages/404";

function App() {
  return (
    <>
      <BrowserRouter>
        <TabComponent />
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/watching" element={<Watching />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/later" element={<Later />} />
          <Route path="/redirect" element={<Navigate to="/404" />} />
          <Route path="*" element={<NullPath />} />
        </Routes>
      </BrowserRouter>
      <Header />
      <ListaDeCosas />
      <ApiRequest />
    </>
  );
}

export default App;
