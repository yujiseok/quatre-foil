import { useAppDispatch, useAppSelector } from "app/hooks";
import styled from "styled-components";
import { closeMenu } from "features/toggleSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoClose, IoChevronDown } from "react-icons/io5";
import type { MouseEvent } from "react";
import { useEffect, useState } from "react";
import { mobile, tablet } from "@global/responsive";
import { setCategory } from "features/categorySlice";
import { scrollToTop } from "lib/utils/scroll";

interface IBtn {
  isOpen: boolean;
}
const CATEGORY = ["ALL", "FURNITURE", "BEDROOM", "HOMEWEAR", "GARDENING"];

const Aside = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { accessToken } = useAppSelector((state) => state.auth);

  const handleClick = () => setIsOpen((prev) => !prev);

  const handleClickCategory = (e: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setCategory(e.currentTarget.textContent));
    dispatch(closeMenu());
    scrollToTop();
  };
  const handleResize = () => {
    if (window.innerWidth > 768) {
      dispatch(closeMenu());
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
      <StyledAside
        initial={{
          x: "-100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "-100%",
          transition: { duration: 0.5 },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.9 }}
      >
        <nav>
          <TitleWrapper>
            <h1>QUATRE FOIL</h1>
            <button type="button" onClick={() => dispatch(closeMenu())}>
              <IoClose />
            </button>
          </TitleWrapper>
          <MenuWrapper>
            <li>
              <ShopDropdown>
                <button type="button" onClick={() => dispatch(closeMenu())}>
                  <Link to="/shop">shop</Link>
                </button>
                <DropdownBtn
                  type="button"
                  isOpen={isOpen}
                  onClick={handleClick}
                >
                  <IoChevronDown />
                </DropdownBtn>
              </ShopDropdown>

              {isOpen ? (
                <DropdownMenu>
                  {CATEGORY.map((item) => (
                    <li key={item}>
                      <Link to="/shop" onClick={handleClickCategory}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </DropdownMenu>
              ) : null}
            </li>
            <li>
              <button type="button" onClick={() => dispatch(closeMenu())}>
                <Link to="/cart">cart</Link>
              </button>
            </li>
            <li>
              <button type="button" onClick={() => dispatch(closeMenu())}>
                {accessToken ? (
                  <Link to="/mypage">my page</Link>
                ) : (
                  <Link to="/login">login</Link>
                )}
              </button>
            </li>
          </MenuWrapper>
        </nav>
      </StyledAside>
      <Backdrop
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={() => dispatch(closeMenu())}
      />
    </>
  );
};
export default Aside;

const StyledAside = styled(motion.aside)`
  background-color: var(--primary-color);
  width: 80vw;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 1.5rem;

  ${mobile({
    width: "70vw",
  })}
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  height: 52px;

  h1 {
    font-size: 1.75rem;
  }
`;

const MenuWrapper = styled.ul`
  font-family: "Righteous", cursive;
  font-size: 1.25rem;
  text-transform: uppercase;

  li {
    padding-top: 0.25rem;
  }

  button {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    text-transform: uppercase;
  }
`;

const ShopDropdown = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
  align-items: center;
`;

const DropdownBtn = styled(motion.button)<IBtn>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(360deg)")};
  transition: transform 0.3s;
`;

const DropdownMenu = styled.ul`
  padding-left: 0.75rem;
  font-size: 1rem;
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
  /* ${tablet({
    display: "none",
  })} */
`;
