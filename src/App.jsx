import Header from "./components/Header";
import ListaDeCosas from "./components/ItemsList";
import TabComponent from "./components/TabComponent";
import Tasks from "./components/TodoList";
function App() {
  return (
    <>
      <Header />
      <TabComponent />
      <ListaDeCosas />
      {/* <Tasks /> */}
    </>
  );
}

export default App;
