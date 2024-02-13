// import React from "react";

// export default function TrainingPage({id, srcLogo, info, title, description, price, srcImg, level, color}) {
//     // const buttonColorClass= `training-page__button training-page__button--btn-color ${color}`
//     // const fontColor = `font-color-${color}`;

//     return (
//         <section id={`${id}`}>
//             <div className="training-page">
            
//                 <div className="training-page__left-side">
//                     <img className="training-page__logo" src={srcLogo} alt=""/>
//                     <div className="training-page__info-title">
//                         <p className="training-page__info">{info}Szkolenie otwarte na żywo</p>
//                         <h3 className="training-page__title">{title}</h3>
//                     </div>
//                     <p className="training-page__description">{description}Naucz się najważniejszych technologii frontendowych pod okiem najlepszych trenerów w Polsce i zostań profesjonalnym programistą. Po kilku miesiącach intensywnej nauki będziesz gotowy/a do rozpoczęcia kariery jako Junior Frontend Developer i wejścia do branży IT.</p>
//                     <p className="training-page__price">{price}</p>

//                     <div className="training-page__buttons">
//                         <button className="training-page__button training-page__button--btn-white">Inne szkolenia</button>
//                         {/* <button className={buttonColorClass}>Zapisz się</button> */}
//                     </div>
//                 </div>

//                 <div className="training-page__right-side">
//                     <img className="training-page__img" src={srcImg} alt=""/>
//                 </div>

//             </div>

            

//             <div className="training-page__edition font-settings">

//                 <div className="training-page__edition--left-side">
//                     <img className="training-page__edition-icon" src="" alt="" />
//                     <div className="training-page__edition-date">
//                         <span>Terraform</span>
//                         <h6 className={fontColor}>22.03.2024</h6>
//                     </div>
//                 </div>

//                 <div className="training-page__edition--right-side ">
                    
//                     <div className="training-page__edition-hours">
//                         <span>Liczba godzin</span>
//                         <h6 className={fontColor}>8h</h6>
//                     </div>

//                     <div className="training-page__edition-level">
//                         <span >Poziom</span>
//                         <h6 className={fontColor}>{level}Od podstaw</h6>
//                     </div>

//                     <div className="training-page__edition-place">
//                         <span>Miejsce</span>
//                         <h6 className={fontColor}>Online na żywo</h6>
//                     </div>

//                 </div>

//             </div>

//         </section>
//     )
// }