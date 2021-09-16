import axios from 'axios';

const getPersons = async () => {
    const request = axios.get('http://localhost:3001/persons');

    return request.then(response => response.data);
}

const addNew = async (newPerson) => {
    const request = axios.post('http://localhost:3001/persons', newPerson)

    return request.then(response => response.data);
}

export default {
    getPersons,
    addNew
};
