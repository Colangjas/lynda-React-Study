import { Link } from 'react-router-dom'
import Home from 'react-icons/lib/fa/home'
import ListDays from 'react-icons/lib/fa/calendar'
import AddDay from 'react-icons/lib/fa/calendar-plus-o'

export const Menu = () =>
    <nav className="menu">
        <Link to="/" activeClassName="selected"><Home /></Link>
        <Link to="/list-days" activeClassName="selected"><ListDays /></Link>
        <Link to="/add-day" activeClassName="selected"><AddDay /></Link>
    </nav>
