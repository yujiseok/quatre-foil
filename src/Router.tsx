import Layout from "@components/Layout";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Mypage from "@pages/MyPage";
import MyAccount from "@pages/MyPage/MyAccount";
import MyInfo from "@pages/MyPage/MyInfo";
import MyOrder from "@pages/MyPage/MyOrder";
import Shop from "@pages/Shop";
import Signup from "@pages/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />}>
            <Route path="order" element={<MyOrder />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="info" element={<MyInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
