import React, {useState} from "react";

export default function LearningPathInfo({title, info, description, footerColor }) {
    const footerClass = `learning-path__item-footer ${footerColor}`

   const [show, setShow] = useState(false);

  const showText = () => {
    setShow(true);
  };

    return (
        <div className={`learning-path__box  ${show ? 'show-bg' : ''}`}>
            <h5 className="learning-path__item-title font-settings">{title}</h5>
            <p className="learning-path__item-info font-settings">{info}</p>
            <p className={`learning-path__item-description ${show ? 'show' : ''}`}
                onClick={showText}
                // style={show ? { WebkitLineClamp: 'none', overflow: 'visible' } : {}}
            >
                {description}

            </p>
            <div className={footerClass}></div>
        </div>
    )
}