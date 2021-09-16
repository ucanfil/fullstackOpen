import React, { useEffect, useState } from 'react';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Search from './components/Search';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  useEffect(() => {
    personsService.getPersons()
      .then(persons => setPersons(persons));
  }, []);

  const handleFilterBy = (e) => setFilterBy(e.target.value.toLowerCase());
  const handleChange = (id) => setPersons(persons.filter(person => person.id !== id));

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
        .map(person => <Person key={person.name} person={person} handleChange={handleChange} />)
      }
    </div>
  )
}

export default App;
