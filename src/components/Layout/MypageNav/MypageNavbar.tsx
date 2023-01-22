import { Link } from "react-router-dom";
import styled from "styled-components";
import MypageNavItem from "./MypageNavItem";

const MypageNavbar = () => {
  return (
    <Navbar>
      <Link to="/mypage/order">
        <MypageNavItem title="주문 내역" />
      </Link>
      <Link to="/mypage/account">
        <MypageNavItem title="계좌 관리" />
      </Link>
      <Link to="/mypage/info">
        <MypageNavItem title="개인 정보 수정" />
      </Link>
    </Navbar>
  );
};
export default MypageNavbar;

const Navbar = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-inline: auto;
`;
