import personsService from '../services/persons';

const Person = ({ person, handleChange }) => {
    const {name, number, id} = person;

    const handleDelete = (id) => {
        if (window.confirm(`Delete ${person.name}`)) {
            personsService
                .deletePerson(id)
                .then(response => {
                    if (response.status === 200) {
                        handleChange(id);
                    }
                })
                .catch(err => console.log(err))
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
