import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Navbar from "./components/navbar/Navbar";
import { ButtonContext } from "./context/Context";
import { useState } from "react";
import { eventList } from "./data";
import Eventdetails from "./pages/eventdetails/Eventdetails";
import Payment from "./pages/payment/Payment";

function App() {
    const [eventType, setEventType] = useState("Sports");
    const [searchevent, setSearchevent] = useState([]);
    return (
        <ButtonContext.Provider
            value={{
                eventType,
                setEventType,
                eventList,
                searchevent,
                setSearchevent,
            }}
        >
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:event/:name" element={<Eventdetails />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Signup />} />
                    <Route path="/payment" element={<Payment />} />
                </Routes>
            </BrowserRouter>
        </ButtonContext.Provider>
    );
}

export default App;
