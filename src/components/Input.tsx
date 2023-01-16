const Input = ({ id, label, type }) => {
  return (
    <label htmlFor={id}>
      {label}
      <input type={type} id={id} />
    </label>
  );
};
export default Input;
