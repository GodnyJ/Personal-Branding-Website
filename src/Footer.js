import React from "react";
import { SlEnvolope } from "react-icons/sl";
import { BsLaptop, BsInstagram } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
    return (
        <section className="footer" id='footer'>
            <div className="footer-box">
                <div className="footer__contact font-settings">
                <h5>kontakt</h5>
                <div className="footer__contact-item footer__contact-email">
                        <img src="footer-email-icon.png" />
                        <div className="footer-text">    
                            <p>napisz do mnie</p>
                            <span>kontakt@marekgodny.pl</span>
                        </div>
                </div>
                <div className="footer__contact-item footer__contact-meeting">
                    <img src="footer-meeting-icon.png"/>
                    <div className="footer-text">
                        <p>spotkajmy się online</p>
                        <a target="_blank" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true"><button className="footer__meeting-btn black-button">umów się</button></a>
                    </div>
                </div>
                <div className="footer__contact-item footer__contact-social-media">
                    <img src="footer-socialmedia-icon.png" />
                    <div className="footer-text">
                        <p>zajrzyj do mnie</p>
                        <div className="footer__contact-media-icon">
                            <a target="_blank" rel="nofollow" href="https://www.instagram.com/marek.godny?igsh=bDh1Mzl4bW82MTFk"><i><BsInstagram size={22} color='#e6e6e6'/></i></a>
                            <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/godny"><i><FaLinkedinIn size={22} color='#e6e6e6'/></i></a>
                            <a target="_blank" rel="nofollow" href="https://godny.substack.com/">blog</a>    
                        </div>    
                    </div>
                </div>
            </div>

            <div className="footer__trainings font-settings">
                <h5>szkolenia</h5>
                <div className="footer__trainings-text footer-text">
                    <p>najbliższe szkolenia live</p>
                    <a href="#trainings"><button>sprawdź</button></a>
                </div>
                <div className="footer__trainings-text footer-text">
                    <p>spotkania indywidualne</p>
                    <div>
                        <a target="_blank" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true"><button>ustalmy szczegóły</button></a>
                    </div>
                    
                </div>

            </div>

            
            <div className="footer__newsletter font-settings">
                <h5>newsletter</h5>
                <div className="footer__trainings-text footer-text">
                    <p>Zapisz się na mój newsletter</p>
                    <a target="_blank" rel="nofollow" href="https://godny.substack.com/"><button>zapisz się</button></a>
                </div>
                </div>
            </div>





            <div className="footer-mobile">
                
                
                        <div className="footer-mobile__contact">    
                            <p>napisz do mnie</p>
                            <h6>kontakt@mojadomena.pl</h6>
                        </div>
                

               
                    <div className="footer-mobile__meeting">
                        <a target="_blank" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2lTFBteuz3q4pyF3CnpLuK95lZMjzSwU4Jsc-QA4w7joVk0CqRK2-cU8trNHtzcUcbW_5g3iDk?gv=true"><p>spotkajmy się online</p></a>
                    </div>
                

                <div className="footer-mobile__trainings">
                    <a href="#upcoming"><p>najbliższe szkolenia live</p></a>
                    
                </div>

                <div className="footer-mobile__newsletter">
                    <a target="_blank" rel="nofollow" href="https://godny.substack.com/"><p>newsletter</p></a>
                </div>

                <div className="footer-mobile__media">
                    <a target="_blank" rel="nofollow" href="https://www.instagram.com/marek.godny?igsh=bDh1Mzl4bW82MTFk"><i><BsInstagram size={22} color='#e6e6e6'/></i></a>
                    <a target="_blank" rel="nofollow" href="https://www.linkedin.com/in/godny"><i><FaLinkedinIn size={22} color='#e6e6e6'/></i></a>
                    <a target="_blank" rel="nofollow" href="https://godny.substack.com/">blog</a>    
                </div>  



            </div>
        </section>
    )
}