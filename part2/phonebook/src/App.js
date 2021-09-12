import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas"
    }
  ]);

  const [newName, setNewName] = useState('');

  const handleInput = (e) => {
    setNewName(e.target.value);
  }

  const handleAddNewName = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      // date: new Date().toISOString(),
      // id: persons.length
    }
    setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleAddNewName}>
        <label>
          Name: <input type="text" value={newName} onChange={handleInput} />
        </label>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name}</div>)}
    </div>
  )
}

export default App;
