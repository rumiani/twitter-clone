import React from 'react';
import { useState } from 'react';
import { HighlightWithinTextarea } from 'react-highlight-within-textarea'
const NewTweetInput = ({inputHandler}) => {
    const [value, setValue] = useState("X Y Z and then XYZ");
    const onChange = (value) => setValue(value);
    // let highlightText = e.target.value.match(/(?<=.{5}).*/g)
    // if(highlightText)highlightText = highlightText[0]

    return ( <>aa
    <HighlightWithinTextarea
        value={value}
        // highlight={highlightText}
        highlight={/(?<=.{5}).*/g}
        onChange= {onChange}
        />
            {/* <textarea onChange={e => Example(e)} contentEditable className='w-full input pt-4 outline-none resize-none overflow-hidden text-xl border-none' type="text" placeholder="What's happening?" 
                onClick={inputHandler} on Change={(e)=>inputHandler(e)}>
            </textarea> */}
                {/* <textarea className='inline bg-gray-200 text-gray-500 z-10' /> */}
              </>
     );
}
 
export default NewTweetInput;