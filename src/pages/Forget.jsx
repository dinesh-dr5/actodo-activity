import React, { useState } from 'react'

const Forget = ({ users, setusers }) => {

    const [hide, setHide] = useState(true)
    const [fuser, setFuser] = useState()


    const forget = () => {

        var tempor = users.forEach(function (item) {

           if(item.username==fuser){
            setusers([...users,{}])
           }
        })

    }

    return (
        <div>
            <div >
                <input onChange={(e) => setFuser(e.target.value)} type="text" className='border border-black m-2' />
                <button onClick={forget}>Forget</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Forget