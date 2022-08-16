import React, { Component } from "react";

// function Home (){
//     return (
//         <h2>
//             this is a class
//             i enjoying react
//             it is really
//         </h2>
//     )
// }

class House extends Component{
    constructor(props){
        super(props.this)
    }
    render(){
        return(
            <>
                <h2>Welcome to {this.props.name}</h2>
                <p><h3>The only person that solves and attend to your {this.props.needs}.</h3></p>
                <h3>What do you {this.props.want}!</h3>
            </>
        )
    }
}


export default House