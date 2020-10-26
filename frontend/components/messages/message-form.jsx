import React from 'react';

class MessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '',
            author_id: this.props.currentUserId,
            channel_id: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.setState({ channel_id: this.props.channel_id })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const message = Object.assign({}, this.state)
        if (message.body.length) this.props.createMessage(message);
        this.setState({ body: '' });
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
                        placeholder={'Message #' + this.props.channelName}
                    />
                    <input type="submit" className="message-form-input"/>
                </form>
            </div>
        )
    }
}

export default MessageForm;