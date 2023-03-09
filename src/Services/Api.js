
export default {
    overAll: async () => {
        const url = `http://localhost:3005/data/overall`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    },

    roomData: async (room) => {
        const url = `http://localhost:3005/data/${room}`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    },
    roomSensorData: async (room, sensor) => {
        const url = `http://localhost:3005/data/${room}/${sensor}`
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()
        } else
            return `HTTP error: ${res.status}`
    }
}