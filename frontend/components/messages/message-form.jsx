import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleChange(type) {
        return e => {
            this.setState({ [type]: e.currentTarget.value });
        }
    }

    render() {
        return(
            <div className='message-form'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        onChange={this.handleChange('body')}
                        value={this.state.body}
                        className="message-form-body"
                        placeholder="Message"
                    />
                    <input type="submit" className="message-form-input"/>
                </form>
            </div>
        )
    }
}

export default MessageForm;