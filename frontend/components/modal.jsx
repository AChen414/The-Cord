import React from 'react';
import { connect } from 'react-redux';
import AddServerFormContainer from './servers/add_server_form_container';
import { closeModal } from '../actions/modal_actions';

const Modal = ({modal, closeModal}) => {
    if (!modal) {
        return null;
    };
    let component;
    switch(modal) {
        case 'Add Server':
            component = <AddServerFormContainer />;
            break;
        default:
            return null;
    };
    return(
        <div className="modal-background" onClick={() => closeModal()}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
};

const mSTP = state => {
    return {
        modal: state.ui.modal
    };
};

const mDTP = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
    };
};

export default connect(mSTP, mDTP)(Modal);