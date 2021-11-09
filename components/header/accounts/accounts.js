
const Accounts = () => {
    return ( 
        <div className='flex flex-row xl:w-60 w-16 h-16 mt-12 hover:bg-gray-200 cursor-pointer rounded-full'>
                <img className='w-12 h-12 m-2 rounded-full hover:bg-opacity-80 hover:cursor-pointer'
                src="./assets/profile_pic/rumiani.jpg" alt="Image" />
            <div className='flex flex-col text-base w-3/4 invisible xl:visible'>
                <span className='font-bold '>Maziar Rumiani</span>
                <span className='text-gray-500 -mt-1'>@rumianian</span>
            </div>
            <span className='text-3xl mr-2 invisible xl:visible' >...</span>
        </div>
     );
}
 
export default Accounts;