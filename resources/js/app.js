import React from "react";
import ReactDOM from "react-dom/client";

function App() {
    return (
        <div>
            <h1>Hello from React inside Laravel!</h1>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
