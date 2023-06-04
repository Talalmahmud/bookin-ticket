import React, { useContext } from "react";
import { ButtonContext } from "../../context/Context";
import { Link } from "react-router-dom";
import "./event.scss";
const Event = () => {
    const { eventType, searchevent } = useContext(ButtonContext);
    return (
        <div className="container single__event">
            {searchevent &&
                searchevent.map((item, index) => (
                    <Link to={`/${eventType}/${item.type}`} key={index}>
                        <div>
                            <img
                                src={item.imgUrl}
                                alt=""
                                height={200}
                                width={200}
                            />
                            <p>Type:{item.type}</p>
                            <p>Name{item.name}</p>
                            <p>Venue:{item.venue}</p>
                            <p>Date:{item.date}</p>
                        </div>
                    </Link>
                ))}
        </div>
    );
};

export default Event;
