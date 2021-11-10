import Accounts from "./accounts/accounts";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";
import TweetBtn from "./tweetBtn/tweetBtn";

const Header = () => {
    return ( 
        <div className=' xl:w-80  h-screen mt-4  xl:pl-14 pl-4 fixed bg-white'>
            <Logo/>
            <Navbar/>
            <TweetBtn/>
            <Accounts/>
        </div>
     );
}
 
export default Header;