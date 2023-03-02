import React, { useState } from 'react';

const AddPerson = ({addNewPerson}) => {
    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')

    
    function handleSubmit(event){
        event.preventDefault();
        let newPerson ={
            id: 1234,
            firstName: firstName,
            lastName: lastName,
            gender: "N/A",
            dob: 'N/A',
            height: 0,
            weight: 0,
            eyeColor: "N/A",
            occupation: "N/A",
        }
        addNewPerson(newPerson) 
    }
    
    return ( 
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter First Name...' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                <input type='text' placeholder='Enter Last Name...' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                <button type='submit'>ADD</button>
            </form>
     );
}
 
export default AddPerson;