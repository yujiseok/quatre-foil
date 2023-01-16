import { Link } from "react-router-dom";
import styled from "styled-components";
import Input from "@components/Input";

const Login = () => {
  return (
    <Container>
      <h2>로그인</h2>
      <InputWrapper>
        <Input id="loginId" type="email" label="이메일" />
        <Input id="loginpwd" type="password" label="비밀번호" />
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
  padding: 1.875rem 1rem;
  max-width: 400px;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
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
    padding: 0.625rem 0.9375rem;
    color: var(--primary-color);
  }
`;

const PwdContainer = styled.div`
  display: flex;
  gap: 0.875rem;
  line-height: 1.25rem;
  margin: 1.875rem 0 1.875rem;
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
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: ${(props) =>
    props.signup ? "var(--primary-color)" : "inherit"};
  color: ${(props) => (props.signup ? "var(--white)" : "inherit")};
`;
