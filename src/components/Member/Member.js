import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Member = (props) => {
    const {username, email, id} = props.member;
    const memberStyle = {border: "1px solid black", padding: "10px", margin: "10px 0"};
    const history = useHistory();
    function handleClick(friendId){
        history.push(`/member/${friendId}`);
    }
    return (
        <div style={memberStyle}>
            <h4>ID: {Math.round(id + Math.random()*(id*1000))}</h4>
            <h3>userName: {username}</h3>
            <h4>Email: {email}</h4>
            <Link to={`/member/${id}`}>
                <button>See detail about {username}</button>
            </Link>
            <button onClick={() => handleClick(id)} >Click me</button>
        </div>
    );
};

export default Member;