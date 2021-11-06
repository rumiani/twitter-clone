let people = [
    {name:'Maziar Rumiani',username:'rumianian'},
    {name:'Maziar Rumi',username:'rumi'}
] 
export const getStaticPaths = async () =>{   
    const paths = people.map( person =>{
        return {
            params:{id:person.username.toString()}
        }
    })
    return {
        paths, 
        fallback:false
    }
}
export const getStaticProps = async (context) => {
    const username = context.params.id;
    const person = people.filter( person => person.username === username)
    return {props:{person}};
}
const People = ({person}) => {
    console.log(person)
    return ( 
        <div>
            <i className="fas fa-calendar-alt"></i>
            <i className="fas fa-thumbtack"></i>
            <i className="fas fa-link"></i>
            <h1>{person[0].name}</h1>
            <h2>@{person[0].username}</h2>
        </div>
     );
}
 
export default People;