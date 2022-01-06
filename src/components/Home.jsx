import React from "react";
import me from "../assets/me.jpg";

function Home() {
    return (
        <div className="home">
            <div className="container central home-full-background d-flex align-items-center">
                <div className ="row background align-items-center justify-content-center my-5">
                    <div className="col-lg-5 col-md-8 mx-5 introduction">
                        <h1 className="font-weight-light text-center my-5">Hi, I'm Lachlan</h1>
                        <p className="intro-text my-5 mx-3 text-center">
                            This is my portfolio site. Feel free to check out my projects or if you would like to contact me you can click the links below.
                        </p>
                        <div className="row icons justify-content-between mx-lg-5 mx-sm-3 my-5">
                            <a href="https://github.com/lachlanharnett">
                                <i className="fab fa-github fa-4x color-purple" title="GitHub"></i>
                            </a>
                            <a href="mailto:lachlanjharnett@gmail.com">
                                <i className="fas fa-envelope-square fa-4x" title="Email: lachlanjharnett@gmail.com"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/lachlan-harnett-6646b8200/">
                                <i className="fab fa-linkedin fa-4x" title="LinkedIn"></i>
                            </a>

                        </div>
                    </div>
                    <div className="col-lg-5 d-flex justify-content-center me-image">
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