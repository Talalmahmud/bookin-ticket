import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
    return (
        <>
            <div className=" header__section">
                <div className="container header">
                    <Link to="/">
                        <h2 className="header__title">Booking Ticket</h2>
                    </Link>
                    <div>
                        <Link to="/login" className="btn__login">
                            Login/Register
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
