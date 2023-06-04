import React, { useContext } from "react";
import { ButtonContext } from "../../context/Context";
import "./eventlist.scss";
import { Link } from "react-router-dom";

const EventList = ({ eventType, ...others }) => {
    const { eventList } = useContext(ButtonContext);

    return (
        <div className="eventlist">
            <h3>{eventType}</h3>
            <div className="event_items">
                {eventList[eventType].map((item, index) => (
                    <Link to={`/${eventType}/${item.type}`} key={index}>
                        <div className="event_item">
                            <img
                                src={item.imgUrl}
                                alt=""
                                height={200}
                                width={200}
                            />
                            <p>{item.type}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default EventList;
