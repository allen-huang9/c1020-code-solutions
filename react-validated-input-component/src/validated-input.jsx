import React from 'react';

class ValidateInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      isValid: null
    };
    this.handlePassword = this.handlePassword.bind(this);
  }

  handlePassword(event) {
    event.preventDefault();

    const { validPassword, reason } = this.isValidPassword(event.target.value);

    this.setState({
      password: event.target.value
    });
  }

  isValidPassword(event) {
    const check = {
      validPassword: false,
      reason: ''
    };

    return check;
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Password
            <input type="text" value={this.state.password} onChange={this.handlePassword}></input>
          </label>
        </form>
      </div>
    );
  }
}

export default ValidateInput;
