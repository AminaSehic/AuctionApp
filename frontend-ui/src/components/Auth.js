import axios from 'axios';

const request = async (typeOfReq, urlReq, bodyReq = null) => {
    if (!["GET", "POST", "PUT", "DELETE", "PATCH"].includes(typeOfReq)) {
        console.log("Error");
    }
    // let HOST_URL = 'https://auctionapp-b.herokuapp.com/';
    let HOST_URL = 'http://localhost:8080/';
    const url = `${HOST_URL}${urlReq}`;
    let response = null;
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
    }
    if (typeOfReq === 'GET') {
        try {
            response = await axios.get(url, config);
            return response;
        } catch (error) {
            console.log('GET Error: ', error);
        }
    }
    if (typeOfReq === 'POST') {
        try {
            response = await axios.post(url, bodyReq, config);
            return response;
        } catch (error) {
            console.log('POST Error: ', error);
        }
    }
    if (typeOfReq === 'PUT') {
        try {
            response = await axios.put(url, bodyReq, config);
            return response;
        } catch (error) {
            console.log('PUT Error: ', error);
        }
    }
    if (typeOfReq === 'DELETE') {
        try {
            if (bodyReq) {
                response = await axios.delete(url, {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: window.localStorage.getItem('token'),
                    },
                    data: bodyReq,
                });
                return response;
            }
            response = await axios.delete(url, config);
            return response;
        } catch (error) {
            console.log('DELETE Error: ', error);
        }
    }
    if (typeOfReq === 'PATCH') {
        try {
            response = await axios.patch(url, bodyReq, config);
            return response;
        } catch (error) {
            console.log('PATCH Error: ', error);
        }
    }
};
export default request;