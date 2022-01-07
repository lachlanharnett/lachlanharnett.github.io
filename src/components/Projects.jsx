import React from "react";
import busting from "../assets/busting.png"
import motherboard from "../assets/motherboard.jpg"
import portfolio from "../assets/site.jpg"

function Projects() {
    return (
        <div className="projects">
            <div className="container central d-flex flex-column align-items-center justify-content-center full-background projects-background">
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-4">
                        <img
                            src={busting}
                            className="img-fluid project-img"
                            alt="Busting web app"
                        />
                    </div>
                    <div class="col-5">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <h2 className="font-weight-light">Busting</h2>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x project-link"></i>
                                </a>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x project-link"></i>
                                </a>
                            </div>
                        </div>
                        <p className="project-text">
                            Busting is a tool that allows you to find the nearest toilet when in need. It was created by
                            my team and I during the 2020 University of Queensland Computing Society Hackathon, where it
                            won the most philanthropic prize.

                        </p>
                    </div>
                </div>
                <div className="row justify-content-center my-5 align-items-center">
                    <div className="col-lg-3 col-4">
                        <img
                            src={motherboard}
                            className="img-fluid project-img"
                            alt="Green motherboard"
                        />
                    </div>
                    <div className="col-5">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <h2 className="font-weight-light">Busting</h2>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x project-link"></i>
                                </a>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x project-link"></i>
                                </a>
                            </div>
                        </div>
                        <p className="project-text">
                            Lorem Ipsum is simply dummy text of the printing and

                        </p>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center">
                    <div className="col-lg-3 col-4">
                        <img
                            src={portfolio}
                            className="img-fluid project-img"
                            alt="Green motherboard"
                        />
                    </div>
                    <div className="col-5">
                        <div className="row align-items-center">
                            <div className="col-lg-8 col-md-12">
                                <h2 className="font-weight-light">Portfolio</h2>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://github.com/lachlanharnett/Portfolio-Site" title="View repository">
                                    <i className="fab fa-github busting-github fa-3x project-link"></i>
                                </a>
                            </div>
                            <div className="col-lg-2 col-auto">
                                <a href="https://lachlanharnett.github.io/Portfolio-Site/" title="View web app">
                                    <i className="fas fa-external-link-alt fa-3x project-link"></i>
                                </a>
                            </div>
                        </div>
                        <p className="project-text">
                            A portfolio site to showcase my projects built using React and BootstrapJS.

                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;