import Input from "@components/Input";
import styled from "styled-components";

const MyInfo = () => {
  return (
    <Container>
      <h2>회원정보</h2>
      <InputWrapper>
        <Input id="email" type="email" label="이메일" />
        <Input id="name" type="text" label="이름" />
        <Input id="tel" type="tel" label="전화번호" />
        <PostalContainer>
          <div>우편번호</div>
          <PostalWrapper>
            <input id="postalcode" type="text" />
            <button type="button">우편 번호</button>
          </PostalWrapper>
        </PostalContainer>
      </InputWrapper>

      <SubscribeContainer>
        <div>마케팅 정보 수신 동의</div>
        <SubscribeWrapper>
          <div>
            <input type="checkbox" id="subscribe-email" />
            이메일
          </div>
          <div>
            <input type="checkbox" id="subscribe-msg" />
            문자 메세지
          </div>
        </SubscribeWrapper>
      </SubscribeContainer>
      <BtnContainer>
        <Button type="submit">변경 사항 저장하기</Button>
      </BtnContainer>
    </Container>
  );
};
export default MyInfo;

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

const PostalContainer = styled.div`
  line-height: 2.5rem;
`;

const PostalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 70%;
  }
  button {
    border: 1px solid var(--primary-color);
    /* padding: 10px 20px; */
    width: 25%;
  }
`;

const NumberWrapper = styled.div`
  display: flex;
  input {
    max-width: 100px;
  }
`;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
`;

const Button = styled.button`
  margin-bottom: 0.625rem;
  padding: 1rem 1.5rem;
  font-size: 1rem;
  font-weight: 900;
  width: 100%;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--white);
`;

const SubscribeContainer = styled.div`
  margin-top: 1.25rem;
  align-items: center;
`;

const SubscribeWrapper = styled.div`
  display: flex;
  margin-top: 0.625rem;
  gap: 1.25rem;
`;
