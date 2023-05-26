import Search from "./components/Search";
import Header from "./components/Header";
import Anime from "./components/Anime";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Header />
      <Search />
      <Anime name="86 Eighty Six" />
      <Card/>
    </>
  );
}

export default App;
