import { Link } from "react-router-dom";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <h2>로그인</h2>
      <InputWrapper>
        <label htmlFor="loginId">
          이메일
          <input type="email" id="loginId" />
        </label>
      </InputWrapper>
      <InputWrapper>
        <label htmlFor="loginpwd" className="title">
          비밀번호
          <input type="password" id="loginpwd" />
        </label>
      </InputWrapper>
      <PwdContainer>
        <div>비밀번호 찾기</div>
        <div>비회원 주문 조회하기</div>
      </PwdContainer>
      <BtnContainer>
        <Button type="button">로그인 하기</Button>
        <Button type="button" signup>
          <Link to="/signup">회원가입 하기</Link>
        </Button>
      </BtnContainer>
    </Container>
  );
};
export default Login;

const Container = styled.div`
  padding: 30px 16px;
  max-width: 400px;
  margin: 30px auto 0;
  h2 {
    margin-bottom: 14px;
  }
`;

const InputWrapper = styled.div`
  label {
    line-height: 2.5rem;
  }
  input {
    display: block;
    border: 1px solid var(--primary-color);
    width: 100%;
    line-height: 10px;
    padding: 10px 15px;
    color: var(--primary-color);
  }
`;

const PwdContainer = styled.div`
  display: flex;
  gap: 14px;
  line-height: 1.25rem;
  margin: 30px 0 30px;
  justify-content: center;
  letter-spacing: 0.02rem;
  a {
    cursor: pointer;
  }
`;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 0 auto;
`;

const Button = styled.button`
  margin-bottom: 10px;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: ${(props) =>
    props.signup ? "var(--primary-color)" : "inherit"};
  color: ${(props) => (props.signup ? "var(--white)" : "inherit")};
`;
