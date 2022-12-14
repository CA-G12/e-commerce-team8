/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios'
import swal from 'sweetalert';
import './Navbar.css'

export default function Navbar({ user, searchItems }) {
    const [userName, setUserName] = useState('')
    const [search, setSearch] = useState('')

    useEffect(() =>{
        setUserName(user)
    }, [user])
    

    const handleSignOut = () => {
        axios.get('/api/v1/signout')
         .then((res) => {
            swal(res.data.message, '', 'success')
             .then(() => setUserName(''))
         })
    }

    const handleChange = (e) =>{
        setSearch(e.target.value)
        searchItems(e.target.value)
    }

  return (
    <div className='nav'>
        <Link to='/' className="logo">
            <img src='https://i.ibb.co/DD7f1w4/logo-2.png' alt=''/>
        </Link>

        <div className="search">
            <input type='text' placeholder="Search an item" value={search} onChange={handleChange}/>
            <div>
                <i className="fa-sharp fa-solid fa-magnifying-glass" />
            </div>
        </div>

        {userName ? ( <div  className="user">
            <h2>{userName}</h2>
            <Link to='/user/cart'><i className="fa-solid fa-cart-shopping" /></Link>
            <i className="fa-solid fa-right-from-bracket" onClick={handleSignOut} />
        </div>) : ( <ul>
          <li><Link  to ='/signin'>Sing In</Link></li>
          <li><Link  to ='/signup'>Sing Up</Link></li>
        </ul>) }

    </div>
  )
};