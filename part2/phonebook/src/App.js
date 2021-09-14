import React, { useEffect, useState } from 'react';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Search from './components/Search';
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [notes, setNotes] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    console.log("effect");
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log("Promise fullfilled!");
        setPersons(response.data);
      });
  }, []);

  console.log(`render ${persons.length} persons`);

  const handleFilterBy = (e) => setFilterBy(e.target.value.toLowerCase());

  return (
    <div>
      <h2>Phonebook</h2>
      <Search filterBy={filterBy} handleFilterBy={handleFilterBy} />
      <PersonsForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
      />
      <h2>Numbers</h2>
      {persons
        .filter(person => person.name.toLowerCase().includes(filterBy))
        .map(person => <Person key={person.name} name={person.name} number={person.number} />)
      }
    </div>
  )
}

export default App;
