import { useState } from "react"
import ToDoItem from "./ToDoitem"



function ToDoList(props){

    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr


    return(<div className="bg-[#2C3532] border rounded-md p-2 flex-grow">
        <h1 className="text-2xl font-medium text-white">Today's Activity</h1>
        {activityArr.length===0?<p className="text-white">You haven't added any Activity yet</p>:"" }
       
        {
            activityArr.map(function(item,index){

              return <ToDoItem id= {item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr = {setActivityArr}/>
            })
        }
        
       
    </div>)
}

export default ToDoList