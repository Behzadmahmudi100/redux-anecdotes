import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
    const response = await axios.get(baseUrl);

    return response.data;
}

const createNew = async (content) => {
    const anecObject = {content, votes : 0};

    const response = await axios.post(baseUrl, anecObject);
    return response.data;
}

const updateAnec = async ( id, object) => {
    const response = await axios.put(`${baseUrl}/${id}`, object)
    
    return response.data;
}

export default { 
    getAll,
    createNew,
    updateAnec
}