import axios from 'axios';

const baseUrl = "http://localhost:3001/persons";

const getPersons = async () => {
    const request = axios.get(baseUrl);

    return request.then(response => response.data);
}

const addNew = async (newPerson) => {
    const request = axios.post(baseUrl, newPerson)

    return request.then(response => response.data);
}

const deletePerson = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`)

    return request.then(response => response);
}

export default {
    getPersons,
    addNew,
    deletePerson
};
