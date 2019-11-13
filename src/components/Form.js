import React, { useState } from 'react';

const Form = props => {
    const [member, setMember] = useState({
        name: "",
        email: "",
        role: "",
    })

    const handleChanges = e => {
        setMember({ ...member, [e.target.name]: e.target.value })
    }


}