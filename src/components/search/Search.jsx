import React, { useContext, useState } from "react";
import { ButtonContext } from "../../context/Context";

const Search = ({ eventType }) => {
    const { eventList } = useContext(ButtonContext);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [location, setLocation] = useState("");
    const [artist, setArtist] = useState("");
    console.log(eventType);

    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleTime = (e) => {
        setTime(e.target.value);
    };
    const handleType = (e) => {
        setType(e.target.value);
    };
    const handleArtist = (e) => {
        setArtist(e.target.value);
    };
    const handleLocation = (e) => {
        setLocation(e.target.value);
    };

    return (
        <div>
            <select onChange={handleType}>
                <option>--Select type--</option>
                {eventType &&
                    eventList[eventType].map((item, index) => (
                        <option key={index}>{item.type}</option>
                    ))}
            </select>
            <select onChange={handleLocation}>
                <option>--Select location--</option>
                {eventType &&
                    eventList[eventType].map((item, index) => (
                        <option key={index}>{item.venue}</option>
                    ))}
            </select>
            <select onChange={handleDate}>
                <option>--Select date--</option>
                {eventType &&
                    eventList[eventType].map((item, index) => (
                        <option key={index}>{item.date}</option>
                    ))}
            </select>
            <select onChange={handleTime}>
                <option>--Select time--</option>
                {eventType &&
                    eventList[eventType].map((item, index) => (
                        <option key={index}>{item.time}</option>
                    ))}
            </select>

            {eventType === "Concerts" && (
                <select onChange={handleArtist}>
                    <option>--Select artist--</option>
                    {eventType &&
                        eventList[eventType].map((item, index) => (
                            <option key={index}>{item.artist}</option>
                        ))}
                </select>
            )}
        </div>
    );
};

export default Search;
