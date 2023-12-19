import React from 'react'
import './Icon.css'
import { FaCheck } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
// import { ReactComponent as CheckSVG } from './check.svg';
// import { ReactComponent as DeleteSVG } from './delete.svg';

const iconTypes = {
    "check": (color, type) => <FaCheck className={`icon-svg-${type}`} fill={color} />,
    "delete": (color, type) => <FaDeleteLeft className={`icon-svg-${type}`} fill={color} />,
  };

function Icon({
    type, color, onClick
}) {
    return (
        <span className='icon' onClick={onClick}>
            {iconTypes[type](color, type)}
        </span>
    )
}

export { Icon }
