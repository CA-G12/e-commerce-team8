/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';


export default function Navbar() {
  return (
    <div className='nav'>
        <div>
            <img src='' alt=''/>
        </div>

        <div>
            <input type='text'/>
            <div>
                <i className="fa-sharp fa-solid fa-magnifying-glass" />
            </div>
        </div>

        <ul>
            <li><Link  to ='/signin'>Sing In</Link></li>
            <li><Link  to ='/signup'>Sing Up</Link></li>
        </ul>

    </div>
  )
}
