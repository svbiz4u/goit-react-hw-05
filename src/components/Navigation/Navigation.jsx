import { NavLink } from "react-router-dom";
import s from './Navigation.module.css'
import clsx from "clsx";

const Navigation = () => {
    const buildLinkClass = ({ isActive }) => {
      return clsx(s.link, isActive && s.linkactive);
    };
    
      return (
        <header>
              <NavLink to='/' className={buildLinkClass}>Home</NavLink>
              <NavLink to='/movies' className={buildLinkClass}>Movies</NavLink>
        </header>
      )
    }
    
    export default Navigation