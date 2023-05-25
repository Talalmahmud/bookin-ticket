import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="form__section">
            <form>
                <div className="form__controller">
                    <label className="form__input--label" htmlFor="name">
                        Name:
                    </label>
                    <input type="text" placeholder="name" id="name" />
                </div>
                <div className="form__controller">
                    <label className="form__input--label" htmlFor="email">
                        Email:
                    </label>
                    <input type="text" placeholder="email" id="email" />
                </div>
                <div className="form__controller">
                    <label className="form__input--label" htmlFor="password">
                        Password:
                    </label>
                    <input type="text" placeholder="Password" id="password" />
                </div>
                <button type="submit">Sign up</button>
                <p>
                    Already have an account?{" "}
                    <span>
                        <Link style={{ color: "orange" }} to="/login">
                            Login
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
    );
};

export default Signup;
