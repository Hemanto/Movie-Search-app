import React from 'react'
import { Link } from 'react-router-dom'


const OnTheater = (props) => {

    return (
        <Link to={"/details/"+props.alt+"/"+props.movId}>
            <div className='cover-img'>
                <img src={props.img} alt={props.alt} />
            </div>
        </Link>

    )
}

export default OnTheater
