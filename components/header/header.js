import Accounts from "./accounts/accounts";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";
import TweetBtn from "./tweetBtn/tweetBtn";

const Header = () => {
    return ( 
        <div className=' w-80 h-screen mt-4  pl-14 fixed bg-white'>
            <Logo/>
            <Navbar/>
            <TweetBtn/>
            <Accounts/>
        </div>
     );
}
 
export default Header;