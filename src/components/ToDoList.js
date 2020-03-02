import React from 'react';
import ToDoCard from './ToDoCard'

class ToDoList extends React.Component {

    state = {key: null}
    
    onFormDelete = thisKey => {
        this.setState({ key: thisKey }, () => this.props.onFormDelete(this.state.key))
    }
    render(){
        const listArray = this.props.listArray
        const toDoListArray = (listArray.map( (list, index) => {    
            return(
                <ToDoCard
                    onFormDelete={this.onFormDelete}
                    thiskey={index}
                    key={index}
                    item={list}
                />
            )   
        }))
        return (
            <div className='ui two cards'>
                <div className='ui card'>
                    <h2 className='ui block header'>Things to do</h2>
                    <div className='ui divided list'>
                        {toDoListArray}
                    </div>                
                </div>
                <div className='ui card'>
                    <h2 className='ui block header'>Things I've done</h2>
                    <div className='ui divided list'>
                    </div>                
                </div>
            </div>
        )
    }
}

export default ToDoList