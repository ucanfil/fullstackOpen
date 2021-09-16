import personsService from "../services/persons";

const PersonsForm = ({
    persons,
    setPersons,
    newName,
    newPhone,
    setNewName,
    setNewPhone
}) => {
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
            number: newPhone
        }

        setNewName('');
        setNewPhone('');

        const found = persons.find(person => person.name.toLowerCase() === newPerson.name.toLowerCase());


        if (found) {
            const copy = {...newPerson, id: found.id};

            if (window.confirm(`Would you like to edit phone number for ${copy.name}?`)) {
                personsService
                    .editExisting(copy)
                    .then(data => {
                        setPersons(persons.map(person => {
                            if (person.id === data.id) {
                                person.number = data.number;
                            }

                            return person;
                        }))
                    })
                    .catch(err => console.log(err));
            }

            return;
        }

        personsService.addNew(newPerson)
            .then(data => {
                setPersons(persons.concat(data));
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
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
    );
};

export default PersonsForm;
