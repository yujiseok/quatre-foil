import Layout from "@components/Layout";
import ScrollToTop from "@components/Layout/ScrollToTop";
import PrivateRouter from "@components/PrivateRouter";
import PublicRouter from "@components/PublicRouter";
import Cart from "@pages/Cart";
import Detail from "@pages/Detail";
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
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Detail />} />
          <Route
            path="/login"
            element={
              <PublicRouter>
                <Login />
              </PublicRouter>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRouter>
                <Signup />
              </PublicRouter>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/mypage"
            element={
              <PrivateRouter>
                <Mypage />
              </PrivateRouter>
            }
          >
            <Route path="order" element={<MyOrder />} />
            <Route path="account" element={<MyAccount />} />
            <Route path="mypage" element={<MyInfo />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
