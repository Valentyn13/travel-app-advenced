import { ChangeEvent, FC } from "react"

type Props = {
    value: string
    onChange:(e: ChangeEvent<HTMLInputElement>) => void
    onBlur?:() => void
    testId: string
    name?: string
    type?: string
    placeholder?: string
    required?: boolean
}
const Input:FC<Props> = ({value, testId, name, type ,placeholder, onChange, onBlur, required}) => {
    return(
        <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        data-test-id={testId}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      /> 
    )
}

export default Input;