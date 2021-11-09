import Link from 'next/link'
const Logo = () => {
    return ( 
        <Link href='/home'>
            <a className='logo mt-4'>
                <i className='fab fa-twitter text-blue-400 text-3xl'></i>
            </a>
        </Link>
     );
}
export default Logo;