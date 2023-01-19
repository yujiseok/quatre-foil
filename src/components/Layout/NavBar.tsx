import styled from "styled-components";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAppDispatch } from "app/hooks";
import { openMenu } from "features/toggleSlice";
import { tablet } from "@global/responsive";
import { HiUser } from "react-icons/hi2";
import { AiFillShopping } from "react-icons/ai";

const NavBar = () => {
  const dispatch = useAppDispatch();

  return (
    <StyledNav>
      <Container>
        <HamburgerBtn type="button" onClick={() => dispatch(openMenu())}>
          <FaBars />
        </HamburgerBtn>
        <h1>
          <Link to="/">QUATRE FOIL</Link>
        </h1>
        <MenuWrapper>
          <li>
            <Link to="/shop">
              <button type="button">shop</button>
            </Link>
          </li>
          <li>
            <Link to="/mypage">
              <button type="button">
                my page
                {/* <HiUser /> */}
              </button>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <button type="button">
                cart
                {/* <FaShoppingCart /> */}
              </button>
            </Link>
          </li>
        </MenuWrapper>
      </Container>
    </StyledNav>
  );
};
export default NavBar;

const StyledNav = styled.nav`
  width: 100%;
  height: 52px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
`;

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  ${tablet({
    padding: "0px 2rem",
  })}
`;

const MenuWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  li {
    &:hover {
      opacity: 0.8;
    }

    button {
      text-transform: uppercase;
      font-family: "Righteous", cursive;
    }

    &:nth-of-type(1),
    &:nth-of-type(2) {
      display: none;
      ${tablet({
        display: "block",
      })}
    }
  }
`;

const HamburgerBtn = styled.button`
  svg {
    font-size: 1.25rem;
  }

  ${tablet({
    display: "none",
  })}
`;
