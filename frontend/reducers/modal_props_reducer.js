import { OPEN_MODAL } from '../actions/modal_actions';

export default function modalPropsReducer(state = null, action) {
    switch (action.type) {
        case OPEN_MODAL:
            if (action.props){
                return action.props;
            } else {
                return state;
            }
        default:
            return state;
    }
}