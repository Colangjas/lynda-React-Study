import createClass from 'create-react-class'
import '../css/ui.scss'
import Bicycle from 'react-icons/lib/fa/bicycle'
import Sun from 'react-icons/lib/fa/sun-o'
import Leaf from 'react-icons/lib/fa/envira'
import StarWars from 'react-icons/lib/fa/ra'

export const BikeDayCount = createClass({
  percentToDecimal(decimal) {
    return ((decimal * 100) + '%')
  },
  calcGoalProgress(total, goal) {
    return this.percentToDecimal(total/goal)
  },
  render() {
    return (
      <div className="bike-day-count">
        <div className="total-days">
          <span>{this.props.total}</span>
            <Bicycle />
          <span>days</span>
        </div>
        <div className="sun-days">
          <span>{this.props.sun}</span>
            <Sun />
          <span>days</span>
        </div>
        <div className="wind-days">
          <span>{this.props.wind}</span>
            <Leaf />
          <span>days</span>
        </div>
        <div>
          <span>
            {this.calcGoalProgress(
              this.props.total, 
              this.props.goal
            )}
          </span>
        </div>
      </div>
    )
  }
})