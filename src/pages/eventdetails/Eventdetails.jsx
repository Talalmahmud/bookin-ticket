import React, { useContext, useState } from "react";
import "./eventdetails.scss";
import { ButtonContext } from "../../context/Context";
import { useParams } from "react-router-dom";

const Eventdetails = () => {
    const { eventList } = useContext(ButtonContext);
    const { event, name } = useParams();
    const [selectedseat, setSelectedSeat] = useState("");
    const selectedEvent = eventList[event].find((item) => item.type === name);
    console.log(selectedseat);

    const generateSeatNumber = (row, col) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const rowLabel = alphabet[row];
        const seatNumber = `${rowLabel}${col + 1}`;
        return seatNumber;
    };

    const renderSeatPlan = () => {
        // Number of rows
        const cols = 15; // Number of columns
        const rows = (selectedEvent.ticketsAvailable / cols).toFixed(0);

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
        <div className="container event__details ">
            {selectedEvent && (
                <div>
                    <img
                        src={selectedEvent.imgUrl}
                        height={400}
                        width={400}
                        alt=""
                    />
                    <h2>Name:{selectedEvent.name}</h2>
                    <p>Location:{selectedEvent.venue}</p>
                    <p>Date:{selectedEvent.date}</p>
                    <p>Time:{selectedEvent.time}</p>
                    <p>Availableseats:{selectedEvent.ticketsAvailable}</p>
                    <p>Price:{selectedEvent.price}</p>
                    <p>
                        Selectd seat:{" "}
                        <span style={{ color: "green" }}>{selectedseat}</span>
                    </p>
                    <button>Book now</button>
                </div>
            )}
            <div className="seat__chart">
                <h2>Seat Plan</h2>
                {renderSeatPlan()}
            </div>
        </div>
    );
};

export default Eventdetails;
