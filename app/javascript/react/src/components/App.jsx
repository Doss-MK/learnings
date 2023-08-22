import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home";
import User from "../pages/User";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import userReducer from '../features/user';
import themeReducer from '../features/theme'
import Admin from "../pages/Admin";

const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer
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