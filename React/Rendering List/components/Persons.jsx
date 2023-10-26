
const users = [
    {
        id : 0,
        name : "munna mia",
        profession : 'programmer'
    },
    {
        id : 1,
        name : "kaoser",
        profession : 'programmer'

    },
    {
        id : 2,
        name : "sharif",
        profession : 'programmer'
    },
    {
        id : 3,
        name : "jobayer",
        profession : 'web dev'
    },
    {
        name : "mia",
        profession : 'arts'
    },
    {
        name : "munna",
        profession : 'arts'
    }
];


//now select all the programmer for this array of object



export default function Persons (){
    const programmer = users.filter(person => person.profession === 'programmer');
    const listItems = programmer.map(person => <li key={person.id}>{person.name}</li>);
    return (
        <>
            <ul>{listItems}</ul>
        </>
    )
}