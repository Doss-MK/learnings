import React from "react";
import ReactDOM from "react-dom/client";

const Welcome = () => {
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )
}

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<Welcome />);
});

export default Welcome;