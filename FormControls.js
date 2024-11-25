import React, { Component } from "react";

export class FormControls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city:"vijayawada"
    };
  }

 
  holdTextArea=(event)=>{
    this.setState({
      firstName:event.target.value

    })

  }
  
  holdText=(event)=>{
    this.setState({
      email:event.target.value

    })

  }
 

  holdcity=(event)=>{
    this.setState({
      city:event.target.value

    })

  }
  holdData=(event)=>
  {
    alert(`${this.state.firstName} ${this.state.email}  ${this.state.city}`)
    event.preventDefault()
  }


  render() {
      const {myfirstName,myemail,mycity}=this.state
      return (
        <form onSubmit={this.holdData}>
          <div><h1>TextBox,Button,Option,Area</h1>
          <hr></hr>
          <p> firstname <input type="text" value={myfirstName} onChange={this.holdTextArea}>
          </input>
          </p>
          <p> email <input type="text" value={myemail} onChange={this.holdText}>
          </input>
          </p>
         
          <p> Select City <select value={mycity} onChange={this.holdcity}>
          
              <option>Guntur</option>
              <option>Vijayawada</option>
              <option>Hyderabad</option>
            </select>
  </p>
          <button>Submit</button>
          </div>
          </form>
    )
  }
}

export default FormControls;
