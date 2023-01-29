import MypageNavbar from "@components/Layout/MypageNav/MypageNavbar";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import MyInfo from "./MyInfo";

const Mypage = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Navbar>
        <MypageNavbar pathname={pathname} />
      </Navbar>
      {pathname === "/mypage" ? <MyInfo /> : <Outlet />}
    </>
  );
};
export default Mypage;

const Navbar = styled.nav`
  background-color: transparent;
  color: var(--primary-color);
  display: flex;
  justify-content: center;
  padding: 1.25rem;
`;
