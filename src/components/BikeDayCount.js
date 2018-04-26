// import { Component } from 'react'
// import createClass from 'create-react-class'
// create-react-class not needed anymore as the React.Compenent can be used
import '../css/ui.scss'
import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'

// export const BikeDayCount = createClass({ 
// export class BikeDayCount extends Component {

const percentToDecimal = (decimal) => {
    return ((decimal * 100) + "%")
}
const calcGoalProgress = (total, goal) => {
    return percentToDecimal(total / goal)
}
export const BikeDayCount = ({total=70, sun=20, wind=10, goal=100}) => (
    <div className="bike-day-count">
        <div className="total-days">
            <span>{total} </span>
            <Bicycle />
            <span> days</span>
        </div>
        <div className="sunny-days">
            <span>{sun} </span>
            <Sun />
            <span> days</span>
        </div>
        <div className="windy-days">
            <span>{wind} </span>
            <Leaf />
            <span> days</span>
        </div>
        <div>
            <span>{calcGoalProgress(total, goal)}</span>
        </div>
    </div>
)

// BikeDayCount.defaultProps = {
//     total: 50,
//     sun: 10,
//     wind: 15,
//     goal: 75
// }


