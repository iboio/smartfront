import Temperature from "../App/Components/Box/Temperature";
import Humidity from "../App/Components/Box/Humidity";
import SoilMoisture from "../App/Components/Box/SoilMoisture";

export default {
    CardChecker: (sensor: Array, data, title) => {
        const sensorType = sensor.filter((item) => item.name === 'featured')
        return sensorType[0].value.map((item) => {
            const sensorTypeFilter = data.filter((dataType) => dataType.type === item)
            const titleTypeFilter = title.filter((titleType) => titleType.type === item)
            if (!sensorTypeFilter[0] ) {
                return null
            }
            if (!titleTypeFilter[0] ) {
                return null
            }
            console.log(titleTypeFilter)
            const type = sensorTypeFilter[0].type
            const value = sensorTypeFilter[0].value
            const sensorTitle = titleTypeFilter[0].name
            if (type === 'temperature') {
                return <Temperature value={value} title={sensorTitle}/>
            } else if (type === 'humidity') {
                return <Humidity value={value} title={sensorTitle}/>
            } else if (type === 'soil') {
                return <SoilMoisture value={value} title={sensorTitle}/>
            }
        })
    },
    RoomDetailsCardChecker: (sensor,name, value) => {
        if (sensor === 'temperature') {
            return <Temperature value={value} title={name}/>
        } else if (sensor === 'humidity') {
            return <Humidity value={value} title={name}/>
        } else if (sensor === 'air-quality') {
            return <SoilMoisture value={value} title={name}/>
        }
    }
}