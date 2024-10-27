import React from 'react'

function Carddd(props) {
    return (


        <div class="card">
            <div class="card-img"> <img src={props.data?.img} alt="food" /></div>
            <div class="card-info">
                <p class="text-title">{props.data?.title} </p>
                <p class="text-body">{props.data?.info}</p>
            </div>
            <div class="card-footer">
                <span class="text-title">{props.data?.p}</span>
                <a>  <i class="fa-solid fa-cart-plus fa-lg"></i></a>

            </div>
        </div>
    )
}

export default Carddd
