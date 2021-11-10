const CharLimit = ({inputLength}) => {
    return ( 
        <div className='relative mr-2'>
            {/* <div className='w-16 h-16 bg-green-600 rounded-full bg-gradient'>a</div> */}
            {/* <span className={`charLimit bg-gray-200 border-2 px-4 py-2 m-1 h-8 w-20 rounded-full ${inputLength<260?'border-blue-500':inputLength<280?'border-yellow-500':inputLength<290?'border-red-500':'border-none'}`}></span> */}
            <svg className=' h-8 w-8 strok'>
                <circle cx='16' cy='16'  r="13" stroke={`${inputLength<260?'blue':inputLength<280?'yellow':inputLength<290?'red':'white'}`}
                 strokeDasharray='360' strokeDashoffset='90' strokeWidth="3" fill="transparent" />
                 <p>5</p>s
            </svg> 
                 <div className={`${inputLength>279?'text-red-600':'text-black'} text-center w-8 absolute top-1`}>{inputLength>260?280-inputLength:''}</div>
        </div>
     );
}
 
export default CharLimit;