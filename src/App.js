import React from 'react';
import './App.css';
import Menu from './components/Menu';
import ToDoList from './components/ToDoList';

class App extends React.Component {

  // eventually need to add backend

  state = { toDoArray: []}
  
  onTermSubmit = word => {
    const wordList = this.state.toDoArray.slice()
    wordList.push(word)
    this.setState({toDoArray: wordList})
  }

  onFormDelete = i => {
    const modifiedWordList = this.state.toDoArray.slice()
    modifiedWordList.splice(i, 1)
    this.setState({toDoArray: modifiedWordList})
  }

  render() {
    return (
      <div>
        <h1 className='ui center aligned teal header'>TO DO LIST</h1>
        <div className='ui section divider'></div>
        <Menu onTermSubmit = {this.onTermSubmit} />
        <div className='ui hidden divider'></div>
        <ToDoList onFormDelete={this.onFormDelete} listArray={this.state.toDoArray}/>
      </div>
    )
  }
}

export default App;
