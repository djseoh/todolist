import React from 'react';


class ToDoCard extends React.Component{
    
    onTermDelete = event => {
        this.props.onFormDelete(this.props.thiskey)
        event.preventDefault();
    }
    render() {
        return (
            <div className='item'>
                <h1 className='header'>
                   {this.props.item}
                </h1>                                    
                <div>
                    <form onSubmit={this.onTermDelete}>
                        <button className='ui right floated red basic button' type='submit'>Done</button>
                    </form>
                </div>

            </div>
        )
    }
}

export default ToDoCard;