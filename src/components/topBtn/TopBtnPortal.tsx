import type { ReactNode } from "react";
import { createPortal } from "react-dom";

const TopBtnPortal = ({ children }: { children: ReactNode }) => {
  const topBtnContainer = document.getElementById(
    "top-btn-container",
  ) as HTMLDivElement;

  return createPortal(children, topBtnContainer);
};
export default TopBtnPortal;
