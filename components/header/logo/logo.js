import Link from 'next/link'
const Logo = () => {
    return ( 
        <Link href='/home'>
            <a className='logo'>
                <i className='fab fa-twitter text-blue-400 text-2xl'></i>
            </a>
        </Link>
     );
}
export default Logo;