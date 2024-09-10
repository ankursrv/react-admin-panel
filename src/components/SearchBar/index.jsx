import React from 'react'

const SearchBar = ({ placeholder, variant = 'primary', onSearch, image, iconPosition = 'right' }) => {

    const baseStyle = "text-sm text-black pl-10 ml-5 outline-none transition-all duration-300 ease-in-out "
    const variants = {
        primary: 'border-2 border-border-primary focus:w-72 w-[266px] h-[50px] rounded-full',
        secondary: 'w-80 h-[44px] border border-border-tertary rounded-lg',
    }

    return (
        <div className="relative flex items-center w-full max-w-md">
            <input
                type="text"
                className={`${baseStyle} ${variants[variant]}`}
                // className="border-2 border-border-primary text-sm text-black pl-10  ml-5  outline-none  transition-all duration-300 ease-in-out focus:w-72 w-[266px] h-[50px]"
                placeholder={placeholder || ''}
                onChange={(e) => onSearch(e.target.value)}
            />
            <span className={`absolute text-gray-400 transition-all duration-300 ease-in-out w-[15px] h-[15px] ${iconPosition === 'left' ? 'left-9 top-4' : 'right-6 top-4 '}`}>
                <img src={`/images/${image}`} alt="" />
            </span>
        </div>
    );
};

export default SearchBar;
