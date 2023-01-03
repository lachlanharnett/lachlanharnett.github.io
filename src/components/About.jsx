import React from "react";

function About() {
    return (
        <div className="about">
            <div className="container central align-items-center justify-content-center full-background pt-5">
                <div className ="row justify-content-center expand mt-5">
                    <div className="col-1">
                        <h1 className="bracket text-center">&#123;</h1>
                    </div>
                    <div className="col-9">
                        <p className="about-text text-center">
                            Originally from Cairns, QLD, I moved to Brisbane to further my education. I'm currently a Computer Science student
                            at the University of Queensland and will be graduating in 2023. I am majoring in Cybersecurity and have a strong
                            passion for working with fun, interesting and innovative projects. Technology has fascinated me from a young age,
                            so pursuing a career based around this was an easy choice.
                        </p>
                    </div>
                    <div className="col-1">
                        <h1 className="bracket text-center">&#125;</h1>
                    </div>
                </div>
                <div className ="row pt-5 justify-content-center">
                    <p className="info-text text-right">
                        Click here to access my resume: &nbsp;
                    </p>
                    <a href="https://raw.githubusercontent.com/lachlanharnett/lachlanharnett.github.io/main/src/assets/Lachlan%20Harnett%20Resume.pdf" title="Download Resume" download="Lachlan Harnett Resume">
                        <i className="fas fa-file-download fa-2x"/>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default About;