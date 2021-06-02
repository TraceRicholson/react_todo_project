import {Component} from 'react'
import { Button } from '@material-ui/core';

class TaskList extends Component {

  constructor (props) {
    super(props)
    this.state = { inputValue: []}


    this.onKeyUp = this.onKeyUp.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.finishAll = this.finishAll.bind(this);
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

      <label htmlFor="addItem">Add Item:</label>
      <input type="text" name="addItem" onKeyPress={this.onKeyUp}/>
      <ul>
        {itemList}
      </ul>
      <div>Finish all tasks?</div>
        <Button color="primary" onClick={this.finishAll}>Finish All!</Button>
    </>
    );
  }
}



export default TaskList;