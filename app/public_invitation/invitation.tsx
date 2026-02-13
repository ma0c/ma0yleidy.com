import  "./fonts/le-jour-script.otf"
import  "./css/timeline.css"
import "./css/main.css"

import villa_monastery  from "./assets/villla_monastery.png";
import logo  from "./assets/logo.png";
import calendar  from "./assets/calendar.png";
import dress_code  from "./assets/dress_code.png";
import llegada  from "./assets/llegada.png";
import ceremonia  from "./assets/ceremonia.png";
import fotos  from "./assets/fotos.png";
import brindis  from "./assets/brindis.png";
import pastel  from "./assets/pastel.png";
import fiesta  from "./assets/fiesta.png";
import cena  from "./assets/cena.png";
import baile  from "./assets/baile.png";
import termina  from "./assets/termina.png";
import monastero_bajo  from "./assets/monastero_bajo.png";

import {useEffect, useState} from "react";

function calculateTimeLeft(targetDate: Date) {
        const now = new Date();
        const difference = targetDate.getTime() - now.getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / (1000 * 60)) % 60),
                seconds: Math.floor((difference / 1000) % 60) ,
            };
        } else {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }
    }

export function Invitation() {

    const targetDate = new Date("2026-07-25T17:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <main className="container-fluid">
            <section id="monastero-upper">
                <div className="row">
                    <img src={villa_monastery} alt="Villa monastero"
                         className="img-fluid mx-auto d-block my-4"/>
                </div>
            </section>
            <section id="media">
                <div className="row">
                    <div className="col text-center">
                        <img src={logo} alt="Logo" className="img-fluid my-4" style={{maxWidth: '450px'}}/>
                        <h1 className="text-capitalize">MAURICIO & LEIDY's</h1>
                        <h2 className="text-capitalize">WEDDING</h2>
                    </div>
                </div>
            </section>
            <section id="calendar">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card mt-5">

                            <div className="card-body">
                                <div className="row text-center">
                                    <div className="col-3">
                                        <h3 id="days" className="display-4">{timeLeft.days.toString().padStart(2, "0")}</h3>
                                        <p className="small">Días</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 id="hours" className="display-4">{timeLeft.hours.toString().padStart(2, "0")}</h3>
                                        <p className="small">Horas</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 id="minutes" className="display-4">{timeLeft.minutes.toString().padStart(2, "0")}</h3>
                                        <p className="small">Minutos</p>
                                    </div>
                                    <div className="col-3">
                                        <h3 id="seconds" className="display-4">{timeLeft.seconds.toString().padStart(2, "0")}</h3>
                                        <p className="small">Segundos</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row  ">
                    <div className="col text-center">
                        <a target="_blank"
                           href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=MnJsMjJwOXEzNzF1N3E1ZGpkN2w2NmtzY20gZmIyNGU0ODBjNGY2ZTdkMTQ3NzVmNjAyNmRkYTA3ZmI5MDUxOGY1OTk3MTcyMzJhMzllZmQxZDM3MTBiYWU5OUBn&amp;tmsrc=fb24e480c4f6e7d14775f6026dda07fb90518f599717232a39efd1d3710bae99%40group.calendar.google.com">
                            <img src={calendar} alt="Save the Date" className="img-fluid my-4"
                                 style={{maxWidth: '800px'}}/>
                        </a>
                    </div>
                </div>
            </section>
            <section id="monastero-lower">
                <div className="row">
                    <img src={monastero_bajo} alt="Villa monastero"
                         className="img-fluid mx-auto d-block my-4"/>
                </div>
            </section>
        </main>
    )
}