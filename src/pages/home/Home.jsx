import React, { useContext } from "react";
import "./home.scss";
import { MdOutlineSportsEsports, MdLocalMovies } from "react-icons/md";
import { GiTempleGate } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";
import { RiMovie2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { ButtonContext } from "../../context/Context";
import Search from "../../components/search/Search";
import EventList from "../../components/eventlist/EventList";
import Event from "../../components/event/Event";
const Home = () => {
    const { eventType, setEventType, searchevent } = useContext(ButtonContext);
    return (
        <>
            <div className="hero__section">
                <div className="container">
                    <div className="hero__items">
                        <div
                            className={`hero__item ${
                                eventType === "All" && "active"
                            }`}
                            onClick={() => setEventType("All")}
                        >
                            <p className="hero__item--title">All</p>
                            <GiTempleGate size={25} />
                        </div>
                        <div
                            className={`hero__item ${
                                eventType === "Sports" && "active"
                            }`}
                            onClick={() => setEventType("Sports")}
                        >
                            <p className="hero__item--title">Sports</p>
                            <MdOutlineSportsEsports size={25} />
                        </div>
                        <div
                            className={`hero__item ${
                                eventType === "Movies" && "active"
                            }`}
                            onClick={() => setEventType("Movies")}
                        >
                            <p className="hero__item--title">Movies</p>
                            <MdLocalMovies size={25} />
                        </div>
                        <div
                            className={`hero__item ${
                                eventType === "Concerts" && "active"
                            }`}
                            onClick={() => setEventType("Concerts")}
                        >
                            <p className="hero__item--title">Concerts</p>
                            <GiSoundOn size={25} />
                        </div>
                        <div
                            className={`hero__item ${
                                eventType === "Theater" && "active"
                            }`}
                            onClick={() => setEventType("Theater")}
                        >
                            <p className="hero__item--title">Theater</p>
                            <RiMovie2Line size={25} />
                        </div>
                    </div>

                    <div className="hero__bottom">
                        <h2>Book your ticket easy and fast way.</h2>
                        <Link className="hero__login--btn" to={"/login"}>
                            Login/Register
                        </Link>
                    </div>
                </div>
            </div>

            <div className="search__section container">
                <Search eventType={eventType} />
            </div>
            {searchevent && <Event />}
            <div className="event__section container">
                <h2>All Events</h2>
                <EventList eventType={"Sports"} />
                <EventList eventType={"Movies"} />
                <EventList eventType={"Concerts"} />
                <EventList eventType={"Theater"} />
            </div>
        </>
    );
};

export default Home;
