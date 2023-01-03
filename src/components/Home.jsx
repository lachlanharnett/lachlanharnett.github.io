import React from "react";
import me from "../assets/me.jpg";

function Home() {
    return (
        <div className="home">
            <div className="container central align-items-center justify-content-center full-background pt-3">
                <div className ="row-sm-4 align-items-center justify-content-center py-5 large-typing">
                    <h1 className="col-7 text-center typing-text"> Hi, I'm Lachlan...</h1>
                </div>
                <div className ="row-3 align-items-center justify-content-center pt-4 small-typing">
                    <h1 className="col-7 text-center typing-text"> Hi, I'm </h1>
                </div>
                <div className ="row-3 align-items-center justify-content-center small-typing">
                    <h1 className="col-7 text-center typing-text2">Lachlan</h1>
                </div>
                <div className ="row align-items-center justify-content-center pt-4">
                    <div className="col-md-6 intro-text align-items-center justify-content-center mx-0.5">
                        <p className="text-center my-4">
                            Welcome to my portfolio site, <br/>
                            feel free to check out my projects <br/>
                            or if you would like to contact me <br/>
                            you can click the links below. <br/>
                        </p>

                        <div className="row-sm-12 icons text-center pt-4">
                            <a className="col" href="https://github.com/lachlanharnett">
                                <i className="fab fa-github fa-3x color-purple" title="GitHub"/>
                            </a>
                            <a className="col px-5" href="mailto:lachlanjharnett@gmail.com">
                                <i className="fas fa-envelope-square fa-3x" title="Email: lachlanjharnett@gmail.com"/>
                            </a>
                            <a className="col" href="https://www.linkedin.com/in/lachlan-harnett-6646b8200/">
                                <i className="fab fa-linkedin fa-3x" title="LinkedIn"/>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-5 justify-content-center me-image">
                        <img
                            src={me}
                            className="img-fluid border myimg"
                            alt="A picture of myself"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home;