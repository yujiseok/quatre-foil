import Layout from "@components/Layout";
import ScrollToTop from "@components/Layout/ScrollToTop";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Mypage from "@pages/myPage";
import Shop from "@pages/Shop";
import Signup from "@pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
