import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Slider from "react-slick";
import { SlickArrowLeft, SlickArrowRight } from "@components/SlickButton";
import "@global/slick.css";
import "@global/slick-theme.css";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "api/product";
import { mobile, tablet } from "../../global/responsive";

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

const Home = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  console.log(products);

  return (
    <>
      <HeroSection>
        <picture>
          <source srcSet="https://images.adsttc.com/media/images/5eb5/a567/b357/65bd/2b00/06b1/large_jpg/1.jpg?1588962659" />
          <HeroBg
            src="https://images.adsttc.com/media/images/5eb5/a567/b357/65bd/2b00/06b1/large_jpg/1.jpg?1588962659"
            alt="hero-img"
          />
        </picture>
        <Caption>
          <p>
            안녕하세요.
            <br />
            라이프스타일 편집샵
            <br />
            QUATRE FOIL입니다.
            <br />
          </p>
          <ShopBtn to="/shop">쇼핑하기</ShopBtn>
        </Caption>
      </HeroSection>

      {/* marquee */}
      <section>
        <MarqueeContainer>
          <MarqueeWrapper>
            <p>QUATRE FOIL의 인기 상품을 만나보세요 🪑 </p>
            <p>
              Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem,
              ipsum.Marque Lorem, ipsum.🪑 Marque Lorem, ipsum.Marque Lorem,
              ipsum. Marque Lorem, ipsum.Marque Lorem, ipsum.🪑
            </p>
          </MarqueeWrapper>
        </MarqueeContainer>
        <Picture>
          <source srcSet="https://pbs.twimg.com/media/D1dPc6rWkAE57dJ.jpg" />
          <HeroBg
            src="https://pbs.twimg.com/media/D1dPc6rWkAE57dJ.jpg"
            alt="hero-img"
          />
        </Picture>

        <MarqueeContainer>
          <MarqueeWrapper>
            <p>QUATRE FOIL의 인기 상품을 만나보세요 🪑 </p>
            <p>QUATRE FOIL의 최신 상품을 만나보세요 🛏️ </p>

            <p>
              Infinite Marquee with long sentence Infinite Marquee with long
              sentence Infinite Marquee with long sentence Infinite Marquee with
              long sentence Infinite Marquee with long sentence Infinite Marquee
              with long sentence Infinite Marquee with long sentence Infinite
              Marquee with long sentence Infinite Marquee with long sentence
              Infinite Marquee with long sentence
            </p>
          </MarqueeWrapper>
        </MarqueeContainer>
      </section>

      {/* 상품 section */}
      <ItemSection>
        <ItemWrapper>
          {!isLoading &&
            products?.slice(0, 9).map((product) => (
              <Item key={product.id}>
                <StyledLink to={`/shop/${product.id}`} slick="">
                  <img src={product.thumbnail!} alt={product.title} />
                  <ItemName>
                    <p>{product.title}</p>
                  </ItemName>
                </StyledLink>
              </Item>
            ))}
        </ItemWrapper>
      </ItemSection>

      {/* slick section */}
      <SlickSection>
        <h2>인기 상품을 만나 보세요! 🔥</h2>

        <Slider {...settings}>
          {!isLoading &&
            products?.map((product) => (
              <StyledLink
                key={product.id}
                to={`/shop/${product.id}`}
                slick="slick"
              >
                <img src={product.thumbnail!} alt={product.title} />
                <TextWrap>
                  <p>{product.title}</p>
                  <p>{product.price.toLocaleString()} 원</p>
                </TextWrap>
              </StyledLink>
            ))}
        </Slider>
      </SlickSection>
    </>
  );
};
export default Home;

const HeroSection = styled.section`
  ${tablet({
    display: "flex",
  })}

  picture {
    ${tablet({
      flex: 1,
      borderBottom: "2px solid var(--primary-color)",
      height: "690px",
    })}
  }

  img {
    object-fit: cover;
  }
`;

const HeroBg = styled.img`
  aspect-ratio: 4/3;
  object-fit: cover;

  ${mobile({
    aspectRatio: "3/2",
  })}

  ${tablet({
    aspectRatio: "16/9",
  })}
`;

const Caption = styled.div`
  text-align: center;
  flex-shrink: 0;
  flex: 1;
  padding: 2rem 0;
  font-size: 1.5rem;
  font-weight: 600;
  border-bottom: 2px solid var(--primary-color);

  ${tablet({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const ShopBtn = styled(Link)`
  display: inline-block;
  margin-top: 1.5rem;
  background-color: var(--primary-color);
  color: var(--white);
  padding: 0.75rem 1.25rem;
  font-size: 1.25rem;
`;

const Picture = styled.picture`
  display: block;
  ${tablet({
    height: "640px",
  })}
`;

const marquee = keyframes`
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
`;

const MarqueeContainer = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const MarqueeWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  will-change: transform;
  animation: ${marquee} 30s linear infinite;
  padding: 1rem;
  &:hover {
    animation-play-state: paused;
  }

  p {
    display: inline-block;
    margin-left: 0.5rem;
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
  border-bottom: 1px solid;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

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

const StyledLink = styled(Link)<{ slick: string }>`
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
