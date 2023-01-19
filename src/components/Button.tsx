import styled from "styled-components";

const Button = ({ children }: { children: React.ReactNode }) => {
  return <Btn type="submit">{children}</Btn>;
};
export default Button;

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
