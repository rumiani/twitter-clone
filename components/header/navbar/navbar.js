import Link from 'next/link'
import { navArr } from './navArr';

const Navbar = () => {
    return ( 
        <div className = ' flex flex-col w-80 -z-10 mb-4 mt-2'>
            {navArr.map( (btn,index) => {
            return  <Link href={btn.href} key={index}><a className={`${btn.class} `}>
                        <i className={`${btn.iconClass} pt-1 mr-6 `}></i>
                        <span className='invisible xl:visible'>
                            {btn.name}
                        </span>
                        </a>
                    </Link>
            })}
        </div>
     );
}
 
export default Navbar;