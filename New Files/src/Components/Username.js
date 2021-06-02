import {Component} from 'react'

class Username extends Component {
  constructor(props) {
    super(props)
    this.state = {username: '', newUsername: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    console.log(event)
    this.setState({newUsername: this.state.username})
    event.preventDefault();
  }

  render() {
    return (
      <>
      <form onSubmit={this.handleSubmit}>
      <label>
        Username:
        <input type="text"  name="username" value={this.state.username} onChange={this.handleChange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>
    <h1>Welcome, {this.state.newUsername}!</h1>
    </>

    )


  }
}

export default Username;