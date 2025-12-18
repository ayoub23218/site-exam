type TextAreaProps = {
  label: string;
  name: string;
  placeholder?: string;
  defaultValue?: string;
  rows?: number;
  required?: boolean;
  helperText?: string;
};

export default function TextArea(props: TextAreaProps) {
  return (
    <div>
      <label className="block font-bold mb-1">
        {props.label}
        {props.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <textarea
        name={props.name}
        defaultValue={props.defaultValue}
        placeholder={props.placeholder}
        required={props.required}
        rows={props.rows}
        className="w-full border p-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
      />
      {props.helperText && (
        <p className="text-xs text-gray-400 mt-1">{props.helperText}</p>
      )}
    </div>
  );
}
