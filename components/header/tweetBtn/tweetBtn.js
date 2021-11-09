const TweetBtn = () => {
    return ( 
        <button className = 'xl:w-10/12 xl:h-12 w-16 h-16 rounded-full bg-blue-500 hover:bg-blue-600 font-bold text-white cursor-pointer' >
            <p className = 'invisible xl:visible xl:mt-3 -mt-2 z-20' >Tweet</p>
            <i className="fas fa-feather-alt visible xl:invisible z-30 mb-6 text-2xl"></i>
            </button>
     );
}
 
export default TweetBtn;