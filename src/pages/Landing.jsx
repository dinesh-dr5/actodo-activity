import Header from "../components/Header"
import Card from "../components/Card"
import TodoContainer from "../components/TodoContainer"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"


function Landing()
{
    const data = useLocation()

    const [time ,setTime]=useState(new Date())
   
    useEffect(()=>{
      setInterval(()=>setTime(new Date()),1000)
    },[])
  

    return(
        <div className="bg-black p-9 md:h-[740px]">
      <div className="bg-[#EFEFEF] p-2 border rounded-md">
       
        <Header username={data.state.user}/>
       
        <div className="flex justify-between gap-7 my-5 flex-wrap">
          <Card bgcolor={"#8272DA"} title={"2k's"} subtitle={"PUDUCHERRY"} />
          <Card bgcolor={"#FD6663"} title={time.toLocaleDateString()} subtitle={time.toLocaleTimeString()} />
          <Card bgcolor={"#FCA201"} title={"Built Using"} subtitle={"React"} />
        </div>
      
        <TodoContainer/>
      </div>

    </div>
    )
}

export default Landing 