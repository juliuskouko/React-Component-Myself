// import React, { Component } from 'react'

import { Component } from "react";

// export default class DisplayAgain extends Component {
//     constructor(props) {
//         super(props)
//     }
//   render() {
//     return (
//         <React.Fragment>
//             <h1>this is a {this.props.tech} class</h1>
//             <h2>i enjoying {this.props.action} react</h2>
//             <p>it is really {this.props.mood}</p>
//         </React.Fragment>
//     )
//   }
// }
// export default DisplayAgain

// class DisplayAgain extends Component{
//   render(){
//     return (
//       <>
//         <h1>this is a class</h1>
//         <h2>i enjoying react</h2>
//         <p>it is really</p>
//       </>
//     )
//   }
// }
// export default DisplayAgain

// class Again extends Component {
//   render(){
//     return(
//       <>
//         <h1>this is a class</h1>
//         <h2>i enjoying react</h2>
//         <p>it is really</p>
//       </>
//     )
//   }
// }
// export default Again;



class TryAain extends Component {
  constructor(props){
    super(props.this)
  }
  render(){
    return(
      <>
        <h1>this is a {this.props.tech} class</h1>
        <p>it is really {this.props.feeling}</p>
        <p>i have been doing this for {this.props.num} months now</p>
      </>
    )
  }
}
export default TryAain;
