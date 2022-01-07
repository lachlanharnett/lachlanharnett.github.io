import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container central d-flex align-items-center justify-content-center full-background">
                <div className ="row justify-content-center expand">
                    <div className="col-2">
                        <h1 className="bracket text-center">&#123;</h1>
                    </div>
                    <div className="col-8">
                        <h1 className="font-weight-light">Hi, I'm Lachlan</h1>
                        <p className="about-text">
                            I'm a Computer Science student at the University of Queensland, graduating 2023. I'm majoring in Cybersecurity
                        </p>
                    </div>
                    <div className="col-2">
                        <h1 className="bracket text-center">&#125;</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;