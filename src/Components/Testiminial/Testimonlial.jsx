import React from "react";
import Review from "./Review";
import img1 from "../../assets/images/user-1.png";
import img2 from "../../assets/images/user-2.png";
import img3 from "../../assets/images/user-3.png";
function Testimonal(){
    return (
        <div className="testimonal">
            <div className="smallcontainer">
                <div className="row">
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star" fifth="fa-regular fa-star" img={img1} name="Sean Parker"/>
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star" fifth="fa-solid fa-star-half-stroke" img={img2} name="Mike Smith"/>
                    <Review para="Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." fourth="fa-solid fa-star-half-stroke" fifth="fa-regular fa-star" img={img3} name="Marbel Joe"/>
                </div>
            </div>
        </div>
    );
}
export default Testimonal;