import MypageNavbar from "@components/Layout/MypageNav/MypageNavbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <Navbar>
        <MypageNavbar />
      </Navbar>
      <Outlet />
    </>
  );
};
export default Mypage;

const Navbar = styled.section`
  display: flex;
  justify-content: center;
  padding: 1.25rem;
`;
