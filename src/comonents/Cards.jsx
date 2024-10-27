import React from "react";
import Carddd from "./Carddd";
function Cards(props) {
    return (
        <>

            <div className="d-flex justify-content-between flex-wrap">

                {props.map((e, index) => (<Carddd key={index} data={e} />))}


            </div>


        </>

    );
}
export default Cards