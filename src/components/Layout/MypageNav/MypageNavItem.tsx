import styled from "styled-components";

interface Props {
  title: string;
}

const MypageNavItem = ({ title }: Props) => {
  return <NavItemList>{title}</NavItemList>;
};
export default MypageNavItem;

const NavItemList = styled.li`
  &:hover {
    text-decoration: underline;
  }
  font-size: 18px;
  font-weight: 600;
`;
