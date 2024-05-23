import React from "react";

function BrandLogo(props){
    return (
        <div className="col-5">
            <img src={props.img}/>
        </div>
    );
}
export default BrandLogo;