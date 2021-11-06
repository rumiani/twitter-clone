import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useEffect } from 'react';
const NotFound = () => {
    const router = useRouter()
    useEffect(()=>{
        setTimeout(() => {
            // router..go(1)
            router.push('/')
        }, 3000);
    })
    return ( 
        <div>
            <h1>
                OOOOpppsss
                <p>
                    <Link href='/'>
                    <a>Home</a>
                    </Link>
                </p>
            </h1>
        </div>
     );
}
 
export default NotFound;