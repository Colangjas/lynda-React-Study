import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'
import { BikeDayRow } from './bikedayrow'
import PropTypes from 'prop-types'

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
            {...day}/>
    )}  
        </tbody>
    </table>
)

// BikeDayRow.PropTypes = {
//     days: function(props) {
//         if(!Array.isArray(props.days)) {
//             return new Error("BikeDayList isn't an array, but it should be")
//         } else if (!props.days.length) {
//             return new Error("BikeDayList must have at least one record")
//         } else {
//             return null
//         }
//     }
// }
// BikeDayRow.PropTypes = {
//     resort: PropTypes.string.isRequired,
//     date: PropTypes.instanceOf(Date).isRequired,
//     sun: PropTypes.bool.isRequired,
//     wind: PropTypes.bool.isRequired,

// }

// same as {...day}
//        resort={day.resort}
//        date={day.date}
//        sun={day.sun}
//        wind={day.wind}