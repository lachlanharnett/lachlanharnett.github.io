import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container central d-flex align-items-center justify-content-center full-background">
                <div className ="row justify-content-center align-items-center">
                    <div className="col-2 justify-content-center">
                        <h1 className="bracket text-center">&#123;</h1>
                    </div>
                    <div className="col-8 justify-content-center">
                        <p className="about-text">
                            I'm a Computer Science student at The University of Queensland, graduating 2023. I'm majoring in Cybersecurity and have a keen interest in all things Computer Science and Software Engineering.
                        </p>
                    </div>
                    <div className="col-2 justify-content-center">
                        <h1 className="bracket text-center">&#125;</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;