import React, { useContext } from "react";
import { ButtonContext } from "../../context/Context";
import "./search.scss";

const Search = ({ eventType }) => {
    const { eventList, setSearchevent } = useContext(ButtonContext);
    // const [date, setDate] = useState("");
    // const [time, setTime] = useState("");
    // const [type, setType] = useState("");
    // const [location, setLocation] = useState("");
    // const [artist, setArtist] = useState("");

    const handleDate = (e) => {
        // setDate(e.target.value);
        setSearchevent(
            eventList[eventType].find((item) => item.date === e.target.value)
        );
    };
    const handleTime = (e) => {
        // setTime(e.target.value);
        setSearchevent(
            eventList[eventType].find((item) => item.time === e.target.value)
        );
    };
    const handleType = (e) => {
        // setType(e.target.value);
        setSearchevent(
            eventList[eventType].find((item) => item.type === e.target.value)
        );
    };
    const handleArtist = (e) => {
        // setArtist(e.target.value);
        setSearchevent(
            eventList[eventType].find((item) => item.artist === e.target.value)
        );
    };
    const handleLocation = (e) => {
        // setLocation(e.target.value);
        setSearchevent(
            eventList[eventType].find(
                (item) => item.location === e.target.value
            )
        );
    };

    return (
        <div className="search__section">
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
