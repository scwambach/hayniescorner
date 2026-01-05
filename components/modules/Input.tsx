interface InputProps {
  id: string;
  label: string;
  className?: string;
  type: string;
  required: boolean;
  func?: (value: string) => void;
  formId?: string;
  delay?: number;
}

export const Input = ({
  id,
  label,
  required,
  type,
  func,
  className,
}: InputProps) => {
  const isCheck = type === "checkbox" || type === "radio";

  return (
    <label htmlFor={id} className={`fader ${className} ${type}`}>
      <span className="block mb-5">{label}</span>
      {type === "textarea" ? (
        <textarea
          id={id}
          required={required}
          name={id}
          rows={6}
          className="block w-full p-5 font-semibold text-xl bg-white"
          onChange={(e) => {
            func?.(e.target.value);
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
              ? "w-10 checkItem bg-white"
              : `block w-full p-5 font-semibold text-xl bg-white`
          }
          onChange={(e) => {
            func?.(e.target.value);
          }}
        />
      )}

      {isCheck && <div className="checkmark"></div>}
    </label>
  );
};
