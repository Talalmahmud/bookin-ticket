import React, { useContext, useState } from "react";
import "./eventdetails.scss";
import { ButtonContext } from "../../context/Context";
import { Link, useParams } from "react-router-dom";

const Eventdetails = () => {
    const { eventList } = useContext(ButtonContext);
    const { event, name } = useParams();
    const [selectedseat, setSelectedSeat] = useState("");
    const selectedEvent = eventList[event].find((item) => item.type === name);

    const generateSeatNumber = (row, col) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const rowLabel = alphabet[row];
        const seatNumber = `${rowLabel}${col + 1}`;
        return seatNumber;
    };

    const renderSeatPlan = () => {
        // Number of rows
        const rows = 20;

        const cols = (selectedEvent.ticketsAvailable / rows).toFixed(0); // Number of columns

        const seatPlan = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols; col++) {
                const seatNumber = generateSeatNumber(row, col);
                seatRow.push(
                    <div
                        key={seatNumber}
                        className="seat"
                        onClick={(e) => setSelectedSeat(seatNumber)}
                    >
                        {seatNumber}
                    </div>
                );
            }
            seatPlan.push(
                <div key={row} className="seat__row">
                    {seatRow}
                </div>
            );
        }

        return seatPlan;
    };
    return (
        <div className="container details__section">
            <h2>Book Your Ticket</h2>
            <div className=" event__details ">
                {selectedEvent && (
                    <div>
                        <img src={selectedEvent.imgUrl} alt="" />
                        <h2>
                            Name:<san>{selectedEvent.name}</san>
                        </h2>
                        <p>
                            Location:<span>{selectedEvent.venue}</span>
                        </p>
                        <p>
                            Date:<span>{selectedEvent.date}</span>
                        </p>
                        <p>
                            Time:<span>{selectedEvent.time}</span>
                        </p>
                        <p>
                            Availableseats:
                            <span>{selectedEvent.ticketsAvailable}</span>
                        </p>
                        <p>
                            Price:<span>{selectedEvent.price}</span>
                        </p>
                        <p>
                            Selected seat:{" "}
                            <span style={{ color: "green" }}>
                                {selectedseat}
                            </span>
                        </p>
                        <Link to="/payment">
                            <button>Book now</button>
                        </Link>
                    </div>
                )}
                <div className="seat__chart">
                    <h2>Seat Plan</h2>
                    {renderSeatPlan()}
                </div>
            </div>
        </div>
    );
};

export default Eventdetails;
