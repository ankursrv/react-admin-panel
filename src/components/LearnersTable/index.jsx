import { useState } from "react";
import Button from "../Button";
import SearchBar from "../SearchBar";
import CheckBox from "../CheckBox";
const LearnersTable = () => {
    const learners = [
        { id: 1, name: "John Doe", email: "john.doe@gmail.com", language: "English", occupation: "Freelance", objective: "Fluent", subscription: "Free Trial" },
        { id: 2, name: "John Doe", email: "john.doe@gmail.com", language: "English", occupation: "Freelance", objective: "Fluent", subscription: "Monthly" },
        
    ];

    const columns = [
        { label: "Learners", sortable: true },
        { label: "Language", sortable: true },
        { label: "Occupation", sortable: true },
        { label: "Objective", sortable: true },
        { label: "Subscription", sortable: true },
    ];

    const handleFilterClick = () => {
        console.log("Filters button clicked");
    };

    const handleAddUserClick = () => {
        console.log("Add User button clicked");
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (value) => {
        console.log(value); // You can add the search logic here
        setSearchTerm(value);
    };
    

    return (
        <div className="px-[60.5px]">
            <div className="flex items-center justify-between mb-[21px]">
                <div className="flex gap-4 items-center">
                    {/* Secondary button (Filters) with an icon */}
                    <Button
                        label="Filters"
                        icon={<img src="/images/filter.svg" />} // Replace with the actual filter icon
                        onClick={handleFilterClick}
                        variant="secondary"
                    />

                    {/* Primary button (Add User) with an icon */}
                    <Button
                        label="Add User"
                        icon={<img src="/images/plus.svg" />} // Replace with the actual add icon
                        onClick={handleAddUserClick}
                        variant="primary"
                    />
                    <h6 className="text-[15px] text-black-secondary font-semibold">1 row selected</h6>
                </div>
                <div>
                    <SearchBar
                        image='search2.svg'
                        iconPosition="left"
                        placeholder='Search'
                        variant="secondary"
                        onSearch={handleSearch}
                    />
                </div>
            </div>
            <div className=" bg-white">
                <table className="min-w-full  rounded-lg">
                    <thead className="h-[50px]">
                        <tr className="bg-gray-200">
                            {
                            columns.map((column, index) => (
                                <th key={index} className="py-3 pl-[25px] text-left text-xs text-gray-fourth font-normal">
                                    <span className="text-[#8A92A6] flex items-center">
                                        {index === 0 && (
                                            <CheckBox
                                                variant='primary'
                                                size="sm"
                                                customClass='mr-[30px]'
                                            />
                                        )}
                                        {column.label}
                                        {column.sortable && <img className="w-[9.33px] filter-arrow ml-2" src="/images/arrow-down.svg" alt="Sort icon" />}
                                    </span>
                                </th>
                            ))
                            }
                            <th className="py-3 px-6"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {learners.map((learner) => (
                            <tr key={learner.id} className="border-b">
                                <td className="py-5 pl-[25px] flex items-center">
                                    <CheckBox
                                        variant='primary'
                                        size="sm"
                                        customClass='mr-[30px]'
                                    />
                                    <img
                                        src="/images/user1.png"
                                        alt={learner.name}
                                        className="rounded-full w-10 h-10 mr-3"
                                    />
                                    <span>
                                        <p>{learner.name}</p>
                                        <p className="text-sm text-gray-500">{learner.email}</p>
                                    </span>
                                </td>
                                <td className="py-5 pl-[25px]">{learner.language}</td>
                                <td className="py-5">{learner.occupation}</td>
                                <td className="py-5">{learner.objective}</td>
                                <td className="py-5">{learner.subscription}</td>
                                <td className="py-5 pr-[25px] flex justify-end">
                                    <button className="w-10 h-10 flex items-center justify-center"><img src="/images/delete.svg" alt="" /></button>
                                    <button className="w-10 h-10 flex items-center justify-center"><img src="/images/edit.svg" alt="" /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LearnersTable;