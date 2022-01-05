import React from "react";

function Home() {
    return (
        <div className="home">
            <div className="container central d-flex align-items-center">
                <div className ="row background align-items-center justify-content-center my-5">
                    <div className="col-lg-5 mx-5">
                        <h1 className="font-weight-light text-center my-5">Hi, I'm Lachlan</h1>
                        <p className="intro-text my-5 mx-3 text-center">
                            This is my portfolio site. Feel free to check out my projects or if you would like to contact me you can click the links below.
                        </p>
                        <div className="row justify-content-between mx-5 my-5">
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
                    <div className="col-lg-5 d-flex justify-content-center">
                        <img
                            src="/assets/me.jpg"
                            className="img-fluid border"
                            alt="A picture of myself"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;