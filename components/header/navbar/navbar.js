import Link from 'next/link'
import { navArr } from './navArr';

const Navbar = () => {
    return ( 
        <div className = ' flex flex-col  -z-10 mb-4 mt-2'>
            {navArr.map( (btn,index) => {
            return  <Link href={btn.href} key={index}><a className='nav_btn'>
                        <i className={`${btn.iconClass} p-1 `}></i>
                        <span className='ml-4 mr-4 hidden xl:inline'>
                            {btn.name}
                        </span>
                        </a>
                    </Link>
            })}
        </div>
     );
}
 
export default Navbar;