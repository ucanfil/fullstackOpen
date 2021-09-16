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

const editExisting = async (newPerson) => {
    const ifExists = axios.get(`${baseUrl}/${newPerson.id}`).then(response => response.data.id);

    if (ifExists) {
        const request = axios.put(`${baseUrl}/${newPerson.id}`, newPerson);
        return request.then(response => response.data);
    }
}

export default {
    getPersons,
    addNew,
    deletePerson,
    editExisting
};
