import './Table.css'
import React, { useState } from 'react';


const Table = ({ data }) => {
  const[search,setSearch] = useState('')
  
  
  
    return (
    <>
    <input type='text' value={search} onChange={(e) => setSearch(e.target.value)}/>
    <span>🔎</span>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>DOB</th>
          <th>Height (Inches)</th>
          <th>Weight(Pounds)</th>
          <th>Occupation</th>
        </tr>
      </thead>
      <tbody>
        {data.filter((person) =>
        person.firstName.includes(search) ||
        person.occupation.includes(search)
        )
        
        .map((person) => {
          return (
            <tr>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.gender}</td>
              <td>{person.dob}</td>
              <td>{person.height}</td>
              <td>{person.weight}</td>
              <td>{person.occupation}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
        </>
  );
};

export default Table;
