import { AxiosError } from "axios";
import { useRouteError } from "react-router-dom";
import styled from "styled-components";

const ErrorBoundary = () => {
  const error = useRouteError();

  if (error instanceof AxiosError) {
    return <ErrorContainer>⚠️ {error?.response?.data}</ErrorContainer>;
  }

  return <div>잘못된 접근입니다</div>;
};

export default ErrorBoundary;

const ErrorContainer = styled.div`
  text-align: center;
  margin: 5rem;
  color: var(--black-40);
  font-size: x-large;
  font-weight: 900;
`;
