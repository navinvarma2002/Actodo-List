import Header from "../Components/Header"
import  Card from "../Components/card"
import ToDoContainer from "../Components/ToDoContainer"
import { useLocation } from "react-router-dom"

function Landing() {

    const data = useLocation()
    console.log(data.state.user)

    return (
 
        <div className="bg-black p-16">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">

            <Header username ={data.state.user}/>
            <div className="flex justify-between gap-7  my-5 flex-wrap">
            <Card bgcolor={"#7D6AA6"} title={"23"} subtitle={"12:25 PM"}/>
            <Card bgcolor={"#AABFB3"} title={"December"} subtitle={"chennai"}/>
            <Card bgcolor={"#78BF97"} title={"Built Using"} subtitle={"React"}/>
        
            </div>
            <ToDoContainer/>
            </div>

        </div>

)

}

export default Landing