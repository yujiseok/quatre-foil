import { useForm } from "react-hook-form";
import styled from "styled-components";

const AccountFactory = ({ bankcode }: { bankcode: string }) => {
  const { register, handleSubmit, watch } = useForm();
  switch (bankcode) {
    case "004":
      return (
        <Input
          type="text"
          maxLength={12}
          {...register("account")}
          placeholder="계좌번호 12자리를 입력하세요"
        />
      );
    case "088":
      return (
        <Input
          type="text"
          maxLength={12}
          {...register("account")}
          placeholder="계좌번호 12자리를 입력하세요"
        />
      );
    case "020":
      return (
        <Input
          type="text"
          maxLength={13}
          {...register("account")}
          placeholder="계좌번호 13자리를 입력하세요"
        />
      );
    case "081":
      return (
        <Input
          type="text"
          maxLength={14}
          {...register("account")}
          placeholder="계좌번호 14자리를 입력하세요"
        />
      );
    case "089":
      return (
        <Input
          type="text"
          maxLength={12}
          {...register("account")}
          placeholder="계좌번호 12자리를 입력하세요"
        />
      );
    case "090":
      return (
        <Input
          type="text"
          maxLength={13}
          {...register("account")}
          placeholder="계좌번호 13자리를 입력하세요"
        />
      );
    case "011":
      return (
        <Input
          type="text"
          maxLength={13}
          {...register("account")}
          placeholder="계좌번호 13자리를 입력하세요"
        />
      );
    default:
      return (
        <Input
          type="text"
          maxLength={12}
          {...register("account")}
          placeholder="계좌번호 12자리를 입력하세요"
        />
      );
  }
};
export default AccountFactory;

const Input = styled.input`
  flex: 1;
  margin-bottom: 6px;
  font-size: 14px;
  border-bottom: 1px solid black;
  padding: 4px 0;
`;
