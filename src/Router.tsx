import Layout from "@components/Layout";
import Home from "@pages/Home";
import Shop from "@pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
