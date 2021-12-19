import { useRef, useState } from "react"

const TextInput = ({ type, label, errorMsg }) => {

    const [show, setShow] = useState(false)
    const [value, setValue] = useState('')
    const [isError, setIsError] = useState(false);
    const isFocus = useRef(null);

    const handleClick = () => {
        setShow(true);
        if (isFocus.current) {
            isFocus.current.focus()
        }
    }

    const handleBlur = () => {
        if (isFocus.current.value !== '') {
            setShow(true);
        } else {
            setShow(false);
        }

        if (value === '') {
            setIsError(true)
        }
        else {
            setIsError(false)
        }
    }

    const handleChange = (e) => {
        setValue(e.target.value);
        setIsError(false)
    }

    return (
        <div className="my-5">
            <div className={`h-14 bg-[#333333] rounded px-4 py-3 relative ${isError ? 'border-b border-[#E87C05]' : ''}`} onBlur={handleBlur} onClick={handleClick}>
                <label htmlFor="email" className={show ? "text-[#8C8C8C] text-xs absolute top-2" : "text-[#8C8C8C] text-base absolute top-1/2 transform -translate-y-1/2"} >
                    {label}
                </label>
                <input onChange={handleChange} type={type} ref={isFocus} className={show ? "w-full bg-transparent focus:outline-none focus:bg-transparent opacity-100 h-auto common-transition text-white absolute bottom-1" : "common-transition opacity-0 h-0 w-full"} />
            </div>
            {isError && <p className="mt-2 text-[#E87C05] text-xs">{errorMsg}</p>}

        </div>
    )
}

export default TextInput
