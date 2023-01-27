import Input from "@components/Input";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import type { FieldValues } from "react-hook-form";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormValue {
  profileImg: string;
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const schema = yup.object().shape({
  email: yup.string().email().required(),
  displayName: yup.string().max(20).required(),
  password: yup.string().min(4).max(16).required(),
  password2: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();

    if (file) {
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
      reader.onerror = (error) => reject(error);
    }
  });

const Signup = () => {
  const [profile, setProfile] = useState<string>(
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const profilePreview = watch("profileImg");

  const onSubmit = async (data: FieldValues) => {
    const { displayName, email, password, profileImg } = data;
    const profileImgBase64 = await toBase64(profileImg[0]);
  };

  useEffect(() => {
    if (profilePreview && profilePreview.length > 0) {
      const file: any = profilePreview[0];
      if (file.size > MAX_PROFILE_IMAGE_SIZE) {
        alert(" 1MB이하의 이미지를 추가해주세요🐆");
        return;
      }
      setProfile(URL.createObjectURL(file));
    }
  }, [profilePreview]);

  const MAX_PROFILE_IMAGE_SIZE = 1024 * 1024;

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>회원가입</h2>
      <ProfileContainer>
        <div>프로필 사진 설정</div>
        <FileUploadContainer>
          <label htmlFor="profileImgBase64">
            <img src={profile} alt="" />
          </label>
          <input
            type="file"
            // onChange={onChange}
            id="profileImgBase64"
            {...register("profileImg")}
          />
        </FileUploadContainer>
      </ProfileContainer>
      <InputWrapper>
        <div>
          <label htmlFor="email">이메일 *</label>
          <input type="text" id="email" {...register("email")} />
        </div>
        {errors.email && (
          <p>{errors.email && "이메일을 형식에 맞게 입력해주세요."}</p>
        )}
        <div>
          <label htmlFor="displayName">이름 *</label>
          <input type="text" id="displayName" {...register("displayName")} />
        </div>
        {errors.displayName && (
          <p>{errors.displayName && "이름은 최대 20자여야 합니다."}</p>
        )}
        <div>
          <label htmlFor="password">비밀번호 *</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        {errors.password && (
          <p>{errors.password && "비밀번호는 4~8자리여야 합니다."}</p>
        )}
        <div>
          <label htmlFor="password2">비밀번호 확인 *</label>
          <input type="password" id="password2" {...register("password2")} />
        </div>
        {errors.password2 && (
          <p>{errors.password2 && "비밀번호가 일치하지 않습니다."}</p>
        )}
      </InputWrapper>
      <BtnContainer>
        <Button type="submit">가입하기</Button>
      </BtnContainer>
    </Container>
  );
};
export default Signup;

const Container = styled.form`
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
  p {
    color: red;
    font-size: 10px;
    margin-top: 0.25rem;
  }
`;

const ProfileContainer = styled.div`
  padding-top: 1.875rem;
  img {
    width: 150px;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid var(--black-30);
    margin-inline: auto;
    padding: 0.25rem;
  }
`;

const FileUploadContainer = styled.div`
  button {
    border: 1px solid;
  }
  #profileImgBase64 {
    display: none;
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
