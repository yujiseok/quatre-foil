import type { ReactNode } from "react";
import { createPortal } from "react-dom";

const TopBtnPortal = ({ children }: { children: ReactNode }) => {
  const modalContainer = document.getElementById(
    "top-btn-container",
  ) as HTMLDivElement;

  return createPortal(children, modalContainer);
};
export default TopBtnPortal;
