import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MemberDetail = () => {
    const { memberId } = useParams();
    const [member, setMember] = useState({});
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${memberId}`)
        .then(res => res.json())
        .then(data => setMember(data));
    }, []);

    const {username, name, email, phone, website} = member;
    return (
        <div>
            <h1>User name: {username}</h1>
            <h2>Name: {name}!</h2>
            <h3>Email: {email}</h3>
            <h3>Phone: {phone}</h3>
            <h3>Website: {website}</h3>
            
        </div>
    );
};

export default MemberDetail;