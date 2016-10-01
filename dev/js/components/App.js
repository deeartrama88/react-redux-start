import React from "react";
require('../../scss/style.scss');
import UserList from '../containers/user-list';
import UserDetail from '../containers/user-detail';
import Counter from '../containers/counter';
import Popup from '../containers/popup';
import News from '../containers/news_list';
const App = () => (
    <div>
        <h2>Username list:</h2>
        <UserList />
        <hr/>
        <h2>User Detail:</h2>
        <UserDetail />
        <hr/>
        <Counter />
        <Popup />
        <News />
    </div>
);

export default App;
