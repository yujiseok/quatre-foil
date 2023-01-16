import Input from "@components/Input";
import styled from "styled-components";

const Mypage = () => {
  return (
    <Container>
      <h2>회원가입</h2>
      <InputWrapper>
        <Input id="email" type="email" label="이메일" />
        <Input id="name" type="text" label="이름" />
        <Input id="text" type="text" label="주소" />
      </InputWrapper>

      <BtnContainer>
        <Button type="submit">변경 사항 저장하기</Button>
      </BtnContainer>
    </Container>
  );
};

export default Mypage;

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
const BtnContainer = styled.div`
  max-width: 250px;
  margin: 40px auto 0;
`;

const Button = styled.button`
  margin-bottom: 10px;
  padding: 16px 24px;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white);
`;
