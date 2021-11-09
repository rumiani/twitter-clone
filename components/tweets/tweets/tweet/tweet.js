import { useState } from "react";

const Tweet = ({tweet}) => {
    const[like,setLike] = useState(false)
    const[retweet,setRetweet] = useState(false)
    const likeHandler = () => setLike(!like)
    const retweetHandler = () => setRetweet(!retweet)
    return ( 
        <div className=' flex flex-row p-4 hover:bg-gray-100 cursor-pointer border-b border-gray-200'>
            <img src={tweet.src} alt="pic" className = 'w-1/12 bg-green-400 mr-2 rounded-full h-11 hover:opacity-70 hover:cursor-pointer' />
            <div className='w-11/12'>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-row'>
                        <span className='font-bold mr-2 hover:underline'>{tweet.name}</span>
                        <span className='text-gray-500'>@{tweet.username} .</span>
                        <span className='text-gray-500 ml-1'>{tweet.time}</span>
                    </div>
                    <i className='fas fa-ellipsis-h text-sm text-gray-600 iconHover'></i>
                </div>
                <div >
                    <p className='text-justify'>{tweet.text}</p>
                    {tweet.srcTweet !== null && <img src={tweet.srcTweet} alt='Image' draggable={true} className='rounded-2xl w-full h-full my-4 mx-auto self-stretch'/>}
                </div>
                <div className='my-1'>
                    <span className='mr-20 cursor-pointer hover:text-blue-400' title='Reply'>
                        <i className="far fa-comment mr-2"></i>{tweet.replies.length}
                    </span>
                    <span className={`mr-20 cursor-pointer hover:text-green-400 ${retweet?'text-green-400':''}`}
                        onClick={retweetHandler} title='Retweet'>
                        <i className="fas fa-retweet mr-2"></i>{tweet.retweets}
                    </span>
                    <span className={`mr-20 cursor-pointer hover:text-red-500 ${like?'text-red-500':''}`}
                        onClick={likeHandler} title='Like'>
                    <i className={`${like?'fas text-red-500':'far'} fa-heart  mr-2`}></i>{tweet.likes}
                    </span>
                    <span className='mr-20 cursor-pointer hover:text-blue-400'>
                    <i className="fas fa-external-link-alt" title='Share'></i>
                    </span>
                </div>
            </div>
        </div>
     );
}
 
export default Tweet;