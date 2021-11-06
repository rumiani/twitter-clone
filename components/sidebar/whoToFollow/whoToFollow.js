import Link from 'next/link'
let people = [
    {name:'Lori Lor',username:'lorilore',src:'./assets/new_people/lori.jpg'},
    {name:'Ashton Mashton',username:'mashton',src:'./assets/new_people/ashton.jpg'}
]
const WhoToFollow = () => {
    return ( 
        <div className='flex flex-col my-4 w-full rounded-xl bg-gray-100 focus:border-blue-200 focus:bg-white'>
            <span className='p-4 font-bold'>WhoToFollow</span>
            <ul>
            {people.map((person,index) => {
                return <Link href={`/${person.username}`} key={index}>
                <li  className='flex flex-row duration-300 hover:bg-gray-200 cursor-pointer p-2 h-16'>
                    <img src={person.src} alt="pic" className='w-2/12 rounded-full mx-2'/>
                    <div className='flex flex-col w-6/12'>
                        <span className='font-bold -mb-1 hover:underline'>{person.name}</span>
                        <span>@{person.username}</span>
                    </div>
                    <button className='bg-black rounded-full text-white self-center h-8 w-3/12 hover:bg-gray-800'>Follow</button>
                </li>
                </Link>
            })}
            </ul>
            <span className='hover:bg-gray-200 cursor-pointer p-2 h-12 duration-300'>
                <a href="#" className='text-blue-600'>Show more</a>
            </span>
        </div>
     );
}
 
export default WhoToFollow;