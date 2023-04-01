import React from 'react'



function Navbar() {
    return (
        <div>

            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasScrolling">
                        <span className="navbar-toggler-icon"></span>
                        <span className="navbar-brand ml-3 " >Fish Farm Monitoring</span>
                    </button>


                    <div className="offcanvas offcanvas-start  text-bg-dark" data-bs-scroll="true" data-bs-backdrop="false"  tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className="offcanvas-header">
                            <a href="/" className="nav-link"> <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Fish Farm Manager</h5> </a>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    {/* Link to home Page */}
                                     <a className="nav-link active" aria-current="page" href="/">Home</a>  
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/TemperatureGraph">Temperature</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="pHGraph">pH Quality</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="TDSGraph">TDS Value</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
