import "./invitation.css"

export function StaticInvitation() {
    // Inspired on https://github.com/vinitshahdeo/Wedding-Invitation/blob/master/css/style.css
    return (
        <main className="">
            <div className="sakura-falling"></div>
            <img src="https://i.imgur.com/dGOOfnA.png" alt="image-top-right" className="top-right-decoration"/>
            <img src="https://i.imgur.com/t6ffnbn.png" alt="image-top-left" className="top-left-decoration"/>
            <section id="media"></section>
            <div className="wrap">
                <div className="title">
                    <h1>Mauricio </h1>
                    <h2>y</h2>
                    <h1>Leidy</h1>
                    <h3>Se Casan</h3>
                    <p>
                        el <span className="date">25 de Julio del 2026</span>, En <span className="place">La finca la havana</span> En Rozo,
                    </p>
                </div>
            </div>

            <div id="time"></div>
            <p className="dance-med">
                dinner & dancing to follow
            </p>
            <div className="actions">
                <a href="https://goo.gl/maps/5z5xX2hTYzU8VGEJ9" target="_blank">
                    <div className="venue">SEE THE VENUE</div>
                </a>
                <a href="https://github.com/vinitshahdeo/vinitshahdeo/raw/master/docs/Sonali%20%26%20Gagan.pdf"
                   download="Invitation | 23 Nov | Hope to see you there!">
                    <div className="venue">DOWNLOAD INVITATION CARD</div>
                </a>
            </div>
            <p className="footer">
                Can't wait to celebrate auspicious moment of our family with you! <br/>
                Just a ping away for any queries: +91 8210050314
                <span></span>
            </p>
            <div className="music">
                {/*<audio src="./assets/mp3/song.mp3" id="my_audio" loop="loop"></audio>*/}
            </div>
            <p className="happiness">Join us in our happiness!<br/><a href="https://twitter.com/Vinit_Shahdeo" target="_blank"
                                                                      className="twitter"><i className="fa fa-twitter"></i></a>
            </p>


</main>
)
}