import { tablet } from "@global/responsive";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { setCategory } from "features/categorySlice";
import useGetAllProductsQuery from "lib/hooks/useGetAllProductsQuery";
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

  const { products } = useGetAllProductsQuery(category);

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
        {products?.length ? (
          products?.map((product) => (
            <li key={product.id}>
              <StyledLink to={`${product.id}`}>
                <div className="img-wrapper">
                  <img src={product.thumbnail} alt={product.title} />
                </div>

                <div>
                  <p>{product.title}</p>
                  <p>{product.price.toLocaleString()}원</p>
                </div>
              </StyledLink>
            </li>
          ))
        ) : (
          <h2>상품이 없습니다.</h2>
        )}
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
  place-items: center;

  ${tablet({
    gridTemplateColumns: "repeat(auto-fit, minmax(10rem, 1fr))",
  })}

  div {
    text-align: center;
  }

  li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .img-wrapper {
      height: 300px;

      img {
        object-fit: contain;
      }
    }
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
