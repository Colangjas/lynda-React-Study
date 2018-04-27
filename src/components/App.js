import { Component } from 'react'
import { BikeDayCount } from './BikeDayCount'
import { BikeDayList } from './bikedaylist'
import { Woops404 } from './woops404'

export class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allBikeDays: [
                {
                    resort: "Squaw Valley",
                    date: new Date("1/2/2019"),
                    sun: true,
                    wind: false,
                },
                {
                    resort: "Kirkwood",
                    date: new Date("3/29 /2019"),
                    sun: false,
                    wind: false,
                },
                {
                    resort: "Marmont Basin",
                    date: new Date("4/2/2019"),
                    sun: false,
                    wind: true,
                }
            ]
        }
    }
    countDays(filter) {
        const { allBikeDays } = this.state
        return allBikeDays.filter((day) => (filter) ? day[filter] : day).length
    }
    render() {
        return (
            <div className="app">
                <BikeDayList days={this.state.allBikeDays} />
                <BikeDayCount total={this.countDays()}
                    sun={this.countDays("sun")}
                    wind={this.countDays("wind")} />
            </div>
        )
    }
}