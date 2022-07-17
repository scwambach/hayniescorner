interface InputProps {
  id: string;
  label: string;
  className?: string;
  type: string;
  required: any;
  func?: any;
  formId?: string;
  delay?: number;
}

const Input = ({
  id,
  label,
  required,
  type,
  func,
  formId,
  className,
  delay = 0,
}: InputProps) => {
  const isCheck = type === 'checkbox' || type === 'radio';

  return (
    <label
      htmlFor={id}
      className={`fader ${className} ${type}`}
      data-aos="fade-up"
      data-aos-anchor={`#${formId}`}
      data-aos-delay={`${delay}`}
    >
      <span className="block mb-5">{label}</span>
      {type === 'textarea' ? (
        <textarea
          id={id}
          required={required}
          name={id}
          rows={6}
          className="block w-full p-5 font-semibold text-xl"
          onChange={(e) => {
            func ? func(e.target.value) : null;
          }}
        />
      ) : (
        <input
          id={id}
          type={type}
          required={required}
          name={id}
          className={
            isCheck
              ? 'w-10 checkItem'
              : `block w-full p-5 font-semibold text-xl`
          }
          onChange={(e) => {
            func ? func(e.target.value) : null;
          }}
        />
      )}

      {isCheck && <div className="checkmark"></div>}
    </label>
  );
};

export { Input };
export default Input;
