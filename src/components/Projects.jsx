import React from "react";
import busting from "../assets/busting.png"
import motherboard from "../assets/motherboard.jpg"
import portfolio from "../assets/site.jpg"

function Projects() {
    return (
        <div className="projects">
            <div className="container central align-items-center justify-content-center full-background pt-3">
                <div className="row justify-content-center mt-4">
                    <div className="col-3">
                        <img
                            src={busting}
                            className="img-fluid project-img"
                            alt="Busting web app"
                        />
                    </div>
                    <div className="col-4 mx-5">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h2 className="font-weight-light">Busting</h2>
                            </div>
                        </div>
                        <div className="row mr-3">
                            <p className="project-text">
                                Busting allows you to find the nearest toilet when in need.
                                It was created during the 2020 UQCS Hackathon,
                                and awarded as the most philanthropic project.
                            </p>
                            <p className="project-text-short">
                                Busting is a tool that allows you to find the nearest toilet when in need.
                            </p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row mb-2">
                            <a href="https://github.com/lachlanharnett/UQCS-Hackathon-2020" title="View repository">
                                <i className="fab fa-github busting-github fa-3x project-link"/>
                            </a>
                        </div>
                        <div className="row">
                            <a href="https://lachlanharnett.github.io/UQCS-Hackathon-2020/" title="View web app">
                                <i className="fas fa-external-link-alt fa-3x project-link"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row my-5 justify-content-center">
                    <div className="col-3">
                        <img
                            src={motherboard}
                            className="img-fluid project-img"
                            alt="Green motherboard"
                        />
                    </div>
                    <div className="col-4 mx-5">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h2 className="font-weight-light">Asset Tracker</h2>
                            </div>
                        </div>
                        <div className="row">
                            <p className="project-text">
                                Automatic Asset Tracking dashboard.
                                WIP: Check back later to see my next project.
                            </p>
                            <p className="project-text-short">
                                Automatic Asset Tracking dashboard.
                                WIP: Check back later to see my next project.
                            </p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row mb-2">
                            <a href="https://github.com/lachlanharnett" title="View repository">
                                <i className="fab fa-github busting-github fa-3x project-link"/>
                            </a>
                        </div>
                        <div className="row">
                            <a href="https://github.com/lachlanharnett" title="View web app">
                                <i className="fas fa-external-link-alt fa-3x project-link"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-3">
                        <img
                            src={portfolio}
                            className="img-fluid project-img"
                            alt="My portfolio website homepage"
                        />
                    </div>
                    <div className="col-4 mx-5">
                        <div className="row align-items-center">
                            <div className="col-12">
                                <h2 className="font-weight-light">Portfolio</h2>
                            </div>
                        </div>
                        <div className="row mr-3">
                            <p className="project-text">
                                A portfolio site to showcase my projects, built using React and BootstrapJS.
                            </p>
                            <p className="project-text-short">
                                A portfolio site to showcase my projects, built using React and BootstrapJS.
                            </p>
                        </div>
                    </div>
                    <div className="col-1">
                        <div className="row mb-2">
                            <a href="https://github.com/lachlanharnett/Portfolio-Site" title="View repository">
                                <i className="fab fa-github busting-github fa-3x project-link"/>
                            </a>
                        </div>
                        <div className="row">
                            <a href="https://lachlanharnett.github.io/Portfolio-Site/" title="View web app">
                                <i className="fas fa-external-link-alt fa-3x project-link"/>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Projects;