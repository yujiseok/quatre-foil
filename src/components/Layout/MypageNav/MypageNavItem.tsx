import styled from "styled-components";

const MypageNavItem = ({ title }) => {
  return <NavItemList>{title}</NavItemList>;
};
export default MypageNavItem;

const NavItemList = styled.li`
  &:hover {
    color: var(--black-60);
  }
`;
