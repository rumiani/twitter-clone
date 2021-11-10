import Head from 'next/head'
import { useRouter } from 'next/dist/client/router';
import { useEffect } from 'react';
// import Nav from '../comps/navbar/nav';


export default function Home() {
  const router = useRouter()
    useEffect(()=>{
      setTimeout(() => {
          // router..go(1)
          router.push('/home')
      }, 1);
    })
  return (
    < >
      <Head>
        <title>Latest Tweets / Twitter</title>
        <meta name="keywords" content="Tweets" />
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
        crossOrigin="anonymous"/>
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@700&display=swap"
        rel="stylesheet"
      />
      <link rel='preload' />      
      </Head>
     {/* < main>
     <Nav/>
     </main> */}
    </>
  )
}
