import React from 'react';

class AddChannelForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            server_id: this.props.serverId
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const newChannel = Object.assign({}, this.state);
        this.props.createChannel(newChannel).then(() => this.props.closeModal());
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    render() {
        return(
            <div className="add-channel-form">
                <h1>CREATE TEXT CHANNEL</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="channel-form-name">
                        <label>
                            <span>Channel Name</span>    
                            <span className="channel-form-name-err">{}</span>
                            <input 
                                type="text" 
                                className="channel-form-input"
                                value={this.state.name}
                                onChange={this.handleInput('name')}
                            />
                        </label>    
                    </div>  
                    <div className="form-bottom">
                        <div className="channel-form-back" onClick={() => this.props.closeModal()}>
                            <span>Cancel</span>
                        </div>
                        <button className="channel-form-submit">
                            Create Channel
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddChannelForm;