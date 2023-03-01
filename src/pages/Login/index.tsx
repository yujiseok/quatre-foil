import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import { login } from "api/auth";
import { useAppDispatch } from "app/hooks";
import { setUser } from "features/authSlice";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(4).max(16).required(),
});

const Login = () => {
  const dispatch = useAppDispatch();
  // const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FieldValues) => {
    // setIsLoading(true);
    const { email, password } = data;
    try {
      const res = await login(email, password);
      if (res.accessToken) {
        // 모달을 이용해서 유저에게 정보 알리기
        dispatch(setUser(res));
        navigate("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        toast.error(error.response?.data);
      }
    }
  };

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h2>로그인</h2>
      <InputWrapper>
        <div>
          <label htmlFor="email">이메일</label>
          <input type="text" id="email" {...register("email")} />
        </div>
        {errors.email && (
          <p>{errors.email && "이메일을 형식에 맞게 입력해주세요."}</p>
        )}
        <div>
          <label htmlFor="password">비밀번호</label>
          <input type="password" id="password" {...register("password")} />
        </div>
        {errors.password && (
          <p>{errors.password && "비밀번호를 정확히 입력해주세요"}</p>
        )}
      </InputWrapper>
      <PwdContainer>
        <div>비밀번호 찾기</div>
        <div>비회원 주문 조회하기</div>
      </PwdContainer>
      <BtnContainer>
        <Button type="submit">로그인 하기</Button>
        <Button
          type="button"
          signup
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입 하기
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
export default Login;

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

const Button = styled.button<{ signup?: boolean }>`
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
