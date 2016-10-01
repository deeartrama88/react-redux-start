import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as news_actions from '../actions/news/news_actions'
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import { Link, browserHistory } from 'react-router'

class News_list extends Component {
    getRundom(){
        return Math.random() * (1000000 - 1) + 1;
    }
    render(){
        let list = this.props.news.map( (news_each) => {
            return (
                <li key={news_each.id}>
                    {news_each.title}
                    <button onClick={ () => this.props.remove_news(news_each) }>remove item</button>
                </li>
            );
        })
        return (
            <div>
                <ul>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={500}
                        transitionLeaveTimeout={300}>
                        {list}
                    </ReactCSSTransitionGroup>
                </ul>
                <button onClick={ () => this.props.add_news({
                    id: this.getRundom(),
                    title: 'new News HOla la',
                    date: this.getRundom()
                })}> add news </button>
                <button onClick={ () => this.props.get_news() }>get user</button>
                <button onClick={ () => this.props.clearList() }>clear list</button>
                <button onClick={ () => browserHistory.push('/open')}> go to open </button>
                <Link to="open"></Link>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        news: state.news
    };
}
function mathDispatchToProps(dispatch) {
    return bindActionCreators({
        add_news: news_actions.addNew,
        get_news: news_actions.getUser,
        remove_news: news_actions.removeNews,
        clearList: news_actions.clearList
    }, dispatch);
}

export default connect(mapStateToProps, mathDispatchToProps)(News_list);
