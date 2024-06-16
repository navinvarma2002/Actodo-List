import { useState } from "react"

function AddTodoForm(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr


    const [newactivity,setNewactivity] =  useState("")
 
    function handleChange(evt){

        setNewactivity(evt.target.value)
    }

    function addActivity(){

        setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
        setNewactivity("")
    }
    return(

        <div className="flex-col gap-3">
            <h1 className="text-2x1 font-medium">Manage Activities</h1>
            <input value={newactivity} onChange={handleChange} type="text" className="border-black p-1  bg-transparent" placeholder="Next Activity?"></input>
            <button  onClick={addActivity}      className="bg-black text-white p-1 border-black">Add</button>

        </div>
    )
}

export default AddTodoForm