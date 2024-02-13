import React from "react";

export default function TrainingEdition({color, level}) {
    const fontColor = `font-color-${color}`;

    return (
        <div className="training__edition font-settings">

                <div className="training__edition--left-side">
                    <img className="training__edition-icon" src="" alt="" />
                    <div className="training__edition-date">
                        <span>Terraform</span>
                        <h6 className={fontColor}>22.03.2024</h6>
                    </div>
                </div>

                <div className="training__edition--right-side ">
                    
                    <div className="training__edition-hours">
                        <span>Liczba godzin</span>
                        <h6 className={fontColor}>8h</h6>
                    </div>

                    <div className="training__edition-level">
                        <span >Poziom</span>
                        <h6 className={fontColor}>{level}</h6>
                    </div>

                    <div className="training__edition-place">
                        <span>Miejsce</span>
                        <h6 className={fontColor}>Online na żywo</h6>
                    </div>

                </div>

            </div>
    )
}