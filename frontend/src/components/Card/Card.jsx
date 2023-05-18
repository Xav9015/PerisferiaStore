import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className='grid min-w-[280px] max-w-[320px]'>

      <div className="flex flex-col rounded-lg bg-white pt-4 justify-between p-5">
        <div >
          <Link className='flex flex-col justify-center items-center' to={`/store/${props.id}`}>
            <img className=" max-h-[150px] max-w-[150px] min-h-[100px] min-w-[100px] align-center justify-center my-2" src={props.image} alt={props.title} />
            <h5 className="max-w-[150px] text-xl font-semibold tracking-tight text-text text-center ">{props.title}</h5>
          </Link>
        </div>
        <div className="grid justify-center">
          <span className="text-center font-bold text-xl text-text_rating">Rating: {props.rating}</span>
          <span className="text-2xl text-center font-bold text-text ">{`${props.price}$ `}</span>
          <a href="#" className="text-text_button bg-btn hover:bg-btn_hover hover:scale-105 font-medium rounded-lg text-sm px-5 py-2 text-center "> Agregar al carrito</a>
        </div>

      </div>
    </div>
  )
}
// test
export default Card