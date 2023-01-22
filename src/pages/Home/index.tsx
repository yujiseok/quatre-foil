import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "@components/SlickButton";
import { mobile, desktop, tablet } from "../../global/responsive";
import "@global/slick.css";
import "@global/slick-theme.css";

const Home = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    autoplay: true,
    draggable: true,
    responsive: [
      // {
      //   breakpoint: 1024,
      //   settings: {
      //     slidesToShow: 4,
      //     slidesToScroll: 4,
      //   },
      // },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const slick = true;

  return (
    <>
      <section>
        <picture>
          <source srcSet="https://www.thespruce.com/thmb/-kmScobJiRSHTYtLbEsyyXOq-cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1266719687-0dd6bcac7ede4045a7f71f0640a718ee.jpg" />
          <HeroBg
            src="https://www.thespruce.com/thmb/-kmScobJiRSHTYtLbEsyyXOq-cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1266719687-0dd6bcac7ede4045a7f71f0640a718ee.jpg"
            alt="hero-img"
          />
        </picture>
      </section>
      <Caption>
        <p>
          Lorem, ipsum.
          <br />
          Lorem, ipsum. 안녕하세요
          <br />
          Lorem, ipsum.
          <br />
        </p>
        <ShopBtn to="/shop">쇼핑하기</ShopBtn>
      </Caption>

      {/* marquee */}
      <section>
        <MarqueeContainer>
          <MarqueeWrapper>
            <p>
              Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem,
              ipsum.Marque Lorem, ipsum.🪑 Marque Lorem, ipsum.Marque Lorem,
              ipsum. Marque Lorem, ipsum.Marque Lorem, ipsum.🪑
            </p>
            <p>
              Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem,
              ipsum.Marque Lorem, ipsum.🪑 Marque Lorem, ipsum.Marque Lorem,
              ipsum. Marque Lorem, ipsum.Marque Lorem, ipsum.🪑
            </p>
          </MarqueeWrapper>
        </MarqueeContainer>
        <picture>
          <source srcSet="https://www.thespruce.com/thmb/-kmScobJiRSHTYtLbEsyyXOq-cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1266719687-0dd6bcac7ede4045a7f71f0640a718ee.jpg" />
          <HeroBg
            src="https://www.thespruce.com/thmb/-kmScobJiRSHTYtLbEsyyXOq-cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1266719687-0dd6bcac7ede4045a7f71f0640a718ee.jpg"
            alt="hero-img"
          />
        </picture>

        <MarqueeContainer>
          <MarqueeWrapper>
            <p>
              나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.🪑나랏말싸미
              듕귁에 달아 문자와로 서르 사맛디 아니할쎄.🪑나랏말싸미 듕귁에 달아
              문자와로 서르 사맛디 아니할쎄.🪑
            </p>
            <p>
              나랏말싸미 듕귁에 달아 문자와로 서르 사맛디 아니할쎄.🪑나랏말싸미
              듕귁에 달아 문자와로 서르 사맛디 아니할쎄.🪑나랏말싸미 듕귁에 달아
              문자와로 서르 사맛디 아니할쎄.🪑
            </p>
          </MarqueeWrapper>
        </MarqueeContainer>
      </section>

      {/* 상품 section */}
      <ItemSection>
        <ItemWrapper>
          <Item>
            <StyledLink to="/" slick={!slick}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={!slick}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={!slick}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={!slick}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={false}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={false}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={false}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
          <Item>
            <StyledLink to="/" slick={false}>
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </StyledLink>
          </Item>
        </ItemWrapper>
      </ItemSection>

      {/* slick section */}
      <SlickSection>
        <h2>인기 상품을 만나 보세요! 🔥</h2>

        <Slider {...settings}>
          <StyledLink to="/" slick>
            <img
              src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
              alt="test"
            />
            <TextWrap>
              <p>이름</p>
              <p>가격</p>
            </TextWrap>
          </StyledLink>
          <StyledLink to="/" slick>
            <img
              src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
              alt="test"
            />
            <TextWrap>
              <p>이름</p>
              <p>가격</p>
            </TextWrap>
          </StyledLink>
          <StyledLink to="/" slick>
            <img
              src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
              alt="test"
            />
            <TextWrap>
              <p>이름</p>
              <p>가격</p>
            </TextWrap>
          </StyledLink>
          <StyledLink to="/" slick>
            <img
              src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
              alt="test"
            />
            <TextWrap>
              <p>이름</p>
              <p>가격</p>
            </TextWrap>
          </StyledLink>
          <StyledLink to="/" slick>
            <img
              src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
              alt="test"
            />
            <TextWrap>
              <p>이름</p>
              <p>가격</p>
            </TextWrap>
          </StyledLink>
        </Slider>
      </SlickSection>
    </>
  );
};
export default Home;

const HeroBg = styled.img`
  aspect-ratio: 4/3;

  ${mobile({
    aspectRatio: "3/2",
  })}

  ${tablet({
    aspectRatio: "16/9",
  })} /* ${desktop({
    aspectRatio: "2.75/1",
  })} */
`;

const Caption = styled.section`
  text-align: center;
  padding: 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid var(--primary-color);
`;

const ShopBtn = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
`;

const marquee = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

// marquee 해결하기
const MarqueeContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
`;

const MarqueeWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: ${marquee} 15s linear infinite forwards;
  padding: 1rem;
  &:hover {
    animation-play-state: paused;
  }

  p {
    display: inline-block;
  }
`;

const ItemSection = styled.section`
  border-bottom: 1px solid;
`;

const ItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 2px solid;

  ${tablet({
    gridTemplateColumns: "repeat(4,1fr)",
  })}
`;

const ItemName = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: grid;
  place-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  opacity: 0;
`;

const Item = styled.li`
  /* border-right: 1px solid; */
  border-bottom: 1px solid;
  position: relative;

  &:nth-of-type(odd) {
    border-left: 2px solid;

    ${tablet({
      borderLeft: "1px solid",
    })}
  }

  &:nth-of-type(even) {
    border-left: 1px solid;
    border-right: 2px solid;
    ${tablet({
      borderRight: "none",
    })}

    &:nth-of-type(4),
    &:nth-of-type(8) {
      ${tablet({
        borderRight: "1px solid",
      })}
    }

    &:nth-of-type(1),
    &:nth-of-type(6) {
      ${tablet({
        borderLeft: "1px solid",
      })}
    }
  }

  a {
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${ItemName}:hover {
    opacity: 1;
  }
`;

const StyledLink = styled(Link)<{ slick: boolean }>`
  /* display: block; */
  /* height: ${({ slick }) => (slick ? "75vh" : "300px")}; */
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  flex-direction: column;
  position: relative;

  img {
    height: ${({ slick }) => (slick ? "400px" : "100%")};
    width: ${({ slick }) => (slick ? "300px" : "100%")};
  }
`;

const SlickSection = styled.section`
  padding: 5rem 1.5rem 2rem;
`;

const TextWrap = styled.div`
  position: absolute;
  bottom: 0;
`;
