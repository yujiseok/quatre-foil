import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import TopBtnPortal from "@components/topBtn/TopBtnPortal";
import TopBtn from "@components/topBtn/TopBtn";
import { tablet } from "@global/responsive";
import { useAppDispatch } from "app/hooks";
import { setCategory } from "features/categorySlice";
import type { MouseEvent } from "react";
import { scrollToTop } from "lib/utils/scroll";

const CATEGORY = ["ALL", "FURNITURE", "BEDROOM", "HOMEWEAR", "GARDENING"];

const Footer = () => {
  const dispatch = useAppDispatch();

  const handleClickCategory = (e: MouseEvent<HTMLAnchorElement>) => {
    dispatch(setCategory(e.currentTarget.textContent));
    scrollToTop();
  };

  return (
    <>
      <StyledFooter>
        <Container>
          <FooterTop>
            <h1>QUATRE FOIL</h1>
            <ul>
              {CATEGORY.map((item) => (
                <li key={item}>
                  <Link to="/shop" onClick={handleClickCategory}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>

            <div>
              <p>온라인 쇼핑몰 운영</p>
              <p>1644-6608</p>
              <p>09:00 - 18:00</p>
              <p>(토, 일 휴무)</p>
            </div>

            <div>
              <p>오프라인 매장 운영</p> <p>화요일 ~ 일요일</p>
              <p>09:00 - 19:00</p>
              <p>(월요일 휴무)</p>
            </div>
          </FooterTop>
          <FooterBottom>
            <div>
              <a
                href="https://github.com/cheetah-is-laughing/quatre-foil"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
            </div>
            <span>Copyright © QUATRE FOIL All rights reserved.</span>
          </FooterBottom>
        </Container>
      </StyledFooter>
      <TopBtnPortal>
        <TopBtn />
      </TopBtnPortal>
    </>
  );
};
export default Footer;

const StyledFooter = styled.footer`
  padding-top: 3rem;
  margin-top: auto;
`;

const Container = styled.div`
  padding: 0 1rem;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${tablet({
    padding: "0px 2.5rem",
    gap: "1.25rem",
  })}
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${tablet({
    flexDirection: "row",
    justifyContent: "space-between",
  })}
`;
const FooterBottom = styled.div`
  text-align: center;
  padding-bottom: 1.5rem;
`;
