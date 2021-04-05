import React from 'react'
import Clock from '../Components/Clock'

export default function MyTimezones(props) {

    const removeTimezone = (timezone) => {
        props.setTimezones(props.timezones.filter(zone => {
            return timezone.value !== zone.value
        }))
    }


    return (
        <div>
            { props.timezones.map(zone => {
                return <div>
                    <h2>{zone.value}</h2>
                    <Clock timezone={zone} width="150px" height="auto"/>
                    <button onClick={() => removeTimezone(zone)}>Remove</button>
                    </div>
            })}
        </div>
    )
}