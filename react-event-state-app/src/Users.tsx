import {use} from "react"
import UserCard from "./UserCard";

function Users({usersDataPromise}){

    const users = use (usersDataPromise);
    console.log(users);
    return (
        <div>
            <h2>Users : {users.length}</h2>
            {
                users.map(user => <UserCard user ={user}></UserCard>)  // show every single data using props with map()
            }
        </div>
    )
}

export default Users;





/* *
*
* 1. Data Source || JSON 
* 2. JSON.Stringify()
* 3.JSON.parse()
* 4.JSON()
*
*  
* */

//JSON call back function 

fetch('https://jsonplaceholder.typicode.com/users')

.then(res => res.json()) // the call function is .then () and inside respose res to represent data from another source or  from json data response to javascript

.then(data => {console.log(data)}) // then use this data to print or operation to show

// async await :

async function loadData () {
    const res = await fetch ('https:// jsonplaceholder.typicode.com/users')

    const data = await res.json(); // convert json data to javascript to folloing async await method

    return data;
}

