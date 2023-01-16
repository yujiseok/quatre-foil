import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { desktop } from "../../global/responsive";

const Home = () => {
  return (
    <>
      <section>
        <picture>
          <source srcSet="https://www.thespruce.com/thmb/-kmScobJiRSHTYtLbEsyyXOq-cM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1266719687-0dd6bcac7ede4045a7f71f0640a718ee.jpg" />
          <img
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
        <MarqueeWrapper>
          <div>
            Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem, ipsum.Marque
            Lorem, ipsum.🪑
          </div>
          <div>
            Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem, ipsum.Marque
            Lorem, ipsum.🪑
          </div>
          <div>
            Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem, ipsum.Marque
            Lorem, ipsum.🪑
          </div>
        </MarqueeWrapper>
        <MarqueeWrapper>
          <div>
            Marque Lorem, ipsum.Marque Lorem, ipsum. Marque Lorem, ipsum.Marque
            Lorem, ipsum.
          </div>
        </MarqueeWrapper>
      </section>

      {/* 상품 section */}
      <ItemSection>
        <ItemWrapper>
          <Item>
            <Link to="/">
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </Link>
          </Item>
          <Item>
            <Link to="/">
              <img
                src="https://en.gata.co.kr/web/product/medium/202211/2c6fd870e48f45d7f3e80df832cafb13.jpg"
                alt="test"
              />
              <ItemName>
                <p>이름</p>
              </ItemName>
            </Link>
          </Item>
        </ItemWrapper>
      </ItemSection>

      {/* slick section */}
      <section />
    </>
  );
};
export default Home;

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
const MarqueeWrapper = styled.div`
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
  overflow: hidden;
  display: inline-block;
  animation: ${marquee} 6s linear infinite;
  padding: 1rem;

  div {
    display: inline-block;
    min-width: 100%;
  }
  &:hover {
    animation-play-state: paused;
  }
`;

const ItemSection = styled.section`
  border-bottom: 1px solid;
`;

const ItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  border-top: 2px solid;
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
  }

  &:nth-of-type(even) {
    border-left: 1px solid;
    border-right: 2px solid;
  }

  a {
    display: block;
    height: 300px;
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
