interface InputProps {
  id: string;
  label: string;
  className?: string;
  type: string;
  required: any;
  func?: any;
}

const Input = ({ id, label, required, type, func, className }: InputProps) => {
  return (
    <label htmlFor={id} className={className}>
      <span className="block mb-5">{label}</span>
      <input
        id={id}
        type={type}
        required={required}
        name={id}
        className="block w-full p-5 font-semibold text-xl"
        onChange={(e) => {
          func(e.target.value);
        }}
      />
    </label>
  );
};

export { Input };
export default Input;
