import {useNavigate} from "react-router-dom";
export default {
    overAll: async (userId) => {
        const url = `http://localhost:3000/database/${userId}`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    },

    roomData: async (userId,roomId) => {
        const url = `http://localhost:3000/database/${userId}/${roomId}`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    },
    roomSensorData: async (userId,roomId, sensor) => {
        const url = `http://localhost:3000/database/${userId}/${roomId}/${sensor}`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    },
    registerData: async (body) => {
        const url = `http://localhost:3000/api/auth/register/`
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return await res.json();
        } else
            return `HTTP error: ${res.status}`
    },
    loginData: async (body) => {
        const url = `http://localhost:3000/api/auth/login/`
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (res.ok) {
            return await res.json();
        } else
            return `HTTP error: ${res.status}`
    },
    stringToArray: async (string) => {
        try {
            const arrayData = JSON.parse(string);
            if (Array.isArray(arrayData)) {
                return arrayData;
            } else {
                console.log('The parsed data is not an array.');
            }
        } catch (error) {
            console.error('An error occurred while parsing the data:', error);
        }
    }
}