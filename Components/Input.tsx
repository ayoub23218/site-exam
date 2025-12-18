type InputProps = {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string | number;
  type?: string;
  required?: boolean;
  className?: string;
};

export default function Input(props: InputProps) {
  return (
    <div className={props.className}>
      <label className="block font-bold mb-1">
        {props.label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={props.type}
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        required={props.required}
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
