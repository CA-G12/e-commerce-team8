/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import './Card.css'
import axios from 'axios'
import swal from 'sweetalert';
import { Link } from "react-router-dom";


export default function Card(props) {
   return (
     <Link
       to={`/product/${props.information.id}`}
       className="card"
     >
       <div >
         <p>{props.information.title}</p>
         <p>{props.information.price}</p>
         <img src={props.information.imgurl} alt="" />
         <p>{props.information.category}</p>
         <p>{props.information.description}</p>
       </div>
     </Link>
   );
}
