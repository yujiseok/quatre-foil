import { addAccount } from "api";
import { calcLength } from "framer-motion";
import type { MouseEvent } from "react";
import { useRef, useState } from "react";
import styled from "styled-components";

const AccountModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAgree, setIsAgree] = useState(false);
  const handleSign = () => {
    setIsAgree(!isAgree);
  };

  const [btnActive, setBtnActive] = useState("");
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
  const [value, setValue] = useState("");

  function inputBox() {
    if (btnActive) {
      if (btnActive === "KB국민은행" || btnActive === "NH농협은행") {
        return (
          <AccountInput>
            <input type="text" maxLength={4} />-
            <input type="text" maxLength={4} />-
            <input type="text" maxLength={4} />-
            <input type="text" maxLength={3} />
            <button type="button">중복 확인</button>
          </AccountInput>
        );
      }
      return (
        <AccountInput>
          <input type="text" maxLength={4} />-
          <input type="text" maxLength={6} />-
          <input type="text" maxLength={6} />
          <button type="button">중복 확인</button>
        </AccountInput>
      );
    }
    return "";
  }
  const toggleActive = (e: MouseEvent<HTMLButtonElement>) => {
    setBtnActive(e.currentTarget.textContent as string);
  };
  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <Contents>
          <h3>계좌 추가</h3>
          <BankLists>
            {banks.map((bank) => {
              return (
                <BankList
                  key={bank.code}
                  className={btnActive === bank.name ? "active" : ""}
                  value={bank.name}
                >
                  <button type="button" onClick={toggleActive}>
                    {bank.name}
                  </button>
                </BankList>
              );
            })}
          </BankLists>
          {inputBox()}
          {btnActive ? <Notice>계좌번호를 입력해주세요</Notice> : null}
          <CheckWrapper htmlFor="">
            <CheckInput type="checkbox" onChange={handleSign} />
            <p>위 약관에 동의합니다</p>
          </CheckWrapper>
          <ButtonWrapper>
            <Button
              type="submit"
              onClick={() => {
                addAccount();
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

const AccountInput = styled.div`
  display: flex;
  box-sizing: border-box;
  margin-top: 20px;
  justify-content: center;

  input {
    width: 60px;
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

const CfmBtm = styled.button``;

const CheckWrapper = styled.label`
  display: flex;
  justify-content: center;
  margin: 10px 0 0 0;
`;

const CheckInput = styled.input`
  width: auto;
  margin: 0;
  font-size: 10px;
  margin-right: 4px;
`;

const Notice = styled.div`
  font-size: 12px;
  margin-top: 4px;
  margin-inline: auto;
  padding: 4px 20px;
  /* background-color: var(--secondary-color); */
  color: var(--secondary-color);
`;

const Form = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-inline: auto;
  input {
    border: 1px solid var(--primary-color);
    width: 100px;
  }
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
