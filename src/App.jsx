import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
       <div className="max-w-screen-xl mx-auto">
       <Outlet/>
       </div>
    </>
  );
};

export default App;