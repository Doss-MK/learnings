import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import User from "../pages/User";

const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/fw/react/home/" element={<Home />} />
                    <Route path="fw/react/user/" element={<User />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
});

export default App;