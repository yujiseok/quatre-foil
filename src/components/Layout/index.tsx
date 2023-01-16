import { useAppSelector } from "app/hooks";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Aside from "./Aside";
import Footer from "./Footer";
import NavBar from "./NavBar";

const Layout = () => {
  const { toggle } = useAppSelector((state) => state.toggle);

  return (
    <>
      <NavBar />
      <AnimatePresence> {toggle ? <Aside /> : null}</AnimatePresence>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
export default Layout;
