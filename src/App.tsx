import React, {useEffect, useState} from 'react';
import './App.scss';
import Form from "./component/Form";
import SortComponent from "./component/SortComponent";
import ListItem from "./component/ListItem";

function App() {
  const [sortValue, setSortValue] = useState(0)

  return (
    <div className="wrapper">
      <div className="title">
        <h1>To Do List</h1>
      </div>
      <Form/>
      <SortComponent sortValue={sortValue} setSortValue={setSortValue}/>
      <ListItem sortValue={sortValue}/>
    </div>
);
}

export default App;
