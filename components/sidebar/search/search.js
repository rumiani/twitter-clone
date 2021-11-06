import { useRef, useState } from "react";

const Search = () => {
    const[input,setInput] = useState(null)
    const clean = useRef()

const changeHandler = (e) => {
    let val = e.target.value.trim()
    setInput(val)
}
const cleanInputHandler = () => {
    clean.current.value = ''
    setInput('')
}
    return ( 
        <div className='w-full relative mb-4 group'>
            <input className='w-full h-10 pl-16 ring-offset-blue-500 outline-none rounded-full bg-gray-200 border focus:border-blue-400 focus:bg-white' 
            type="text" placeholder='Search Twitter' ref={clean} onChange={e =>changeHandler(e)} />
            <i className="fas fa-search absolute left-4  text-2xl pt-1 group-hover:border-blue-500"></i>
            <i className={`fas fa-times-circle ${input?'visible':'invisible'}  absolute right-4 text-blue-500 cursor-pointer text-2xl pt-1`}
            onClick={cleanInputHandler}></i>
        </div>
     );
}
 
export default Search;