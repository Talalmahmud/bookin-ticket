import React, { useContext } from "react";
import "./eventdetails.scss";
import { ButtonContext } from "../../context/Context";
import { useParams } from "react-router-dom";

const Eventdetails = () => {
    const { eventList } = useContext(ButtonContext);
    const { event, name } = useParams();
    const selectedEvent = eventList[event].find((item) => item.type === name);

    const generateSeatNumber = (row, col) => {
        const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const rowLabel = alphabet[row];
        const seatNumber = `${rowLabel}${col + 1}`;
        return seatNumber;
    };

    const renderSeatPlan = () => {
        const rows = 8; // Number of rows
        const cols = 25; // Number of columns

        const seatPlan = [];

        for (let row = 0; row < rows; row++) {
            const seatRow = [];
            for (let col = 0; col < cols; col++) {
                const seatNumber = generateSeatNumber(row, col);
                seatRow.push(
                    <div key={seatNumber} className="seat">
                        {seatNumber}
                    </div>
                );
            }
            seatPlan.push(
                <div key={row} className="seat-row">
                    {seatRow}
                </div>
            );
        }

        return seatPlan;
    };
    return (
        <div className="container">
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
                </div>
            )}
            <div className="seat__chart">{renderSeatPlan()}</div>
        </div>
    );
};

export default Eventdetails;
