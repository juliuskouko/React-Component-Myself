import React from "react"


//  

const Header =(props)=>{
    return (
        <>
            <h1>Welcome, i am {props.name}</h1>
            <p>i am a {props.profession} at {props.place}</p>
            
        </>
    )

}
export default Header