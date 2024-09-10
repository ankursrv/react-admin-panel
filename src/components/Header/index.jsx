import { useState } from "react";
import SearchBar from "../SearchBar";
const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
        console.log(value); // You can add the search logic here
        setSearchTerm(value);
    };
    return (
        <header className="flex justify-between items-center py-[25px] px-[60.5px] bg-white border-b border-border-secondary">
            <h2 className="text-[32px] font-bold flex items-center gap-1">
                Hello, John
                <img src="/images/hand.svg" alt="" className="w-8 h-[31px] object-cover" />
            </h2>
            <div className="flex items-center relative gap-[54px]">
                <SearchBar 
                onSearch={handleSearch} 
                className=''
                image='search.svg'
                iconPosition='right'
                variant='primary'
                />
                {/* <p className="mt-4">Search term: {searchTerm}</p> */}
                <img
                    src="/images/Ellipse.svg"
                    alt="User"
                    className="rounded-full w-[50px] h-[50px] object-cover"
                />
            </div>
        </header>
    );
};
export default Header
