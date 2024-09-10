import React from 'react'

const CheckBox = ({
    variant = 'primary',
    size = 'sm',
    icon ='/images/check.svg',
    onChange,
    checked,
    customClass=''
}) => {
    const baseStyle = "peer cursor-pointer transition-all appearance-none rounded-md hover:shadow-md border border-[#D0D5DD]"

    const sizes = {
        sm : "w-5 h-5",
        md: "w-5 h-5",
        lg: "w-6 h-6",
    }

    const variants = {
        primary: "bg-white checked:bg-[#F5F5FF] checked:border-[#000AFF]",
        secondary: 'bg-green-800'
    }
    return (
        <div className={`inline-flex items-center ${customClass}`}>
            <label className="flex items-center cursor-pointer relative">
                <input type="checkbox" className={`${baseStyle} ${variants[variant]} ${sizes[size]}`} onChange={onChange} checked={checked} id="check" />
                <span className="absolute opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                    <img src={icon} alt="" />
                </span>
            </label>
        </div>
    )
}

export default CheckBox
