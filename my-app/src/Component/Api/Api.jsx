import './Api.css'
const Api = ()=> {
    const result = document.getElementById('root');
    async function fetchData(){
        try{
            const url = "https://jsonplaceholder.typicode.com/users";
            const res = await fetch(url);
            const users = await res.json();
            showOnUl(users)
            console.log(users);

        }catch(error){
            console.log("error occurred")
        }
    }
     function showOnUl(users){
        users.map(function(user){
            const li = document.createElement('li');
            li.innerHTML = user.name
             result.appendChild(li)
        })
    }
    return(
        <>
            <button id='api' onClick={fetchData}>Fetch Data</button>
            <ul id="root"></ul>
        </>
    )
};

export default Api