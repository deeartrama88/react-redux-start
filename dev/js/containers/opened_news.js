import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class OpenedNews extends Component {

    render() {
        return (
            <div>
                <h1>hello this is open news page</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    }
}

function mathDispatchToProps(dispatch) {
    return bindActionCreators({

    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(OpenedNews);
