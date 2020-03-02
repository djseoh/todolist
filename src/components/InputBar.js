import React from 'react';


class InputBar extends React.Component {

    state = {term: ''}

    onFormSubmit = event => {
        this.props.onTermSubmit(this.state.term)
        event.preventDefault();
        this.setState({term: ''})
    };


    onInputChange = event => {
        this.setState({term: event.target.value})
    }

    render() {
        return (
            <div className='item'>
                <form className='ui huge input' onSubmit={this.onFormSubmit}>
                    <input 
                        value={this.state.term}
                        type ='text'
                        placeholder='What to do?'
                        onChange={this.onInputChange}
                    />
                    <button className='ui teal basic button' type='submit'>add to list</button>
                </form>
            </div>
        )
    }
}

export default InputBar;