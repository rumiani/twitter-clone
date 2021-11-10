
const NewTweetInput = ({inputHandler}) => {

    
        // let highlightText = e.target.value.match(/(?<=.{5}).*/g)
        // if(highlightText)highlightText = highlightText[0]
        
        return ( <div  className='  p-4'>
        
            <textarea contentEditable className=' w-full h-16 input py-4 outline-none resize-none  text-xl border-none' 
                type="text" placeholder="What's happening?" 
                onClick={e => inputHandler(e)} onChange={(e)=>inputHandler(e)}>
            </textarea>
              </div> 
     );
}
 
export default NewTweetInput;