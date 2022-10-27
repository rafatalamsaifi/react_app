import { useState } from 'react';

import './Api.css';

const Api = ()=> {
    const [users,setUsers] = useState([])
    
    async function fetchData(){
        try{
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await res.json();
            setUsers(data)
        }catch(error){
            console.log("error occurred")
        }
    }

    return(
        <>
            <button id='api' onClick={fetchData}>Load data</button>
            <div>
                {/* {users.map(u=> <User user={u} />)} */}
                {users.map(u=> <li>{u.name}</li>)}
            </div>
        </>
    )
};

export default Api