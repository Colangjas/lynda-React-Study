import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'
import { BikeDayRow } from './bikedayrow'



export const BikeDayList = ({ days }) => (
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
        </thead>
        <tbody>
            {days.map((day, i) =>
                <BikeDayRow key={i}
                    {...day} />
            )}
        </tbody>
    </table>
)


// same as {...day}
//        resort={day.resort}
//        date={day.date}
//        sun={day.sun}
//        wind={day.wind}