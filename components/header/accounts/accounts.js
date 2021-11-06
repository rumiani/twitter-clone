
const Accounts = () => {
    return ( 
        <div className='flex flex-row w-60 mt-20 hover:bg-gray-200 p-2 cursor-pointer rounded-full'>
                <img className='w-1/5 h-1/5 bg-green-400 mr-2 rounded-full h-11 hover:bg-opacity-80 hover:cursor-pointer'
                src="./assets/profile_pic/rumiani.jpg" alt="Image" />
            <div className='flex flex-col text-base w-3/4'>
                <span className='font-bold '>Maziar Rumiani</span>
                <span className='text-gray-500 -mt-1'>@rumianian</span>
            </div>
            <span className='text-3xl ml-2'>...</span>
        </div>
     );
}
 
export default Accounts;