const Input = ({
  id,
  label,
  type,
}: {
  id: string;
  label: string;
  type: string;
}) => {
  return (
    <label htmlFor={id}>
      {label}
      <input type={type} id={id} />
    </label>
  );
};
export default Input;
