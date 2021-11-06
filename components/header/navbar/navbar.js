import Link from 'next/link'
import { navArr } from './navArr';

const Navbar = () => {
    return ( 
        <div className = 'flex flex-col w-80 -z-10'>
            {navArr.map( (btn,index) => {
            return  <Link href={btn.href} key={index}><a className={`${btn.class} `}>
                        <i className={`${btn.iconClass} pt-1 mr-6 `}></i>
                        <span className='invisible xl:visible'>
                            {btn.name}
                        </span>
                        </a>
                    </Link>
            })}
            <button className = 'w-2/3 rounded-full bg-blue-400 hover:bg-blue-500 font-bold text-lg text-white p-3 mt-4'>Tweet</button>
        </div>
     );
}
 
export default Navbar;