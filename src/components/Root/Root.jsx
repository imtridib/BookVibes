import NavBar from "../Navbar/NavBar";
import Footer from "../Footer/footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <div className="app-container">
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
