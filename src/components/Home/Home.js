import React, { useEffect, useState } from 'react';
import Member from '../Member/Member';

const Home = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setMembers(data));
    }, [])
    return (
        <div>
            <h2>Total member: {members.length}</h2>
            {
                members.map(member => {
                    return <Member member={member} />
                })
            }
        </div>
    );
};

export default Home;