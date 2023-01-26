import { useEffect, useState } from "react";
import { IoChevronUp } from "react-icons/io5";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { scrollToTop } from "utils/scroll";

const TopBtn = () => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return (
    <AnimatePresence>
      {showButton ? (
        <StyledTopBtn
          type="button"
          onClick={scrollToTop}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
        >
          <IoChevronUp />
        </StyledTopBtn>
      ) : null}
    </AnimatePresence>
  );
};
export default TopBtn;

const StyledTopBtn = styled(motion.button)`
  background-color: var(--primary-color);
  color: var(--white);
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: fixed;
  bottom: 16px;
  right: 16px;
  padding: 0.1rem;
`;
