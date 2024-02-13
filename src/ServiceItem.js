import React from "react";

export default function ServiceItem({srcIcon, title, description, textButton, linkButton}) {
    return (
        <>
            <div className="service-item">
                <img className="service-item__icon" src={srcIcon} alt=""/>
                <h3 className="service-item__title">{title}</h3>
                <p className="service-item__description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam a voluptas magni aperiam reprehenderit dignissimos molestiae illum eum obcaecati, eos reiciendis, beatae ipsam delectus.</p>
                <a href={linkButton} target="_blank"><button className="service-item__button black-button">{textButton}</button></a>
            </div>
                
            <div className="service-mobile">
                <a href={linkButton} target="_blank">
                    <img className="service-mobile__icon" src={srcIcon} alt=""/>
                    <h3 className="service-mobile__title font-settings">{title}</h3>
                </a>
            </div>
        </>
    )
}