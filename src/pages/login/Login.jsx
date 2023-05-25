import React from "react";
import { Link } from "react-router-dom";
import "./login.scss";

const Login = () => {
    return (
        <div>
            <div className="form__section">
                <form>
                    <div className="form__controller">
                        <label className="form__input--label" htmlFor="email">
                            Email:
                        </label>
                        <input type="text" placeholder="email" id="email" />
                    </div>
                    <div className="form__controller">
                        <label
                            className="form__input--label"
                            htmlFor="password"
                        >
                            Password:
                        </label>
                        <input
                            type="text"
                            placeholder="Password"
                            id="password"
                        />
                    </div>
                    <button type="submit">Login</button>
                    <p>
                        Don't have an account?{" "}
                        <span>
                            <Link style={{ color: "orange" }} to="/register">
                                Sign up
                            </Link>
                        </span>
                    </p>

                    <div className="form__bottom">
                        <Link className="form__bottom--btn">
                            Sign up with google
                        </Link>
                        <Link className="form__bottom--btn">
                            Sign up with facebook
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
