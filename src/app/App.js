import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    BrowserRouter as Router,
    useLocation,
} from "react-router-dom";
import Toppage from "../pages";
import "./App.css";

export default function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Toppage />
        </Router>
    );
}
