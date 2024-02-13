import React from "react";

export default function TrainingsSection({children}) {
    return (
        <section className="trainings-section">
            <h2>Dostępne szkolenia:</h2>
            <div className="trainings-box">
                {children}
            </div>
        </section>
    )
}