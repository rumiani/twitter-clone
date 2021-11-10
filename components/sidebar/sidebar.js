import WhoToFollow from "./whoToFollow/whoToFollow";
import Search from "./search/search";
import Trends from "./trends/trends";
import Footer from "./footer/footer";
import Messages from "./messages/messages";

const Sidebar = () => {
    return ( 
        <div className=' flex-col pt-2 xl:w-96 w-full pl-4 pr-4 lg:block hidden'>
            <Search/>
            <div className=' flex flex-col py-2  items-center h-screen sticky -top-450'>
                <Trends/>
                <WhoToFollow/>
                <Footer/>
            </div>
            <Messages/>
        </div>
     );
}
 
export default Sidebar;