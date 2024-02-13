import React from "react";

export default function Training({color, title, srcLogo, info, description, price, srcImg, children }) {
    const buttonColorClass= `training__button training__button--btn-color ${color}`
    const fontColor = `font-color-${color}`;

    return (
        <div id={`${title}`} className="training-box">

            <div className="training">
                <div className="training__left-side">

                    <img className="training__logo" src={srcLogo} alt=""/>
                    <div className="training__info-title">
                        <p className="training__info">{info}Szkolenie otwarte na żywo</p>
                        <h3 className="training__title font-settings">{title}</h3>
                    </div>
                    <p className="training__description">{description}Naucz się najważniejszych technologii frontendowych pod okiem najlepszych trenerów w Polsce i zostań profesjonalnym programistą. Po kilku miesiącach intensywnej nauki będziesz gotowy/a do rozpoczęcia kariery jako Junior Frontend Developer i wejścia do branży IT.</p>
                    <p className="training__price">{price}</p>

                    <div className="training__buttons">
                        <button className="training__button training__button--btn-white">Inne szkolenia</button>
                        <button className={buttonColorClass}>Zapisz się</button>
                    </div>

                </div>

                <div className="training__right-side">
                        <img className="training__img" src={srcImg} alt=""/>
                </div>
            </div>

            {children}


        </div>
    )
}