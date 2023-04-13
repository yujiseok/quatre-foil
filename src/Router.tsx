import Layout from "@components/Layout";
import PrivateRouter from "@components/PrivateRouter";
import PublicRouter from "@components/PublicRouter";
import Spinner from "@components/Spinner";
import Cart from "@pages/Cart";
import Detail from "@pages/Detail";
import Home from "@pages/Home";
import Login from "@pages/Login";
import Mypage from "@pages/MyPage";
import MyAccount from "@pages/MyPage/MyAccount";
import MyInfo from "@pages/MyPage/MyInfo";
import MyOrder from "@pages/MyPage/MyOrder";
import Purchase from "@pages/Purchase";
import Shop from "@pages/Shop";
import Signup from "@pages/Signup";
import { Suspense } from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route
        index
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="/shop"
        element={
          <Suspense fallback={<Spinner />}>
            <Shop />
          </Suspense>
        }
      />
      <Route
        path="/shop/:productId"
        element={
          <Suspense fallback={<Spinner />}>
            <Detail />
          </Suspense>
        }
      />
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
      <Route path="/purchase/:productId" element={<Purchase />} />
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
    </Route>,
  ),
);

// const Router = () => {
//   return (
//     <BrowserRouter>
//       {/* <ScrollToTop /> */}
//       <Routes>
//         <Route element={<Layout />}>
//           <Route
//             index
//             path="/"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <Home />
//               </Suspense>
//             }
//           />
//           <Route path="/shop" element={<Shop />} />
//           <Route
//             path="/shop/:productId"
//             element={
//               <Suspense fallback={<Spinner />}>
//                 <Detail />
//               </Suspense>
//             }
//           />
//           <Route
//             path="/login"
//             element={
//               <PublicRouter>
//                 <Login />
//               </PublicRouter>
//             }
//           />
//           <Route
//             path="/signup"
//             element={
//               <PublicRouter>
//                 <Signup />
//               </PublicRouter>
//             }
//           />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/purchase/:productId" element={<Purchase />} />
//           <Route
//             path="/mypage"
//             element={
//               <PrivateRouter>
//                 <Mypage />
//               </PrivateRouter>
//             }
//           >
//             <Route path="order" element={<MyOrder />} />
//             <Route path="account" element={<MyAccount />} />
//             <Route path="mypage" element={<MyInfo />} />
//           </Route>
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// };
export default Router;
