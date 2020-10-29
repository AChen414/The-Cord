import { OPEN_MODAL } from '../actions/modal_actions';

export default function modalPropsReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return action.props
        default:
            return state;
    }
}