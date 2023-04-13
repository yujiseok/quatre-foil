import styled from "styled-components";

const Spinner = () => {
  return (
    <BackDrop>
      <StyledSpinner />
    </BackDrop>
  );
};
export default Spinner;

const StyledSpinner = styled.div`
  border: 8px solid rgba(0, 185, 0, 0.3);
  border-top: 8px rgba(0, 185, 0, 0.8) solid;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  animation: spin 2s linear infinite;
  position: relative;
  z-index: 10;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

const BackDrop = styled.div`
  background-color: rgba(128, 128, 128, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
`;
