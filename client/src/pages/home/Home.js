import React from 'react';
import './Home.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import AppHeader from '../../components/header/AppHeader';
import FilterBar from '../../components/filterBar/FilterBar';
import AppMain from '../../components/main/AppMain';
import FriendsList from '../../components/friendsList/FriendsList';
import ChannelList from '../../components/channels/channelList/ChannelList';
import ActiveUserList from '../../components/activeUserList/ActiveUserList';
import UserBar from '../../components/user/userBar/UserBar';
import SearchBar from '../../components/search/searchBar/SearchBar';

function Home() {

    return (
        <div className='Home'>
            <Row >
                <AppHeader />
            </Row>
            <Row className="flex-fill">
                <ChannelList />
                <div className="d-flex flex-column">
                    <SearchBar />
                    <FriendsList />
                    <UserBar />
                </div>
                <Col className="d-flex flex-column">
                    <FilterBar />
                    <Row className="flex-fill">
                        <AppMain />
                        <ActiveUserList />
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default Home;
