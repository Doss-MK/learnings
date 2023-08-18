import React from "react";
import ReactDOM from "react-dom/client";

const Welcome = () => {
    return(
        <></>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<Welcome />);
});

export default Welcome;