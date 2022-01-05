import React from "react";
import busting from "../assets/busting.png"
import motherboard from "../assets/motherboard.jpg"
import portfolio from "../assets/site.jpg"

function Projects() {
    return (
        <div className="home">
            <div className="container central d-flex flex-column align-items-center justify-content-center full-background">
                <div className="row justify-content-center">
                    <div className="col-3">
                        <img
                            src={busting}
                            className="img-fluid"
                            alt="Busting web app"
                        />
                    </div>
                    <div class="col-5">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <h1 className="font-weight-light">Busting</h1>
                            </div>
                            <div className="col-2">
                                <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x"></i>
                                </a>
                            </div>
                        </div>
                        <p>
                            Busting is a tool that allows you to find the nearest toilet when in need. It was created by
                            my team and I during the 2020 University of Queensland Computing Society Hackathon, where it
                            won the most philanthropic prize for its potential use for the those with incontinence.

                        </p>
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-3">
                        <img
                            src={motherboard}
                            className="img-fluid"
                            alt="Green motherboard"
                        />
                    </div>
                    <div className="col-5">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <h1 className="font-weight-light">Busting</h1>
                            </div>
                            <div className="col-2">
                                <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x"></i>
                                </a>
                            </div>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and

                        </p>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <img
                            src={portfolio}
                            className="img-fluid"
                            alt="Green motherboard"
                        />
                    </div>
                    <div className="col-5">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <h1 className="font-weight-light">Portfolio</h1>
                            </div>
                            <div className="col-2">
                                <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x"></i>
                                </a>
                            </div>
                            <div className="col-2">
                                <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x"></i>
                                </a>
                            </div>
                        </div>
                        <p>
                            A portfolio site to showcase my projects built using React and BootstrapJS.

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;