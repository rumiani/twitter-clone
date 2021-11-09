import WhoToFollow from "./whoToFollow/whoToFollow";
import Search from "./search/search";
import Trends from "./trends/trends";
import Footer from "./footer/footer";
import Messages from "./messages/messages";

const Sidebar = () => {
    return ( 
        <div className='flex flex-col pt-2 w-96 pl-4'>
            <Search/>
            <div className=' flex flex-col py-2  items-center lg:visible invisible h-screen sticky -top-450'>
                <Trends/>
                <WhoToFollow/>
                <Footer/>
            </div>
            <Messages/>
        </div>
     );
}
 
export default Sidebar;