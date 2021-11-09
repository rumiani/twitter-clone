let trendsArr = [
    {id:0,trend:'trend 1',hashtag:'Iamsmart',num:'72800K'},
    {id:1,trend:'trend 2',hashtag:'Rumiani',num:'33.1K'},
    {id:2,trend:'trend 3',hashtag:'Iwillgetthejob',num:'11.5K'},
    {id:3,trend:'trend 4',hashtag:'Iamstrong',num:'8K'},
    {id:4,trend:'trend 5',hashtag:'Iamthebest',num:'4500 Tweets'},
    {id:5,trend:'trend 6',hashtag:'Iaddvalue',num:'3500 Tweets'},
    {id:6,trend:'trend 7',hashtag:'Iamcreative',num:'2850 Tweets'}
]
const Trends = () => {
   return ( 
       <div className='flex flex-col w-full rounded-xl bg-gray-100 focus:border-blue-200 focus:bg-white'>
           <span className='flex flex-row justify-between p-4'>
               <h2 className='font-bold text-xl '>Trends for you</h2>
                <i className="fas fa-cog   iconHover"></i>
            </span>
            {trendsArr.map((trend,index) => <div className='hover:bg-gray-200 cursor-pointer px-4 h-20 duration-300 flex flex-col' key={index}>
                <span className='text-gray-600 flex flex-row justify-between'>{index+1 +' . '+ trend.trend+' . Trending'}
                    <span><i className="fas fa-chevron-down "></i></span>
                </span>
                <span className='font-bold hover:underline'>#{trend.hashtag}</span>
                <span className='text-gray-600'>{trend.num}</span>
                </div>)}

            <span className='hover:bg-gray-200 cursor-pointer p-2 h-12'>
                <a href="#" className='text-blue-600'>Show more</a>
            </span>
        </div>
     );
}
 
export default Trends;