import "./invitation.css"

import Sakura from "../components/sakura/sakura";


export function StaticInvitation() {
    // Inspired on https://github.com/vinitshahdeo/Wedding-Invitation/blob/master/css/style.css
    const sakura = new Sakura('body', {colors: [
          {
            gradientColorStart: 'rgba(255, 183, 197, 0.9)',
            gradientColorEnd: 'rgba(255, 197, 208, 0.9)',
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: 'rgba(255,189,189)',
            gradientColorEnd: 'rgba(227,170,181)',
            gradientColorDegree: 120,
          },
          {
            gradientColorStart: 'rgba(212,152,163)',
            gradientColorEnd: 'rgba(242,185,196)',
            gradientColorDegree: 120,
          },
        ],
        delay: 200,
      });
    sakura.start()
    return (
        <main className="">
            <div className="sakura-falling"></div>
            <img src="https://i.imgur.com/dGOOfnA.png" alt="image-top-right" className="top-right-decoration"/>
            <img src="https://i.imgur.com/t6ffnbn.png" alt="image-top-left" className="top-left-decoration"/>
            <section id="media"></section>
            <div className="wrap">
                <div className="title">
                    <h1>Nos </h1>
                    <h2></h2>
                    <h1>Casamos</h1>
                    <h3>25 de Julio de 2026</h3>
                    <h3>Guarda la fecha</h3>
                    {/*<p>*/}
                    {/*    el <span className="date">25 de Julio del 2026</span>, En <span className="place">La finca la havana</span> En Rozo,*/}
                    {/*</p>*/}
                </div>
            </div>

            {/*<div id="time"></div>*/}

            {/*<div className="actions">*/}
            {/*    <a href="https://goo.gl/maps/5z5xX2hTYzU8VGEJ9" target="_blank">*/}
            {/*        <div className="venue">SEE THE VENUE</div>*/}
            {/*    </a>*/}
            {/*    <a href="https://github.com/vinitshahdeo/vinitshahdeo/raw/master/docs/Sonali%20%26%20Gagan.pdf"*/}
            {/*       download="Invitation | 23 Nov | Hope to see you there!">*/}
            {/*        <div className="venue">DOWNLOAD INVITATION CARD</div>*/}
            {/*    </a>*/}
            {/*</div>*/}
            {/*<p className="footer">*/}
            {/*    Can't wait to celebrate auspicious moment of our family with you! <br/>*/}
            {/*    Just a ping away for any queries: +91 8210050314*/}
            {/*    <span></span>*/}
            {/*</p>*/}
            {/*<div className="music">*/}
            {/*    /!*<audio src="./assets/mp3/song.mp3" id="my_audio" loop="loop"></audio>*!/*/}
            {/*</div>*/}
            {/*<p className="happiness">Join us in our happiness!<br/><a href="https://twitter.com/Vinit_Shahdeo" target="_blank"*/}
            {/*                                                          className="twitter"><i className="fa fa-twitter"></i></a>*/}
            {/*</p>*/}


</main>
)
}