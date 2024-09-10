import { useState } from 'react';

const sideItems = [
    {
        name: 'Live Calls',
        icon: 'Call.svg', 
    },
    {
        name: 'Tutor Online',
        icon: 'contacts.svg ', 
    },
    {
        name: 'Active Subscription',
        icon: 'Vector.svg', 
    },
    {
        name: 'Earnings/Spending',
        icon: 'Activity.svg', 
    },
]

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [show, setShow] = useState(false);
    // Function to handle click event
    const handleTabClick = (index) => {
        setActiveTab(index); 
        if (index === activeTab) {
            setShow(!show); 
        } else {
            setShow(true); 
        }
    };
    return (
        <aside className="w-[255px] bg-gray-dark h-screen text-white">
            <h1 className="text-[45px] font-bold px-[59px] pt-[39px] pb-9">Admin</h1>
            <ul>
                {
                    sideItems.map((item, index) => (
                        <li 
                            className={`text-gray-light-primary h-[56px] flex items-center text-base w-full justify-between ${activeTab === index ? 'active' : ''}`}
                        key={index} 
                        onClick={() => handleTabClick(index)}
                        >
                            <a href="#" className="flex items-center pl-7">
                                <img src={`/images/${item.icon}`} alt="" className='opacity-40' />
                                <span className="ml-[25px]">{item.name}</span>
                            </a>
                            {activeTab === index && (
                                <img
                                    src="/images/Group.svg"
                                    alt="More options"
                                    className="mr-4" 
                                />
                            )}
                        </li>
                    ))
                }
                {show && (
                    <div className="pl-7 py-2 ">
                        {/* <span>Hello, this is the toggled content!</span> */}
                    </div>
                )}
            </ul>
        </aside>
    );
};

export default Sidebar;
