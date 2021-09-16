import personsService from '../services/persons';

const Person = ({ person, handleChange, setNotification, setError }) => {
    const {name, number, id} = person;

    const handleDelete = (id) => {
        if (window.confirm(`Delete ${person.name}`)) {
            personsService
                .deletePerson(id)
                .then(response => {
                    if (response.status === 200) {
                        handleChange(id);
                        setNotification(`${person.name} has been successfully deleted`);
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
                })
        }
    };

    return (
        <div>
            <span>{name} {number} </span>
            <button onClick={() => handleDelete(id)}>delete</button>
        </div>
    );
};

export default Person;
