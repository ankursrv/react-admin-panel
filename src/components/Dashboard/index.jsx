import Sidebar from "../Sidebar";
import Header from "../Header";
import SalesCards from "../SalesCards";
import LearnersTable from "../LearnersTable";
const Dashboard = () => {
    return (
        <div className="">
            
           <div className="flex">
                {/* Sidebar */}
                <Sidebar />

                {/* Main content */}
                <div className="w-full bg-blue-light-primary h-screen">
                    <Header />
                    <SalesCards />
                    <LearnersTable />
                </div>
           </div>
        </div>
    );
};

export default Dashboard;
