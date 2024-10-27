import React from 'react'

function Item2({ data }) {
    return (
        <>
            <div className="card mt-4" style={{ width: 18 + 'rem' }}>
                <img src={data?.image} alt="" />
                <div className="cardbody">
                    <h3>{data.title}</h3>

                    <h5>{data.category}</h5>

                    <h6>{data.price}</h6>
                    <a href="">Add to cart</a>
                </div>

            </div>


        </>
    )
}

export default Item2
