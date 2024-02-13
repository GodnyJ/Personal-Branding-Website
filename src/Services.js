import React from "react";

export default function Services({children}) {
    return (
        <section id="services" className="services">
            <h2 >W czym mogę Ci pomóc?</h2>
             <div className="service-items-box">
                {children}
            </div>
        </section>
    )
}