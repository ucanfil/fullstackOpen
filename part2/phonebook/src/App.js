import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filterBy, setFilterBy] = useState('');

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  }

  const handlePhoneInput = (e) => {
    setNewPhone(e.target.value);
  }

  const handleFilterBy = (e) => setFilterBy(e.target.value)

  const handleAddNewName = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      number: newPhone,
      id: persons.length
    }

    setNewName('');
    setNewPhone('');

    if (persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase())) {
      alert(`${newPerson.name} is already added to the phonebook`);
      return;
    }

    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <label>
          Filter shown by: <input type="text" value={filterBy} onChange={handleFilterBy} />
        </label>
      </div>
      <br />
      <form onSubmit={handleAddNewName}>
        <div>
          <label>
            Name: <input type="text" value={newName} onChange={handleNameInput} />
          </label>
        </div>
        <div>
          <label>
            Phone: <input type="text" value={newPhone} onChange={handlePhoneInput} />
          </label>
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.filter(person => person.name.includes(filterBy)).map(person => <div key={person.name}>{person.name} {person.number}</div>)}
    </div>
  )
}

export default App;
