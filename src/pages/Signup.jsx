import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Signup(props) {

    const navigate = useNavigate()
    const users = props.users
    const setusers = props.setusers

    const [eusername, setEusername] = useState("")
    const [epassword, setEpassword] = useState("")
    const [cpassword, setCpassword] = useState("")
    const [show, setShow] = useState(true)
    const [cshow, setCshow] = useState(true)

    const [ruser, setRuser] = useState(true)


    function addUser() {
        setusers([...users, { username: eusername, password: epassword }])
        if (epassword == cpassword) {
            navigate("/")
            setCpassword('')
            setEusername('')
            setEpassword('')
        }
        else {
            setRuser(false)
            setCpassword('')
            setEusername('')
            setEpassword('')
        }
    }


    return (
        <div className="bg-black p-10 flex h-[740px] justify-center items-center">
            <div className="bg-[#EFEFEF] p-5 border rounded-md w-[350px]">
                <h1 className="text-3xl font-medium">Hello..!!! </h1>
                <h1>{ruser ? <h1>Sign up here :)</h1> : <h1 className="text-red-500">does n't match your confirm password</h1>}</h1>

                <div className="flex flex-col gap-2 my-2">
                    <input
                        required
                        value={eusername}
                        type="text"
                        className="w-52 border-black p-1 bg-transparent border rounded-md"
                        placeholder="username"
                        onChange={(evt) => setEusername(evt.target.value)}
                    />
                    <div className="flex w-52 border-black p-1 bg-transparent border rounded-md">
                        <input
                            required
                            value={epassword}
                            type={show ? "password" : "text"}
                            className="focus:outline-none w-40 bg-transparent"
                            placeholder="password"
                            onChange={(evt) => setEpassword(evt.target.value)}
                        />
                        <button onClick={() => setShow(!show)} >{show ? "show" : "hide"}</button>
                    </div>

                    <div className="flex w-52 border-black p-1 bg-transparent border rounded-md">
                        <input
                            required
                            value={cpassword}
                            type={cshow ? "password" : "text"}
                            className="focus:outline-none w-40 bg-transparent"
                            placeholder="confirm password"
                            onChange={(evt) => setCpassword(evt.target.value)}
                        />
                        <button onClick={() => setCshow(!cshow)} >{cshow ? "show" : "hide"}</button>
                    </div>

                    <button disabled={eusername.length === 0 && epassword.length === 0 && cpassword.length === 0} className="bg-[#FCA201] hover:text-white cursor-pointer w-24 p-1 rounded-md" onClick={addUser}>
                        Sign Up
                    </button>

                    <p>Already have an account? <Link to={"/"} className="underline text-red-400 hover:font-bold">Login</Link>  </p>

                </div>
            </div>
        </div>)
}

export default Signup