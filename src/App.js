import './App.css';
import { Component } from 'react'
import Username from './Components/Username'
import TaskList from './Components/TaskList';
import Container from '@material-ui/core/Container';
import Paper from './Components/Paper'

class App extends Component {

  render() {
    return (
      <>
        <Container maxWidth="lg">
          <Username />
          <TaskList />

        </Container>

      </>
    );
  }
}

export default App;



