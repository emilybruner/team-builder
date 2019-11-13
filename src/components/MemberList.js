import React from 'react';

const MemberList = props => {
    return (
        <div>
            {props.memberlist.map(member => (
                <div key={member.id}>
                    <h2>Member Info</h2>
                    <p>{member.name}</p>
                    <p>{member.email}</p>
                    <p>{member.role}</p>
                </div>
            ))}
        </div>
    )
}

export default MemberList;