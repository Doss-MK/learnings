import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import User from "../pages/User";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from '../features/user';
import themeReducer from '../features/theme'
import cakeReducer from '../features/cake'
import iceReducer from '../features/ice'
import Admin from "../pages/Admin";
import Profile from "../pages/Profile";
import Cake from "../pages/Cake";
import IceCream from "../pages/IceCream";
import Hook from "../pages/Hook";
import Antd from "../pages/Antd";
import Material from "../pages/Material";
import Stripe from "../pages/Stripe";

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        cake: cakeReducer,
        ice: iceReducer,
    }
})

const App = () => {
    return(
        <div className="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/fw/react/home/" element={<Home />} />
                    <Route path="/fw/react/user/" element={<User />} />
                    <Route path="/fw/react/admin" element={<Admin />} />
                    <Route path="/fw/react/profile" element={<Profile />} />
                    <Route path="/fw/react/cake" element={<Cake />} />
                    <Route path="/fw/react/ice-cream" element={<IceCream />} />
                    <Route path="/fw/react/hooks" element={<Hook />} />
                    <Route path="/fw/react/antd" element={<Antd />} />
                    <Route path="/fw/react/material" element={<Material />} />
                    <Route path="/fw/react/stripe" element={<Stripe />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    );
});

export default App;