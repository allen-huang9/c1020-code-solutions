import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isValid: null
    };
    this.handlePassword = this.handlePassword.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    // if() {
    //   this.setState({
    //     isValid: true
    //   });
    // } else {
    //   this.setState({
    //     isValid: false
    //   });
    // }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Password
          <input type="text" value={this.state.password} onChange={}></input>
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default ValidateInput;
