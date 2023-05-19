import type { ChangeEvent } from "react";

const Input = ({
  id,
  label,
  type,
  onChange,
}: {
  id: string;
  label: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <label htmlFor={id}>
      {label}
      <input type={type} id={id} onChange={onChange} />
    </label>
  );
};
export default Input;
