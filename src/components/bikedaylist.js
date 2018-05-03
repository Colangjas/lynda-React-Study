import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'
import { BikeDayRow } from './bikedayrow'
import { Link } from 'react-router-dom'



export const BikeDayList = ({ days, filter }) => {
    const filteredDays = (!filter || !filter.match(/sun|wind/)) ? days 
    : 
    days.filter(day => day[filter])
    return (
        <div className="ski-day-list">
            <table>
                <thead>
                    <tr>
                        <th>
                            Date
                    </th>
                        <th>
                            Resort
                    </th>
                        <th>
                            Sun
                    </th>
                        <th>
                            Wind
                    </th>
                    </tr>
                    <tr>
                        <td colSpan={4}>
                            <Link to="/list-days">
                                All Days
                            </Link>
                            <Link to="/list-days/sun">
                                Sunny Days
                            </Link>
                            <Link to="/list-days/wind">
                                Windy Days
                            </Link>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {filteredDays.map((day, i) =>
                        <BikeDayRow key={i}
                            {...day} />
                    )}
                </tbody>
            </table>
        </div>
    )
}


// same as {...day}
//        resort={day.resort}
//        date={day.date}
//        sun={day.sun}
//        wind={day.wind}