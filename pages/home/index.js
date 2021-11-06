import Head from 'next/head'
import Header from '../../components/header/header'
import Sidebar from '../../components/sidebar/sidebar'
import TweetSec from '../../components/tweets/tweetSec'
export default function Home() {
  return (
    <div className='flex flex-row' >
      <Head>
        <title>Latest Tweets / Twitter</title>
        <meta name="keywords" content="Tweets" />
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
     <Header/>
     < main className='flex flex-row' >
     <TweetSec/>
     <Sidebar/>
     </main>
    </div>
  )
}
