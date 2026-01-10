import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Landing from "./pages/Landing";
import { useState } from "react";
import Forget from "./pages/Forget";

function App()
{

  const [users,setusers] = useState(
    [
        {
            username:"dinesh",
            password:"123"
        }
    ]
)

  return(
    <div>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers}/>}></Route>
    <Route path='/signup' element={<Signup users={users} setusers={setusers}/>}></Route>
    <Route path='/landing' element={<Landing/>}></Route>
     <Route path='/forget' element={<Forget users={users} setusers={setusers}/>}></Route>
    </Routes>
    </BrowserRouter>
  </div>
  )
}

export default App;
