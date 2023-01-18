import styled from "styled-components";

const Button = ({
  type,
  children,
}: {
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
}) => {
  return (
    <BtnContainer>
      <Btn type={type}>{children}</Btn>
    </BtnContainer>
  );
};
export default Button;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
`;

const Btn = styled.button`
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white);
`;
