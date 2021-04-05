import React, { useState } from 'react'
import TimezoneSelect from 'react-timezone-select'
import Clock from '../Components/Clock';


export default function Home(props) {
    const [timezone, setTimezone] = useState('');

    /**
     * 
     * @param {Event} e 
     */

    const handleSubmit = (e) => {
        e.preventDefault()
        props.setTimezones(props.timezones.concat(timezone))
    }

    const tZoneExists = props.timezones.find((zone) => {
        return zone.value === timezone.value
    })

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TimezoneSelect value={timezone} onChange={setTimezone} />
                <button type="submit" disabled={tZoneExists}>Add</button>
            </form>

            <Clock timezone={timezone}/>
        </div>
    )
}