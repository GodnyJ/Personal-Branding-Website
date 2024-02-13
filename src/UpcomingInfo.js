import React from "react";

export default function UpcomingInfo({iconSrc, title, date, description,id, textBtn}) {
    return (
        <div className="upcoming-info">
            <div className="upcoming-info__left-box">
                <img className="upcoming-info__icon" src={iconSrc} alt="training icon"/>
            </div>
                
            
            <div className="upcoming-info__right-box">
                <h3 className="upcoming-info__title">{title}</h3>
                <p className="upcoming-info__date">{date}</p>
                <p className="upcoming-info__description">{description}Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem est rem earum magni eius repudiandae ad, incidunt consequuntur dolorum quam voluptatibus eum alias voluptatum quibusdam.</p>
                <div className="upcoming-info__btn-box">
                <a href={`#${id}`}><button className="upcoming-info__btn black-button">{textBtn}</button></a>
                </div>
            </div>
        </div>
    )
}