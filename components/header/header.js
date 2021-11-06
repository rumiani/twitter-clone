import Accounts from "./accounts/accounts";
import Logo from "./logo/logo";
import Navbar from "./navbar/navbar";

const Header = () => {
    return ( 
        <div className='w-80 h-screen  pl-14 fixed bg-white'>
            <Logo/>
            <Navbar/>
            <Accounts/>
        </div>
     );
}
 
export default Header;