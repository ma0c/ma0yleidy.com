

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

import { useParams, useNavigate } from "react-router";
import {Button, Modal} from "react-bootstrap";

import  "./fonts/le-jour-script.otf"
import  "./css/timeline.css"
import "./css/main.css"
import "./css/envelope.css"

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
    const validInvitees: string[] = ['angie-y-walter', 'nancy', 'blanca-y-elvia', 'jenid', 'libardo-y-gloria', 'estefania-y-juan-carlos', 'silaney-y-robinson', 'rosa-y-adrian', 'eric', 'cristian', 'camilo', 'raquel-y-camilo', 'sebastian-perez', 'sofia-y-david', 'ruben-y-sergio', 'tefa', 'nando-y-alejandra', 'johan', 'carolina', 'maria-isabel', 'carlos-y-laura', 'ana-maria', 'duber', 'bryan-y-lorena', 'gessiel', 'karem', 'johana-y-mafe', 'kevin-y-sofia', 'juan-carlos-y-samuel', 'andrea-y-carlos', 'ivan-y-juanes', 'wilson-y-noelbi', 'juan-esteban-bedoya', 'nuri-jorge-y-jorgito', 'robinson-y-danny', 'samuel-y-maria', 'hellen', 'estefania-y-kathe', 'rodrigo', 'mari', 'gladis', 'jose-david-y-marjorie', 'carlos--andres-y-esposa', 'yazmin-y-nore', 'brandon', 'javier', 'julian', 'nates', 'zulma', 'maria-y-alfonso', 'dany-mauricio', 'juan-esteban-sierra', 'walter-y-esposa', 'maria', 'bernice']

    const inviteeToNameMap: Record<string, string> = {'angie-y-walter': 'Angie y Walter', 'nancy': 'Nancy', 'blanca-y-elvia': 'Blanca y Elvia', 'jenid': 'Jenid', 'libardo-y-gloria': 'Libardo y Gloria', 'estefania-y-juan-carlos': 'Estefanía y Juan Carlos', 'silaney-y-robinson': 'Silaney y Robinson', 'rosa-y-adrian': 'Rosa y Adrian', 'eric': 'Eric', 'cristian': 'Cristian', 'camilo': 'Camilo', 'raquel-y-camilo': 'Raquel y Camilo', 'sebastian-perez': 'Sebastián Perez', 'sofia-y-david': 'Sofía y David', 'ruben-y-sergio': 'Ruben y Sergio', 'tefa': 'Tefa', 'nando-y-alejandra': 'Nando y Alejandra', 'johan': 'Johan', 'carolina': 'Carolina', 'maria-isabel': 'Maria Isabel', 'carlos-y-laura': 'Carlos y Laura', 'ana-maria': 'Ana María', 'duber': 'Duber', 'bryan-y-lorena': 'Bryan y Lorena', 'gessiel': 'Gessiel', 'karem': 'Karem', 'johana-y-mafe': 'Johana y Mafe', 'kevin-y-sofia': 'Kevin y Sofia', 'juan-carlos-y-samuel': 'Juan Carlos y Samuel', 'andrea-y-carlos': 'Andrea y Carlos', 'ivan-y-juanes': 'Ivan y Juanes', 'wilson-y-noelbi': 'Wilson y Noelbi', 'juan-esteban-bedoya': 'Juan Esteban Bedoya', 'nuri-jorge-y-jorgito': 'Nuri Jorge y Jorgito', 'robinson-y-danny': 'Robinson y Danny', 'samuel-y-maria': 'Samuel y Maria', 'hellen': 'Hellen', 'estefania-y-kathe': 'Estefanía y Kathe', 'rodrigo': 'Rodrigo', 'mari': 'Mari', 'gladis': 'Gladis', 'jose-david-y-marjorie': 'Jose David y Marjorie', 'carlos--andres-y-esposa': 'Carlos  Andres y Esposa', 'yazmin-y-nore': 'Yazmin y Nore', 'brandon': 'Brandon', 'javier': 'Javier', 'julian': 'Julian', 'nates': 'Nates', 'zulma': 'Zulma', 'maria-y-alfonso': 'Maria y Alfonso', 'dany-mauricio': 'Dany Mauricio', 'juan-esteban-sierra': 'Juan Esteban Sierra', 'walter-y-esposa': 'Walter y Esposa', 'maria': 'Maria', 'bernice': 'Bernice'}

    const { invitee } = useParams();

    if (!invitee || !validInvitees.includes(invitee)) {
        const navigate = useNavigate();
        useEffect(() => {
            navigate("/");
        }, [navigate]);
        return null; // O un mensaje de error si prefieres
    }

    const targetDate = new Date("2026-07-25T17:00:00");
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));


    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    // Modal state
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
            <section id="invitation">

                <div className="row ">
                    <div className="col-9 mx-auto">
                        <p>
                            Hemos elegido con amor a las personas que deseamos tener a nuestro lado en este día tan
                            especial,
                            y nos llena de alegría invitarte a formar parte de nuestra historia
                        </p>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-9 mx-auto">
                        <p>
                            Será una boda íntima, creada para compartirla solo con personas muy especiales para
                            nosotros.
                        </p>
                        <p className="fw-bold">
                            Te agradecemos confirmar tu asistencia y acompañarnos puntualmente para que no te pierdas de
                            nada!
                        </p>
                    </div>
                </div>
            </section>
            <section id="dress-code">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h1 className="le-jour-font">
                            Dress Code
                        </h1>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-9 mx-auto">
                        <p>
                            Formal Moderno
                        </p>
                        <p>
                            Elegantem sobrio y contemporaneo
                        </p>
                        <p>
                            Paleta sugerida: beige, arena, camel café, chocolate, champagne, nude, marfíl, negro y gris
                            cálido
                        </p>
                        <p>
                            Evitar colores fuertes, estampados llamativos y brillos excesivos
                        </p>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col text-center">

                        <h1 className="le-jour-font">Paleta de color</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" fill="currentColor"
                             className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" color="#83624E"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" fill="currentColor"
                             className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" color="#C07A4C"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" fill="currentColor"
                             className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" color="#BFA796"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" fill="currentColor"
                             className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" color="#52362B"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" fill="currentColor"
                             className="bi bi-circle-fill" viewBox="0 0 16 16">
                            <circle cx="8" cy="8" r="8" color="#000000"/>
                        </svg>
                    </div>

                </div>
                <div className="row ">
                    <div className="col d-block text-center">

                        <img src={dress_code} alt="Dress code" className="img-fluid"/>
                    </div>
                </div>
            </section>
            <section>

                <div className="row">
                    <div className="col text-center">
                        <h1 className="le-jour-font">
                            <i className="bi bi-geo-alt"></i>
                            Lugar
                        </h1>
                        <h3>
                            Finca la Havana Rozo
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <div className="embed-map-fixed">
                            <div className="embed-map-container">
                                <iframe className="embed-map-frame" frameBorder="0" scrolling="no" marginHeight={0}
                                        marginWidth={0}
                                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Finca%20la%20habana%20rozo&t=&z=14&ie=UTF8&iwloc=B&output=embed"></iframe>
                            </div>

                        </div>
                    </div>
                </div>

            </section>
            <section>

                <div className="row mt-5">
                    <div className="col text-center">
                        <h1 className="le-jour-font">

                            Itinerario
                        </h1>
                    </div>
                </div>
                <div className="row">

                    <div className="row justify-content-center">
                        <div className="col">
                            <div className="card widget-card bsb-timeline-8 border-light shadow-sm">
                                <div className="">
                                    <ul className="timeline">
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                        <span>
                                            <img className="img img-fluid" src={llegada} alt="Llegada"
                                                 style={{maxWidth: '45px'}}/>
                                        </span>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">4:30 a 5:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Llegada y Cocktail</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={ceremonia}
                                                         alt="Ceremonia" style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">5:00 a 6:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Inicio de la ceremonia</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={fotos} alt="Fotos"
                                                         style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">6:00 a 6:30 p.m.</h6>
                                                    <span className="text-secondary fs-7">Sesión de fotos</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={brindis}
                                                         alt="Brindis" style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">6:30 a 7:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Recepcion y brindis</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={cena} alt="Cena"
                                                         style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">7:00 a 8:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Cena y banquete</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={pastel} alt="Pastel"
                                                         style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">8:00 a 8:30 p.m.</h6>
                                                    <span className="text-secondary fs-7">Partida del pastel</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={baile} alt="Baile"
                                                         style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">8:30 a 7:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Baile de los novios</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={fiesta} alt="Fiesta"
                                                         style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">9:00 a 11:30 p.m.</h6>
                                                    <span className="text-secondary fs-7">Inicio de la fiesta</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="timeline-item">
                                            <div className="timeline-body">
                                                <div className="timeline-meta">
                                                    <img className="img img-fluid" src={termina}
                                                         alt="Termina" style={{maxWidth: '45px'}}/>
                                                </div>
                                                <div className="timeline-content timeline-indicator">
                                                    <h6 className="mb-1">11:30 a 12:00 p.m.</h6>
                                                    <span className="text-secondary fs-7">Termina la celebración</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section id="confirmar">
                <div className="row mt-5">
                    <div className="col text-center">
                        <a href="https://wa.me/12523496599?text=Confirmo mi asistencia a vuestra boda"
                           className="btn btn-primary custom-btn btn-lg my-4 big-text ">Confirmar Asistencia</a>
                    </div>
                </div>
            </section>
            <section id="monastero-lower">
                <div className="row">
                    <img src={monastero_bajo} alt="Villa monastero"
                         className="img-fluid mx-auto d-block my-4"/>
                </div>
            </section>
            <section id="modal">
               <Modal show={show} onHide={handleClose} fullscreen={true} >
                   <Modal.Body style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                       <div className="wrapper">
                           <div className="lid one"></div>
                           <div className="lid two"></div>
                           <div className="envelope"></div>
                           <div className="letter text-center">
                               <h2 className="le-jour-font text-center">
                                   {inviteeToNameMap[invitee]}
                               </h2>
                               <p>
                                   Nos casamos
                               </p>
                               <Button className="btn btn-primary custom-btn" onClick={handleClose}>
                                    Click para mas detalles
                              </Button>
                           </div>
                       </div>
                   </Modal.Body>
                  </Modal>
            </section>
        </main>
    )
}