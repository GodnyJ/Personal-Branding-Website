import React, {useState} from "react";

export default function Upcoming({children}) {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <section id="upcoming" className="upcoming" onClick={handleClick}>
            <h2>nadchodzące szkolenia</h2>
            <div className="upcoming-info-box">
                {children}
            </div>
        </section>
    )
}