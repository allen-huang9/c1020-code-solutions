import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state: ', this.state.email);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        Email:
        <input type="text" value={this.state.email} onChange={this.handleChange}></input>
        <button>Submit</button>
      </form>
    );
  }
}

const newsLetterForm = <NewsletterForm />;

ReactDOM.render(newsLetterForm, document.querySelector('#root'));
