import React from 'react'
import PropTypes from 'prop-types';
export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">{props.home} <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="/">Action</a>
                                <a className="dropdown-item" href="/">Another action</a>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </div>
                        </li>

                    </ul>
                 
                </div>
                <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                        <input type="checkbox" className="form-check-input" onClick={props.toggleMode} id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
                    </div>
            </nav>
        </div>
    )
}
Navbar.propTypes = {
    title: PropTypes.string,
    home: PropTypes.string
}
Navbar.defaultProps = {
    title: 'hello',
    home: 'no home'
}