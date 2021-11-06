import Tweet from "./tweet/tweet";
import {tweetsArr} from "./tweetsArr";

const Tweets = () => {
    return ( 
        <div className='w-full border-l border-r border-gray-200'>
            <ul>
            {
                tweetsArr.map( (tweet,index) =>{
                    return <li key={index}>
                        <Tweet tweet={tweet}/>
                    </li>
                })
            }
            </ul>
        </div>
     );
}
 
export default Tweets;