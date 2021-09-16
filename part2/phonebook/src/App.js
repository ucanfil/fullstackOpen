import React, { useEffect, useState } from 'react';
import Notification from './components/Notification';
import Person from './components/Person';
import PersonsForm from './components/PersonsForm';
import Search from './components/Search';
import personsService from './services/persons';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [filterBy, setFilterBy] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [notification, setNotification] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    personsService.getPersons()
      .then(persons => setPersons(persons));
  }, []);

  const handleFilterBy = (e) => setFilterBy(e.target.value.toLowerCase());
  const handleChange = (id) => setPersons(persons.filter(person => person.id !== id));

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} error={error} />
      <Search filterBy={filterBy} handleFilterBy={handleFilterBy} />
      <PersonsForm
        persons={persons}
        setPersons={setPersons}
        newName={newName}
        newPhone={newPhone}
        setNewName={setNewName}
        setNewPhone={setNewPhone}
        setNotification={setNotification}
        setError={setError}
      />
      <h2>Numbers</h2>
      {persons
        .filter(person => person.name.toLowerCase().includes(filterBy))
        .map(person => (
          <Person
            key={person.name}
            person={person}
            handleChange={handleChange}
            setNotification={setNotification}
            setError={setError}
          />
        ))
      }
    </div>
  )
}

export default App;
