
import './App.css';
import {Component} from 'react'

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {username: '', newUsername: '', inputValue: []}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.finishAll = this.finishAll.bind(this);
  }

  handleChange(event) {
    this.setState({username: event.target.value});
  }

  handleSubmit(event) {
    this.setState({newUsername: this.state.username})
    event.preventDefault();
  }

  onKeyUp(event) {
    if (event.charCode === 13) {
      this.setState({ inputValue: [...this.state.inputValue, event.target.value] });
    }
  }

  deleteListItem(event, index) {
    let array = [...this.state.inputValue]
    array.splice(index,1)
    this.setState({inputValue: array})
  }

  finishAll() {
    this.setState({inputValue: []})
  }

  render () {
    let itemList = this.state.inputValue.map((item, index) => <li key={index} onClick={(event) => this.deleteListItem(event, index)}>{item}</li>)
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
      <label htmlFor="addItem">Add Item:</label>
      <input type="text" name="addItem" onKeyPress={this.onKeyUp}/>
      <ul>
        {itemList}
      </ul>
      <div>Finish all tasks?</div>
        <button onClick={this.finishAll}>Finish All</button>
    </>
    );
  }
}

export default App;



