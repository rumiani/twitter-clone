import { useState } from "react";
import CharLimit from "./charLimit/charLimit";

const NewTweet = () => {
    const[inputLength,setInputLength] = useState(null)
    const[limitColor,setLimitColor] = useState(null)
    const[active,setActive] = useState(false)
    const charLimitHandler = (e) =>{
        setActive(false)
        if(e.target.value.trim().length>0){
            let inputLength = e.target.value.length;
            if(inputLength < 260) {
                setLimitColor('blue')
                setActive(true)
                return setInputLength(inputLength)
            }
            if(inputLength <280) {
                setLimitColor('orange')
                return setInputLength(280 - inputLength)
            }
            else {
                setActive(false)
                setLimitColor('red')
                return setInputLength(280 - inputLength)
            };
        }
    }

    return ( 
        <div className='w-600 mt-14 border border-gray-200  px-3 flex flex-row'>
            <img src="./assets/profile_pic/rumiani.jpg" alt="pic" className='w-1/12 bg-green-400 m-1 rounded-full h-11 hover:bg-opacity-80 hover:cursor-pointer'/>
            <div className='flex flex-col w-11/12 m-1'>
                <textarea className='break-words outline-none text-xl border-none' type="text" placeholder="What's happening?" onChange={(e)=>charLimitHandler(e)}/>
                <span className='border-b-2 border-gray'>
                    <i className="fas fa-globe-americas newTweetIcon"></i>
                    Everyone can replay</span>
                <div className='flex flex-row justify-between py-2'>
                    <span className=''>
                        <i className="far fa-image newTweetIcon"></i>
                        <i className="fas fa-film newTweetIcon"></i>
                        <i className="far fa-chart-bar newTweetIcon"></i>
                        <i className="far fa-smile newTweetIcon"></i>
                        <i className="fas fa-calendar-alt newTweetIcon"></i>
                    </span>
                    <div className='flex p-1 flex-row justify-between'>
                        <CharLimit limitColor = {limitColor} active={active} className={`${active?'visible':'hidden'}`}/>
                        <span className={`border ${active?'visible':'hidden'} `}></span>
                        <span className={`${active?'visible':'hidden'} border border-gray-400 text-blue-600 my-1 px-2 text-xl rounded-full hover:bg-blue-100 m-2`}>+</span>
                        <button className={`text-white rounded-full py-2 px-5  bg-blue-${active?'400 hover:bg-blue-500':200} ${active?'':'disabled'}  cursor-${active?'pointer':'default'}`}>Tweet</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default NewTweet;