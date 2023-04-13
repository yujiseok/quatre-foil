import { useAppSelector } from "app/hooks";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Aside from "./Aside";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  const { toggle } = useAppSelector((state) => state.toggleReducer);

  return (
    <>
      <NavBar />
      <AnimatePresence> {toggle ? <Aside /> : null}</AnimatePresence>
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </>
  );
};
export default Layout;
