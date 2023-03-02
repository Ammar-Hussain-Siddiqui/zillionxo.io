import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeComponent from "../../Screen/HomeComponent";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import Stack from "../Stack";

function Router() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeComponent/>} />
          <Route path="/home" element={<HomeComponent/>} />
          <Route path='/stack' element={<Stack/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default Router;
