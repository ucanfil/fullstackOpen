import React, { useState } from 'react';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Search from './components/Search';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [filterBy, setFilterBy] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

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
