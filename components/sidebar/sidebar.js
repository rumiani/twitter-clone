import WhoToFollow from "./whoToFollow/whoToFollow";
import Search from "./search/search";
import Trends from "./trends/trends";
import Footer from "./footer/footer";

const Sidebar = () => {
    return ( 
        <div className=' flex flex-col pl-8 py-2  items-center lg:visible invisible  '>
            <Search/>
            <Trends/>
            <WhoToFollow/>
            <Footer/>
        </div>
     );
}
 
export default Sidebar;