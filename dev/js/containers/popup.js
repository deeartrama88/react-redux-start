import React, {Component} from 'react';
import {connect} from 'react-redux';
import {close_popup} from '../actions/popup/close_popup';
import {open_popup} from '../actions/popup/open_popup';
import {bindActionCreators} from 'redux';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

class Popup extends Component {

    render() {
        let component;
        let classGroup = this.props.popup ? 'popup open' : 'popup close';
        if(this.props.popup) {
         component = <div>
             <div className={classGroup}>
                 <h2>popup</h2>
                 <div className="name">name</div>
                 <button className="close_popup" onClick={() => this.props.close_popup() }>close popup</button>
             </div>
         </div>;
        }

        return (
            <div>
                <ReactCSSTransitionGroup
                    transitionAppear={true}
                    transitionName="example"
                    transitionAppearTimeout={300}
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                    >
                    {component}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        popup: state.popup
    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        close_popup: close_popup,
        open_popup: open_popup
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(Popup);
