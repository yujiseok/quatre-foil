import Button from "@components/Button";
import styled from "styled-components";
import { RiEditLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { editInfo, logout } from "api/auth";
import { logOutAction, editUser } from "features/authSlice";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import type { FieldValues } from "react-hook-form";

const schema = yup.object().shape({
  // email: yup.string().email().required(),
  displayName: yup.string().max(20).required(),
  oldPassword: yup.string().min(4).max(16).required(),
  newPassword: yup
    .string()
    // .oneOf([yup.ref("password"), null])
    .required(),
});
const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;

const MyInfo = () => {
  const [profile, setProfile] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  );
  const [profileImgBase64, setProfileImgBase64] = useState("");
  const auth = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const toBase64 = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setProfileImgBase64(reader.result as string);
    }
  };

  const handleLogout = async () => {
    const res = await logout();
    console.log(res.data);
    if (res.data) {
      dispatch(logOutAction());
      navigate("/");
    }
  };

  const onSubmit = async (data: FieldValues) => {
    const { displayName, oldPassword, newPassword, profileImg } = data;
    toBase64(profileImg[0]);
    const res = await editInfo(
      displayName,
      profileImgBase64,
      oldPassword,
      newPassword,
      auth.accessToken,
    );
    if (res.displayName) {
      const profileImg = res.profileImg ? res.profileImg : auth.user.profileImg;
      dispatch(editUser({ displayName: res.displayName, profileImg }));
    }
  };

  const profilePreview = watch("profileImg");
  useEffect(() => {
    if (profilePreview && profilePreview.length > 0) {
      const file: any = profilePreview[0];
      if (file.size > MAX_PROFILE_IMAGE_SIZE) {
        toast.error("1MB이하의 이미지를 추가해주세요");
        return;
      }
      setProfile(URL.createObjectURL(file));
    }
  }, [profilePreview]);

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>회원정보</h2>
      <InputWrapper>
        <ProfileWrapper>
          <label htmlFor="profile">
            <img
              src={auth.user.profileImg ? auth.user.profileImg : profile}
              // src={profile}
              alt="프로필 기본 이미지"
            />
            <EditButton />
            <input type="file" id="profile" {...register("profileImg")} />
          </label>
        </ProfileWrapper>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            type="text"
            id="email"
            placeholder={auth.user.email}
            disabled
          />
        </div>
        <div>
          <label htmlFor="email">이름</label>
          <input
            type="text"
            id="displayName"
            value={auth.user.displayName}
            {...register("displayName")}
          />
        </div>
        {errors.displayName && (
          <p>{errors.displayName && "이름은 최대 20자여야 합니다."}</p>
        )}
        <div>
          <label htmlFor="oldPassword">기존 비밀번호</label>
          <input
            type="password"
            id="oldPassword"
            {...register("oldPassword")}
          />
        </div>
        {errors.oldPassword && (
          <p>{errors.oldPassword && "비밀번호는 4~8자리여야 합니다."}</p>
        )}
        <div>
          <label htmlFor="newPassword">새 비밀번호</label>
          <input
            type="password"
            id="newPassword"
            {...register("newPassword")}
          />
        </div>
        {errors.newPassword && (
          <p>{errors.newPassword && "비밀번호가 일치하지 않습니다."}</p>
        )}
      </InputWrapper>

      {/* <SubscribeContainer>
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
      </SubscribeContainer> */}
      <BtnContainer>
        <Button primary>변경 사항 저장하기</Button>
        <Button type="button" onClick={handleLogout}>
          로그아웃
        </Button>
      </BtnContainer>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};
export default MyInfo;

const Container = styled.form`
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
  p {
    color: red;
    font-size: 10px;
    margin-top: 0.25rem;
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

// const PostalContainer = styled.div`
//   line-height: 2.5rem;
// `;

// const PostalWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   input {
//     width: 70%;
//   }
//   button {
//     border: 1px solid var(--primary-color);
//     width: 25%;
//   }
// `;

const BtnContainer = styled.div`
  max-width: 250px;
  margin: 2.5rem auto 0;
`;

// const SubscribeContainer = styled.div`
//   margin-top: 1.25rem;
//   align-items: center;
// `;

// const SubscribeWrapper = styled.div`
//   display: flex;
//   margin-top: 0.625rem;
//   gap: 1.25rem;
// `;
