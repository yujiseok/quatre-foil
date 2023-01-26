import Input from "@components/Input";
import { type } from "os";
import React, { useMemo, useRef, useState } from "react";
import styled from "styled-components";

const Signup = () => {
  type UploadImg = {
    file: File;
    thumbnail: string;
    type: string;
  };

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageFile, setImageFile] = useState<UploadImg | null>(null);
  const handleClickFileInput = () => {
    fileInputRef.current?.click();
  };
  const uploadProfile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    // const length = fileList?.length;
    if (fileList && fileList[0]) {
      const url = URL.createObjectURL(fileList[0]);

      setImageFile({
        file: fileList[0],
        thumbnail: url,
        type: fileList[0].type.slice(0, 5),
      });
    }
    console.log("fileList", fileList);
  };

  const showImage = useMemo(() => {
    if (!imageFile && imageFile == null) {
      return (
        <img
          src="https://www.the-pr.co.kr/news/photo/202104/46684_71487_3134.jpg"
          alt="비어있는 프로필"
        />
      );
    }
    return (
      <ShowFileImg
        src={imageFile.thumbnail}
        alt={imageFile.type}
        onClick={handleClickFileInput}
      />
    );
  }, [imageFile]);
  return (
    <Container>
      <h2>회원가입</h2>
      <InputWrapper>
        <Input id="email" type="email" label="이메일" />
        <Input id="pwd" type="password" label="비밀번호" />
        <Input id="pwdcfm" type="password" label="비밀번호 확인" />
        <Input id="name" type="text" label="이름" />
      </InputWrapper>
      <ProfileContainer>
        <div>프로필</div>
        {showImage}
        <FileUploadForm>
          <FileInput
            type="file"
            id="fileUpload"
            accept=".jpg, .jpeg, .webp, .png, .gif, .svg"
            ref={fileInputRef}
            onChange={uploadProfile}
          />
          {/* <FileUploadBtn type="button" onClick={handleClickFileInput}>
            파일업로드버튼
          </FileUploadBtn> */}
        </FileUploadForm>
        {/* <ShowFileImg /> */}
      </ProfileContainer>
      <CheckContainer>
        <CheckWrapper>
          {/* <div>
            <input type="checkbox" id="all_check_agree" />
            모두 동의합니다.
          </div> */}
          <div>
            <input type="checkbox" id="all_check_agree" />
            (필수) 이용약관과 개인정보 수집 및 이용에 동의합니다.
          </div>
          <div>
            <input type="checkbox" id="all_check_agree" />
            (필수) 만 14세 이상입니다.
          </div>
          <div>
            <input type="checkbox" id="all_check_agree" />
            (선택) 이메일 및 SMS 마케팅 정보 수신에 동의합니다.
          </div>
        </CheckWrapper>
      </CheckContainer>
      <BtnContainer>
        <Button type="submit">가입하기</Button>
      </BtnContainer>
    </Container>
  );
};
export default Signup;

const Container = styled.div`
  padding: 1.875rem 1rem;
  max-width: 400px;
  margin: 1.875rem auto 0;
  h2 {
    margin-bottom: 0.875rem;
  }
`;

const ShowFileImg = styled.img``;

const ProfileContainer = styled.div`
  padding-top: 30px;
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 50%;
    border: 1px solid var(--black-30);
    margin-inline: auto;
  }
`;

const FileUploadForm = styled.form``;

const FileInput = styled.input``;

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

const CheckContainer = styled.div`
  margin-top: 1.25rem;
`;

const CheckWrapper = styled.div``;

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
