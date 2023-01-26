import { tablet } from "@global/responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setCategory } from "features/categorySlice";
import type { MouseEvent } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CATEGORY = ["ALL", "FURNITURE", "BEDROOM", "HOMEWEAR", "GARDENING"];

const Shop = () => {
  const { category } = useAppSelector((state) => state.categoryReducer);
  const dispatch = useAppDispatch();

  const onClick = (e: MouseEvent<HTMLButtonElement>) => {
    dispatch(setCategory(e.currentTarget.textContent as string));
  };

  return (
    <Section>
      <h1>콰트레 포일 상품 🛌</h1>

      <CategoryWrapper>
        {CATEGORY.map((item) => (
          <li key={item}>
            <Category
              type="button"
              onClick={onClick}
              className={item === category ? "active" : ""}
            >
              {item}
            </Category>
          </li>
        ))}
      </CategoryWrapper>
      <ItemWrapper>
        <li>
          <StyledLink to="/shop/abc">
            <img
              src="https://contents.sixshop.com/thumbnails/uploadedFiles/181086/product/image_1635159135938_1000.png"
              alt=""
              srcSet=""
            />

            <div>
              <p>이름</p>
              <p>설명</p>
              <p>가격</p>
            </div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/shop/abc">
            <img
              src="http://blesswebshop.com/1108-2574-large/n69-lost-in-contemplation-variation-bedsheets-saturnia.jpg"
              alt=""
              srcSet=""
            />

            <div>
              <p>이름</p>
              <p>설명</p>
              <p>가격</p>
            </div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/shop/abc">
            <img
              src="https://contents.sixshop.com/thumbnails/uploadedFiles/181086/product/image_1635159135938_1000.png"
              alt=""
              srcSet=""
            />

            <div>
              <p>이름</p>
              <p>설명</p>
              <p>가격</p>
            </div>
          </StyledLink>
        </li>
        <li>
          <StyledLink to="/shop/abc">
            <img
              src="http://blesswebshop.com/1108-2574-large/n69-lost-in-contemplation-variation-bedsheets-saturnia.jpg"
              alt=""
              srcSet=""
            />

            <div>
              <p>이름</p>
              <p>설명</p>
              <p>가격</p>
            </div>
          </StyledLink>
        </li>
      </ItemWrapper>
    </Section>
  );
};
export default Shop;

const Section = styled.section`
  padding: 4rem 1.5rem 0;

  h1 {
    text-align: center;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

const CategoryWrapper = styled.ul`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  align-items: center;
`;

const Category = styled.button`
  border: 1px solid;
  padding: 0.25rem 0.5rem;
  border-radius: 14px;

  &.active {
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

const ItemWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  gap: 0.25rem;
  margin: 1rem 0;

  ${tablet({
    gridTemplateColumns: "repeat(4,1fr)",
  })}

  div {
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  display: block;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;
