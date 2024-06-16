import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) 
{

    const navigate = useNavigate()
    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()
    const [registreduser,setRegistreduser] = useState(true)
   
    const users = props.users

    

    function Checkuser() 
    {
        var userfound = false

        users.forEach(function(item){

          
            if(item.username === eusername && item.password === epassword)
                {
                    console.log("login Succesfull")
                    userfound=true
                    navigate("/landing",{state:{user:eusername}})
                }
               
        })

        if(userfound===false)
            {
                console.log("login Faild")
                setRegistreduser(false)
            }

    }

    function handleUserInput(evt)
    {

        seteusername(evt.target.value)

    }
    
    function handlePasswordInput(evt)
    {

        setepassword(evt.target.value)


    }



    return (<div>
        <div className="bg-white p-10 border rounded-md">

            <h1 className="text-3x1 font-medium">Hey Hi</h1>
            
            {registreduser?<p>Login Here :)</p>:<p className="text-[#D92525]">Please SignUp you have Entered Wrong password or username</p>}

            <div className="flex flex-col gap-2 my-2">

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUserInput}></input>

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlePasswordInput}></input>

                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={Checkuser}>
                    Login
                </button>

                <p>Don't have an account?<Link to={"/SignUp"} className="underline" >SignUp</Link></p>
            </div>

        </div>


    </div>)
}

export default Login