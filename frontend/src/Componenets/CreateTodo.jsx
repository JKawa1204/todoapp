import { useState } from "react";

export function CreateTodo(){

    const [ title, settitle]=useState("");
    const [description,setdescription]=useState("");
    
    return <div>

        <input type = 'text' placeholder = 'title' onChange={
            function(e){
            settitle(e.target.value);
            }
        }></input>
        <br />
        <input type = 'text' placeholder = 'description' onChange={
            function(e){
                setdescription(e.target.value);
            }
        }></input>
        <br />
        <button onClick={()=>
        fetch("http://localhost:3001/todos",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers:{
                'Content-Type':"application/json"
            }
        })
        .then(async function(res){
            const json = await res.json();
            alert("Todo added.")
        })
        }> Add a todo </button>

    </div>
}