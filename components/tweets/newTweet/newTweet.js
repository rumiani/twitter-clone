import { useState } from "react";
import CharLimit from "./charLimit/charLimit";
import MoreOptions from "./moreOptions/moreOptions";
import NewTweetInput from "./newTweetInput/newTweetInput";
import WhoCanReplay from "./whoCanReplay/whoCanReplay";

const NewTweet = () => {
    const[showWhoCanReply,setshowWhoCanReply] = useState(false)
    const[inputLength,setInputLength] = useState(0)
    const inputHandler = (e) =>{
        setshowWhoCanReply(true)
        let inputVal = e.target.value

        e.target.style.height = "60px"
        e.target.style.height = e.target.scrollHeight + "px"

        setInputLength(0)
        if(inputVal.trim().length>0) setInputLength(inputVal.length)
    }

    return ( 
        <div className='w-600 mt-14 border border-gray-100  px-3 flex flex-row'>
            <img src="./assets/profile_pic/rumiani.jpg" alt="pic" className='w-1/12 bg-green-400 m-1 rounded-full h-11 hover:bg-opacity-80 hover:cursor-pointer'/>
            <div className='flex flex-col w-11/12 m-1'>
                <NewTweetInput inputHandler={inputHandler}/>
                {showWhoCanReply&& <WhoCanReplay/>}
                
                <div className='flex flex-row justify-between py-2 border-t border-gray-100 px-2 mt-2'>
                    <MoreOptions/>
                    <div className='flex p-1 flex-row justify-between'>
                        {inputLength>0 && <>
                            <CharLimit inputLength = {inputLength}/>
                            <span className='border'></span>
                            <span className=' border border-gray-400 text-blue-600 my-1 px-2 text-xl rounded-full hover:bg-blue-100 m-2'>+</span>
                        </>}
                        <button className={`text-white bg-blue-500 rounded-full py-2 px-5 disabled  ${inputLength>0?'cursor-pointer':'disabled pointer-default'} `}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewTweet;