import type { MouseEvent } from "react";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { colors } from "constants/color";
import { useForm } from "react-hook-form";
import useAddAccountMutation from "lib/hooks/useAddAccountMutation";

const AccountModal = ({ onClose }: { onClose: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isAgree, setIsAgree] = useState(false);
  const [bankcode, setBankcode] = useState("004");
  const [activeTab, setActiveTab] = useState(0);
  const { register, handleSubmit, watch } = useForm();
  const { addAccountMutate } = useAddAccountMutation();

  const handleSign = () => {
    setIsAgree((prev) => !prev);
  };

  const onSubmit = (data: any) => {
    addAccountMutate({
      bankcode,
      account: data.account,
      phoneNumber: data.phoneNumber,
      isAgree,
    });
    onClose();
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

  const toggleActive = (e: MouseEvent<HTMLButtonElement>) => {
    setBankcode(e.currentTarget.dataset.code as string);
  };

  const accountFactory = () => {
    switch (bankcode) {
      case "004":
        return (
          <Input
            type="text"
            //maxLength 수정 필요
            {...register("account", { maxLength: 12 })}
            placeholder="계좌번호 12자리를 입력해 주세요"
          />
        );
      case "088":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 12 })}
            placeholder="계좌번호 12자리를 입력해 주세요"
          />
        );
      case "020":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 13 })}
            placeholder="계좌번호 13자리를 입력해 주세요"
          />
        );
      case "081":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 14 })}
            placeholder="계좌번호 14자리를 입력해 주세요"
          />
        );
      case "089":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 12 })}
            placeholder="계좌번호 12자리를 입력해 주세요"
          />
        );
      case "090":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 13 })}
            placeholder="계좌번호 13자리를 입력해 주세요"
          />
        );
      case "011":
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 13 })}
            placeholder="계좌번호 13자리를 입력해 주세요"
          />
        );
      default:
        return (
          <Input
            type="text"
            {...register("account", { maxLength: 12 })}
            placeholder="계좌번호 12자리를 입력해 주세요"
          />
        );
    }
  };

  return (
    <Overlay>
      <ModalWrap ref={modalRef}>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          <h3>계좌 연결</h3>
          <BankLists>
            {BANK_LIST.map((bank, i) => {
              return (
                <BankList
                  key={bank.code}
                  onClick={() => setActiveTab(i)}
                  className={activeTab === i ? "active" : ""}
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
          <ActiveContent>
            <Wrapper>
              <Label htmlFor="account">계좌번호</Label>
              {accountFactory()}
            </Wrapper>
            <Wrapper>
              <Label htmlFor="phoneNumber">전화번호</Label>
              <Input
                type="text"
                {...register("phoneNumber", { required: false, maxLength: 11 })}
              />
            </Wrapper>
          </ActiveContent>
          <CheckWrapper>
            <CheckInput type="checkbox" onChange={handleSign} />
            <p>위 약관에 동의합니다</p>
          </CheckWrapper>
          <ButtonWrapper>
            <Button type="submit">등록하기</Button>
            <Button onClick={onClose}>취소하기</Button>
          </ButtonWrapper>
        </FormContainer>
      </ModalWrap>
    </Overlay>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: full;
  align-items: center;
  margin-bottom: 10px;
`;
const Label = styled.label`
  font-size: 14px;
`;
const Input = styled.input`
  margin-bottom: 6px;
`;
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
  width: 500px;
  height: fit-content;
  background-color: #fff;
  position: absolute;
  z-index: 100;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const FormContainer = styled.form`
  margin: 70px 30px;
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
`;
const BankLists = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 450px;
  align-self: center;
  margin-top: 30px;
  margin-bottom: 30px;
  p {
    color: var(--black-40);
  }
`;
const BankList = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;
  color: var(--black-40);
  border: 0.8px ${colors.black20} solid;
  cursor: pointer;
  &.active {
    color: ${colors.black10};
    background: ${colors.primary};
  }

  button {
    padding: 10px 15px;
  }
`;
const ActiveContent = styled.div`
  color: ${colors.black60};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-inline: auto;
  margin-bottom: 6px;
  div {
    line-height: 2rem;
    gap: 20px;
  }
  input {
    padding: 0.25rem 0.5rem;
    border-bottom: 1px solid black;
  }
`;
const CheckWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 10px 0;
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

const BANK_LIST = [
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
