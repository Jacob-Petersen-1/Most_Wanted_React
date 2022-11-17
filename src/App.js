import React, { useState } from 'react';
import './App.css';
import {DATA} from '../src/data'
//Component Imports
import NavBar from './Components/NavBar/NavBar';
import Table from './Components/Table/Table';
import AddPerson from './Components/AddPerson/AddPerson';

function App() {
const [data,setData] = useState(DATA)

function addNewPerson (entry){
  let tempData = [entry,...data];
  setData(tempData)
} 



  return (
    <div className="App">
      <NavBar/>
      <Table data={data}/>
      <AddPerson addNewPerson={addNewPerson}/>

    </div>
  );
}

export default App;
