import React, { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: "143-8989283"
    }
  ]);

  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  }

  const handlePhoneInput = (e) => {
    setNewPhone(e.target.value);
  }

  const handleAddNewName = (e) => {
    e.preventDefault();
    const newPerson = {
      name: newName,
      phone: newPhone,
      // date: new Date().toISOString(),
      // id: persons.length
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
      {persons.map(person => <div key={person.name}>{person.name} {person.phone}</div>)}
    </div>
  )
}

export default App;
