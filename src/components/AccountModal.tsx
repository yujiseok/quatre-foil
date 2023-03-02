import { addAccount } from "api/account";
import type { ChangeEvent, MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "constants/color";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AccountModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAgree, setIsAgree] = useState(false);
  const [btnActive, setBtnActive] = useState("");
  const [accountInput, setAccountInput] = useState("");
  const [mobileInput, setMobileInput] = useState("");

  const handleSign = () => {
    setIsAgree((prev) => !prev);
  };

  // 모달 오버레이에서 스크롤 방지
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  // const schema = yup.object().shape({
  //   account: yup.string().max(12).required(),
  //     // .oneOf([yup.ref("password"), null])
  //     .required(),
  // });

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm({
  //   resolver: yupResolver(schema),
  // });

  const banks = [
    {
      name: "KB국민은행",
      code: "004",
      digits: [3, 2, 4, 3],
      disabled: false,
    },
    {
      name: "신한은행",
      code: "088",
      digits: [3, 3, 6],
      disabled: true,
    },
    {
      name: "우리은행",
      code: "020",
      digits: [4, 3, 6],
      disabled: true,
    },
    {
      name: "하나은행",
      code: "081",
      digits: [3, 6, 5],
      disabled: false,
    },
    {
      name: "케이뱅크",
      code: "089",
      digits: [3, 3, 6],
      disabled: false,
    },
    {
      name: "카카오뱅크",
      code: "090",
      digits: [4, 2, 7],
      disabled: false,
    },
    {
      name: "NH농협은행",
      code: "011",
      digits: [3, 4, 4, 2],
      disabled: false,
    },
  ];

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAccountInput(e.target.value);
  };

  const numberChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMobileInput(e.target.value);
  };

  const toggleActive = (e: MouseEvent<HTMLButtonElement>) => {
    setBtnActive(e.currentTarget.dataset.code as string);
  };

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>
          <h3>계좌 연결</h3>
          <BankLists>
            {banks.map((bank) => {
              return (
                <BankList
                  key={bank.code}
                  className={btnActive === bank.code ? "active" : ""}
                >
                  <button
                    type="button"
                    data-code={bank.code}
                    onClick={toggleActive}
                  >
                    {bank.name}
                  </button>
                </BankList>
              );
            })}
          </BankLists>
          <AddInput>
            <div>
              <label htmlFor="account">계좌번호</label>
              <input type="text" id="account" onChange={onChange} />
            </div>
            <div>
              <label htmlFor="mobile">전화번호</label>
              <input type="text" id="mobile" onChange={numberChange} />
            </div>
          </AddInput>
          <CheckWrapper htmlFor="">
            <CheckInput type="checkbox" onChange={handleSign} />
            <p>위 약관에 동의합니다</p>
          </CheckWrapper>
          <ButtonWrapper>
            <Button
              type="button"
              onClick={() => {
                addAccount(btnActive, accountInput, mobileInput, isAgree);
              }}
            >
              등록하기
            </Button>
            <Button type="button" onClick={onClose}>
              취소하기
            </Button>
          </ButtonWrapper>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 700px;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Contents = styled.div`
  margin: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  h3 {
    margin-inline: auto;
    margin-bottom: 20px;
  }
  img {
    margin-top: 60px;
    width: 300px;
  }
  input {
    border: 1px solid var(--black-40);
  }
`;
const BankLists = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
  p {
    color: var(--black-40);
    &:hover {
      cursor: pointer;
      color: var(--primary-color);
    }
  }
`;
const BankList = styled.li`
  font-size: 16px;
  font-weight: 500;
  gap: 4px;
  color: var(--black-40);
  &:hover {
    cursor: pointer;
  }
  &.active {
    color: var(--primary-color);
  }
`;

const AddInput = styled.form`
  color: ${colors.black60};
  label {
    line-height: 2rem;
  }
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  justify-content: center;
  margin-inline: auto;
  input {
    display: block;
    border: 1px solid ${colors.black60};
    width: 100%;
    /* line-height: 10px; */
    padding: 0.25rem 0.5rem;
    color: ${colors.black60};
  }
  button {
    margin-left: 10px;
    border: 1px solid var(--primary-color);
    box-sizing: border-box;
    padding: 0 4px;
    font-size: 14px;
    background-color: var(--primary-color);
    color: var(--white);
  }
`;

const CheckWrapper = styled.label`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
  p {
    color: ${colors.black70};
    font-size: 12px;
  }
`;

const CheckInput = styled.input`
  width: auto;
  margin: 0;
  font-size: 10px;
  margin-right: 4px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  gap: 10px;
`;
const Button = styled.button`
  font-size: 14px;
  padding: 4px 10px;
  border: none;
  background-color: #ababab;
  color: white;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;
export default AccountModal;
