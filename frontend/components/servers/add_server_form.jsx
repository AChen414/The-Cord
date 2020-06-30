import React from 'react';

class AddServerForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            name: '',
            ownerId: this.props.currentUser
        };
    };

    serverAbbreviation(serverName) {
        let abbreviated = '';
        let serverNameArr = serverName.split(' ');
        serverNameArr.forEach( (name) => {
            abbreviated += name[0];
        });
        return abbreviated;
    }

    handleInput(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newServer = Object.assign({}, this.state);
        this.props.createServer(server).then(() => this.props.closeModal());
    }

    render() {
        return(
            <div className="add-server-form">
                <h1>CREATE YOUR SERVER</h1>
                <p>By creating a server, you will have access to free text chat to use amongst your friends</p>
                <form onSubmit={this.handleSubmit}>
                    <div className="server-form-name">
                        <label>
                            <span>SERVER NAME</span>
                            <span className="server-form-name-error">{}</span>
                            <input 
                                type="text"
                                value={this.props.currentUser.username}
                                onChange={this.handleInput('name')}
                                className="server-form-input"
                            />
                        </label>
                    </div>
                    <div className="form-bottom">
                        <div className="server-form-back" onClick={() => this.props.closeModal()}>
                            BACK
                        </div>
                        <button className="server-form-submit">
                            Create
                        </button>
                    </div>
                </form>
            </div>
        )
    };
};

export default AddServerForm;