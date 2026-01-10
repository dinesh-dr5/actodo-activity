import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) {
    const navigate = useNavigate()
    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [ruser, setRuser] = useState(true)
    const [show, setShow] = useState(true)

    const users = props.users

    function checkUser() {
        var userfound = false

        users.forEach(function (item) {
            if (item.username === eusername && item.password === epassword) {

                console.log("Login Successfull")
                userfound = true
                navigate("/landing", { state: { user: eusername } })
            setEusername('')
            setEpassword('')

            }
        })

        if (userfound === false) {
            console.log("login Failed")
            setRuser(false)
            setEusername('')
            setEpassword('')
        }


    }

    return (
        <div className="bg-black flex p-10 h-[740px] justify-center items-center">
            <div className="bg-[#EFEFEF] p-5 border rounded-md w-[350px] ">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                {ruser ? <p>I help you manage your activities after you login :)</p> : <p className="text-red-500">Please Sign Up Before you Login!!</p>}


                <div className="flex flex-col gap-2 my-2">
                    <input
                        type="text"
                        value={eusername}
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={(evt) => setEusername(evt.target.value)}
                    />

                   <div className="flex w-52 border-black p-1 bg-transparent border rounded-md">
                        <input
                        value={epassword}
                            type={show ? "password" : "text"}
                            className="focus:outline-none w-40 bg-transparent"
                            placeholder="password"
                            onChange={(evt) => setEpassword(evt.target.value)}
                        />
                        <button onClick={() => setShow(!show)} >{show ? "show" : "hide"}</button>
                    </div>
                    <button disabled={eusername.length === 0 && epassword.length === 0} className="bg-[#8272DA] hover:text-white cursor-pointer w-24 p-1 rounded-md" onClick={checkUser}>
                        Login
                    </button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline text-red-400 hover:font-bold">Sign Up</Link>  </p>
                </div>
            </div>
        </div>
    )
}

export default Login