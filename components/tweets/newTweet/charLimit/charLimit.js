const CharLimit = (props) => {

    return ( 
        <div className={`${props.active?'visible':'hidden'}`}>
            <span className={`charLimit bg-gray-200 border-2 px-4 py-2 m-1 h-8 w-20 rounded-full border-${props.limitColor}-500`}></span>
        </div>
     );
}
 
export default CharLimit;