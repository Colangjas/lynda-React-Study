import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'


export const BikeDayRow = ({resort, date, sun, wind}) => (
    <tr>
        <td>
            {date.getMonth()+1}/{date.getDate()}/{date.getFullYear()}
        </td>
        <td>
            {resort}
        </td>
        <td>
            {(sun) ? <Sun /> : null}
        </td>
        <td>
            {(wind) ? <Leaf /> : null}
        </td>
    </tr>
)



