import React, {Component} from 'react';
import {connect} from 'react-redux';

class UserDetail extends Component {

    render() {
        if(!this.props.user){
            return(<div><h4>select user...</h4></div>);
        }
        return (
            <div>
                <img src={this.props.user.thumbnail}
                     alt={this.props.user.first}/>
                <h2>{this.props.user.first} {this.props.user.last}</h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Desctiption: {this.props.user.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.activeUser
    }
}

export default connect(mapStateToProps)(UserDetail);