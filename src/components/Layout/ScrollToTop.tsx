import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scrollToTop } from "lib/utils/scroll";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return null;
};
export default ScrollToTop;
