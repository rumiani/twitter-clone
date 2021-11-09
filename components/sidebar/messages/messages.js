import { useState } from "react";

const Messages = () => {
    const[msgBox,setMsgBox] = useState(false)

    const msgBoxHandler = (e) => {
        if(!e.target.classList.contains('newMessage'))setMsgBox(!msgBox)
    }
    // h-${msgBox?'h/4/5':'h-12'}
    return ( 
        <div className={`flex flex-col justify-between w-96 ${msgBox?'h-4/5':'h-12'} duration-300 fixed bottom-0 rounded-t-xl bg-white shadow-messageShadow`}>
            <div onClick={msgBoxHandler} className='flex flex-row justify-between w-96 h-12 font-bold text-xl  p-2  cursor-pointer'>
                <div >Messages</div>
                <div className='relative text-gray-800 '>
                    <i className="newMessage far fa-envelope mr-2 text-2xl rounded-full w-10 h-10 pt-1 pl-2 hover:bg-gray-200"></i>
                    <span className='rounded-full w-10 h-10 pt-1 p-2 hover:bg-gray-200'>
                        <i className={`fas fa-chevron-${msgBox?'down':'up'} absolute bottom-2`}></i>
                        <i className={`fas fa-chevron-${msgBox?'down':'up'}`}></i>
                    </span>
                </div>
            </div>
            <div className='h-full w-full border-t border-gray-200'></div>
        </div>
     );
}
 
export default Messages;