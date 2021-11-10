import NewTweet from "./newTweet/newTweet";
import Tweets from "./tweets/tweets";

const TweetSec = () => {
    return ( 
        <div className='xl:ml-80 ml-20 flex flex-col  sm:w-600 w-4/5 relative'>
            <div className='cursor-pointer flex flex-row p-4 h-14 justify-between w-600  bg-white fixed border-l border-r border-gray-100'>
                <h1 className='text-xl font-bold'>Latest Tweets</h1>
                <i className="far fa-star"></i>
            </div>
            <NewTweet/>
            <Tweets/>
        </div>
     );
}
 
export default TweetSec;