import { Outlet } from "react-router-dom";
import Header from "./components/Header"

function App() {
  return (

    <div className="App container">
      <Header />
      <Outlet/>
    </div>
  );
}

export default App;
