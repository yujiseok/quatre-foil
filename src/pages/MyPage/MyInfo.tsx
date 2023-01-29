import Button from "@components/Button";
import styled from "styled-components";
import { RiEditLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { logout } from "api";
import { logOutAction } from "features/authSlice";
import { useNavigate } from "react-router-dom";

const MyInfo = () => {
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = async () => {
    const res = await logout(auth.accessToken);
    if (res) {
      dispatch(logOutAction());
      navigate("/");
    }
  };

  return (
    <Container>
      <h2>회원정보</h2>
      <InputWrapper>
        <ProfileWrapper>
          <img
            src={
              auth.user.profileImg ??
              "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
            }
            alt="프로필 기본 이미지"
          />
          <label htmlFor="profile">
            <EditButton />
          </label>
          <input type="file" id="profile" />
        </ProfileWrapper>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" value={auth.user.email} />
        </div>
        <div>
          <label htmlFor="email">이름</label>
          <input type="text" id="email" value={auth.user.displayName} />
        </div>
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="text" id="password" />
        </div>

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
        <Button primary>변경 사항 저장하기</Button>
        <Button onClick={handleLogout}>로그아웃</Button>
      </BtnContainer>
    </Container>
  );
};
export default MyInfo;

const Container = styled.div`
  padding: 1.875rem 1rem;
  max-width: 450px;
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

const ProfileWrapper = styled.div`
  position: relative;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid var(--black-30);
    margin-inline: auto;
  }

  input {
    display: none;
  }
`;

const EditButton = styled(RiEditLine)`
  position: absolute;
  right: 100px;
  bottom: 0;
  cursor: pointer;
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
    width: 25%;
  }
`;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
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
