import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import MemberList from './components/MemberList'



function App() {

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Emily",
      email: "emily@gmail.com",
      role: "Web Developer"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <Form addNewMember={addNewMember} />
      <MemberList memberlist={members} />
    </div>
  );
}

export default App;
