import React, { Component } from 'react';

export class Multictrls extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fname: '',
      mname: '',
      lname: '',
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value }); // Fixed `setState`
  };

  showData = (e) => {
    e.preventDefault(); // Ensure default form submission is prevented
    alert(`${this.state.fname} <---> ${this.state.mname} ${this.state.lname}`);
  };

  clear = () => {
    this.setState({
      fname: '',
      mname: '',
      lname: '',
    });
  };

  render() {
    return (
      <div>
        <h2>Multicontrols Form</h2>
        <form>
        
            
            <input
              type="text"
              name="fname"
              value={this.state.fname}
              onChange={this.changeHandler}
            />
          
          
            
            <input
              type="text"
              name="mname"
              value={this.state.mname}
              onChange={this.changeHandler}
            />
          
          
            
            <input
              type="text"
              name="lname"
              value={this.state.lname}
              onChange={this.changeHandler}
            />
          
          <div>
            <input type="submit" onClick={this.showData} value="Submit" />
            <input type="button" onClick={this.clear} value="Clear" />
          </div>
        </form>
      </div>
    );
  }
}

export default Multictrls;
