interface InputProps {
  value: string,
  setValue: Function,
  placeholder: string,
  type: string
}

export default function Input({value, setValue, placeholder, type}: InputProps) {
  return <label className="w-full mb-4">
    <input className="input outline-0 border-[#ECEAEA] border p-4 w-full rounded-xl"
      value={value}
      onChange={setValue}
      placeholder={placeholder}
      type={type} />
  </label>
}