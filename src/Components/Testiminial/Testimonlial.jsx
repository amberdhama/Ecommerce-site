import React from "react";
import Review from "./Review";
function Testimonal(){
    return (
        <div className="testimonal">
            <div className="smallcontainer">
                <div className="row">
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star" fifth="fa-regular fa-star" img="../../../Images/images/user-1.png" name="Sean Parker"/>
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star" fifth="fa-solid fa-star-half-stroke" img="../../../Images/images/user-2.png" name="Mike Smith"/>
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" img="../../../Images/images/user-3.png" name="Marbel Joe"/>
                </div>
            </div>
        </div>
    );
}
export default Testimonal;