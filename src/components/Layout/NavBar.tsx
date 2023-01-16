import styled from "styled-components";
import { FaShoppingCart, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <StyledNav>
      <Container>
        <HamburgerBtn type="button">
          <FaBars />
        </HamburgerBtn>
        <h1>
          <Link to="/">QUATRE FOIL</Link>
        </h1>
        <button type="button">
          <FaShoppingCart />
        </button>
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
`;

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const HamburgerBtn = styled.button`
  svg {
    font-size: 1.25rem;
  }
`;
