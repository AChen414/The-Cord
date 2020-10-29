import React from 'react';

class EditMessageForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            body: '',
            author_id: null,
            channel_id: null
        }
        console.log(this.props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const updatedMessage = Object.assign({}, this.state);
        this.props.editMessage(updatedMessage).then(this.props.closeModal());
    }

    handleDelete(e) {
        console.log(this.props.messageId.id)
        this.props.deleteMessage(this.props.messageId.id);
        this.props.closeModal();
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    componentDidMount() {
        let currentMessage = this.props.messages[this.props.messageId.id];
        console.log(this.props.messages, this.props.messageId)
        this.setState({
            body: currentMessage.body,
            author_id: this.props.author.id,
            channel_id: currentMessage.channel_id,
            id: currentMessage.id
        })
    }

    render() {
        return(
            <div className="edit-message-form">
                <h1>Edit Message</h1>
                <h2 onClick={() => this.props.closeModal()}>X</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="message-form-edit">
                        <label>
                            <span>Message</span>
                            <span className="message-form-message-err">{}</span>
                            <input 
                                type="text"
                                className="edit-message-form-input"
                                value={this.state.body}
                                onChange={this.handleInput('body')}
                            />
                        </label>
                    </div>
                    <div className="form-bottom">
                        <div className="channel-form-back">
                            <span 
                                className="channel-form-delete"
                                onClick={this.handleDelete}
                            >
                                Delete Message
                            </span>
                        </div>
                        <button className="channel-form-submit">Update Message</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default EditMessageForm;