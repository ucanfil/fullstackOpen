import personsService from "../services/persons";

const PersonsForm = ({
    persons,
    setPersons,
    newName,
    newPhone,
    setNewName,
    setNewPhone,
    setNotification,
    setError
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
                    .then(response => {
                        setPersons(persons.map(person => {
                            if (person.id === response.data.id) {
                                person.number = response.data.number;
                            }

                            return person;
                        }));

                        if (response.status === 200) {
                            setNotification(`${copy.name} has been successfully edited`);
                            setError(false);
                        }

                        setTimeout(() => {
                            setNotification(null);
                        }, 5000);
                    })
                    .catch(err => {
                        setNotification(`${err} occured`);
                        setError(true);

                        setTimeout(() => {
                            setNotification(null);
                        }, 5000);
                    });
            }

            return;
        }

        personsService.addNew(newPerson)
            .then(response => {
                if (response.status === 201) {
                    setNotification(`${newPerson.name} has been successfully added`);
                    setError(false);
                }

                setTimeout(() => {
                    setNotification(null);
                }, 5000);

                setPersons(persons.concat(response.data));
            })
            .catch((err) => {
                setNotification(`${err} occured`);
                setError(true);

                setTimeout(() => {
                    setNotification(null);
                }, 5000);
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
