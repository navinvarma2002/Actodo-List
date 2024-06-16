import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
function SignUp(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername,seteusername] = useState()
    const [epassword,setepassword] = useState()

   
    function handleUserInput(evt)
    {

        seteusername(evt.target.value)

    }
    
    function handlePasswordInput(evt)
    {

        setepassword(evt.target.value)


    }


    function AddUser()
    {

        setusers([...users,{username:eusername,password:epassword}])
        navigate("/")
    }

    return (
    <div>
        <div className="bg-white p-10 border rounded-md">

            <h1 className="text-3x1 font-medium">Hey Hi</h1>
            <p>I help you manage your activities after you login :)</p>

            <div className="flex flex-col gap-2 my-2">

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="username" onChange={handleUserInput}></input>

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="password" onChange={handlePasswordInput}></input>

                <input type="text" className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="confirm password"></input>

                <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={AddUser}>
                    SignUp
                </button>

                <p>Alredy have an account?<Link to={"/"} className="underline" >Login</Link></p>
            </div>

        </div>


    </div>)

}

export default SignUp